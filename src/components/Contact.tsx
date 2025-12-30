import { MessageCircle, MapPin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
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
          Book your appointment today and start your journey to beautiful hair
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
                  href="https://api.whatsapp.com/send?phone=97333263906" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +973 3326 3906
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
                  href="https://maps.app.goo.gl/Qw9yFp3MLCGncCnz5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
                <p>Bahrain</p>
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
                <Instagram size={24} />
              </motion.div>
              <div>
                <h4>Follow Us</h4>
                <a 
                  href="https://www.instagram.com/keratinglow_bh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  @keratinglow_bh
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
                href="https://api.whatsapp.com/send?phone=97333263906" 
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5063.4202353867195!2d50.47492395736732!3d26.18435372014316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49b10030d38e03%3A0x98ae3cadb957cafd!2sKeratin%20Glow!5e0!3m2!1sen!2sbh!4v1766471199043!5m2!1sen!2sbh"
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
                href="https://maps.app.goo.gl/Qw9yFp3MLCGncCnz5" 
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
