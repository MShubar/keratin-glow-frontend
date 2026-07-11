import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/gallery';
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

const Gallery = () => {
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
                  <img
                    src={item.before}
                    alt={`Before ${item.treatment} — ${item.title}`}
                    width={480}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Before</figcaption>
                </figure>
                <figure className="gallery-photo">
                  <img
                    src={item.after}
                    alt={`After ${item.treatment} — ${item.title}`}
                    width={480}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
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
    </section>
  );
};

export default Gallery;
