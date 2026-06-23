import { motion } from 'framer-motion';
import { FAQ_ITEMS } from '../config/site';
import './FAQ.css';

const FAQ = () => {
  return (
    <section id="faq" className="faq">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to know about keratin treatments and hair services in Bahrain
        </motion.p>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => {
            const isArabic = /[\u0600-\u06FF]/.test(item.question);
            return (
            <motion.details
              key={index}
              className="faq-item"
              lang={isArabic ? 'ar' : undefined}
              dir={isArabic ? 'rtl' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <summary className="faq-question">{item.question}</summary>
              <p className="faq-answer">{item.answer}</p>
            </motion.details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
