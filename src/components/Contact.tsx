import { MessageCircle, MapPin, Instagram, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  MAPS_URL,
  OPENING_HOURS,
  OPENING_HOURS_SUMMARY,
  PHONE_DISPLAY,
  WHATSAPP_URL,
} from '../config/site';
import './Contact.css';

const contactItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book your keratin treatment appointment in Bahrain — Janabiyah
        </motion.p>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Contact Information
            </motion.h3>
            
            <motion.div 
              className="contact-item"
              custom={0}
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MessageCircle size={24} />
              </motion.div>
              <div>
                <h4>WhatsApp</h4>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {PHONE_DISPLAY}
                </a>
                <p>Available for bookings and inquiries</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              custom={1}
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin size={24} />
              </motion.div>
              <div>
                <h4>Location</h4>
                <a 
                  href={MAPS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
                {ADDRESS.displayLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              custom={2}
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Clock size={24} />
              </motion.div>
              <div>
                <h4>Opening Hours</h4>
                <p>{OPENING_HOURS_SUMMARY}</p>
                <ul className="contact-hours-list">
                  {OPENING_HOURS.map(({ day, display }) => (
                    <li key={day}>
                      <span className="contact-hours-day">{day}</span>
                      <span>{display}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              className="contact-item"
              custom={3}
              variants={contactItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Instagram size={24} />
              </motion.div>
              <div>
                <h4>Follow Us</h4>
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {INSTAGRAM_HANDLE}
                </a>
                <p>Stay updated with our latest work and transformations</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-cta"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle size={20} />
                Book Now on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="contact-map"
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Keratin Glow Location"
            ></iframe>
            <motion.p 
              className="map-note"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <a 
                href={MAPS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Click here for exact location
              </a>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
