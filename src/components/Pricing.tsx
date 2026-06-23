import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../config/site';
import './Pricing.css';

const pricingData = {
  keratin: {
    title: "Keratin | Botox | Protein",
    items: [
      { name: "Short hair", price: "from 80 BD" },
      { name: "Medium length", price: "from 100 BD" },
      { name: "Long hair", price: "from 120 BD" }
    ]
  },
  treatments: {
    title: "Treatments",
    items: [
      { name: "Cold restoration", price: "from 20 BD" },
      { name: "Air touch", price: "from 70 BD" },
      { name: "Peeling", price: "from 30 BD" }
    ]
  },
  color: {
    title: "Hair Color",
    items: [
      { name: "Total blond | Balayage", price: "from 60 BD" },
      { name: "Hair color full color", price: "from 40 BD" },
      { name: "Roots color", price: "from 20 BD" },
      { name: "Curls treatment", price: "from 40 BD" },
      { name: "Complex repair treatment", price: "from 30 BD" }
    ]
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  })
};

const Pricing = () => {
  const pricingCards = [
    { data: pricingData.keratin, featured: false },
    { data: pricingData.treatments, featured: false },
    { data: pricingData.color, featured: true }
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Price List
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Keratin treatment and hair service prices in Bahrain — all prices in Bahraini Dinar (BD)
        </motion.p>

        <div className="pricing-grid">
          {pricingCards.map((card, index) => (
            <motion.div 
              key={index}
              className={`pricing-card ${card.featured ? 'pricing-card-featured' : ''}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="pricing-card-title">{card.data.title}</h3>
              <div className="pricing-items">
                {card.data.items.map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    className="pricing-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <span className="pricing-item-name">{item.name}</span>
                    <span className="pricing-item-dots"></span>
                    <motion.span 
                      className="pricing-item-price"
                      whileHover={{ scale: 1.1, color: "#d4af37" }}
                    >
                      {item.price}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="pricing-note"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            All prices are starting from the listed amount and may vary based on hair length, thickness, and condition.<br />
            Special pricing for Afro hair: +100% to the base price
          </p>
        </motion.div>

        <motion.div 
          className="pricing-cta"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
