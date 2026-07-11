import { useEffect, useId, useState, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Instagram, X } from 'lucide-react';
import { GALLERY_ITEMS, type GalleryItem, type GalleryPhotoFit } from '../config/gallery';
import { INSTAGRAM_URL } from '../config/site';
import './Gallery.css';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

function photoFitStyle(fit?: GalleryPhotoFit): CSSProperties | undefined {
  if (!fit) return undefined;
  return {
    ['--photo-scale' as string]: String(fit.scale ?? 1),
    ['--photo-position' as string]: fit.position ?? 'center 20%',
  };
}

type LightboxState = {
  item: GalleryItem;
  focus: 'before' | 'after';
};

const Gallery = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const titleId = useId();

  useEffect(() => {
    if (!lightbox) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightbox]);

  return (
    <section id="results" className="gallery">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Transformations
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real results from keratin, nanoplasty, and color treatments at Keratin Glow Bahrain
        </motion.p>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.article
              key={item.id}
              className="gallery-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
            >
              <div className="gallery-card-header">
                <span className="gallery-treatment">{item.treatment}</span>
                <h3 className="gallery-card-title">{item.title}</h3>
                <p className="gallery-card-desc">{item.description}</p>
              </div>

              <div className="gallery-compare">
                <figure className="gallery-photo">
                  <button
                    type="button"
                    className="gallery-photo-button"
                    aria-label={`View larger before photo — ${item.title}`}
                    onClick={() => setLightbox({ item, focus: 'before' })}
                  >
                    <img
                      src={item.before}
                      alt={`Before ${item.treatment} — ${item.title}`}
                      width={480}
                      height={640}
                      loading="lazy"
                      decoding="async"
                      style={photoFitStyle(item.beforeFit)}
                    />
                  </button>
                  <figcaption>Before</figcaption>
                </figure>
                <figure className="gallery-photo">
                  <button
                    type="button"
                    className="gallery-photo-button"
                    aria-label={`View larger after photo — ${item.title}`}
                    onClick={() => setLightbox({ item, focus: 'after' })}
                  >
                    <img
                      src={item.after}
                      alt={`After ${item.treatment} — ${item.title}`}
                      width={480}
                      height={640}
                      loading="lazy"
                      decoding="async"
                      style={photoFitStyle(item.afterFit)}
                    />
                  </button>
                  <figcaption>After</figcaption>
                </figure>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="gallery-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p>See more transformations on our Instagram</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Instagram size={20} />
            Follow @keratinglow_bh
          </a>
        </motion.div>
      </div>

      {createPortal(
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="gallery-lightbox"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setLightbox(null)}
            >
              <motion.div
                className="gallery-lightbox-panel"
                initial={{ opacity: 0, scale: 0.96, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <div className="gallery-lightbox-header">
                  <div>
                    <p className="gallery-lightbox-treatment">{lightbox.item.treatment}</p>
                    <h3 id={titleId} className="gallery-lightbox-title">
                      {lightbox.item.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="gallery-lightbox-close"
                    aria-label="Close photo viewer"
                    onClick={() => setLightbox(null)}
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="gallery-lightbox-compare">
                  <figure
                    className={`gallery-lightbox-photo${lightbox.focus === 'before' ? ' is-focused' : ''}`}
                  >
                    <img
                      src={lightbox.item.before}
                      alt={`Before ${lightbox.item.treatment} — ${lightbox.item.title}`}
                      width={768}
                      height={1024}
                    />
                    <figcaption>Before</figcaption>
                  </figure>
                  <figure
                    className={`gallery-lightbox-photo${lightbox.focus === 'after' ? ' is-focused' : ''}`}
                  >
                    <img
                      src={lightbox.item.after}
                      alt={`After ${lightbox.item.treatment} — ${lightbox.item.title}`}
                      width={768}
                      height={1024}
                    />
                    <figcaption>After</figcaption>
                  </figure>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </section>
  );
};

export default Gallery;
