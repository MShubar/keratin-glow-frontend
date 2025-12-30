import { Sparkles, Wind, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
  {
    icon: <Sparkles size={40} />,
    title: "Keratin Treatment",
    subtitle: "BOTOX | PROTEIN",
    description: "A procedure to slightly modify the natural or acquired structure of the hair. Has more nourishing power than keratin and the strongest thermal protection. Creates a powerful protective shell around the hair.",
    features: [
      "Straight, smooth, shiny, nourished and protected hair",
      "Effect: 3-4 to 8 months",
      "Time procedure: 3-5 hours"
    ],
    ideal: "If you have damaged hair and a slight wave - we recommend Botox. It will shape your hair and straighten curls that are not severe in strength, create a thick protective sheath and help your hair grow back."
  },
  {
    icon: <Wind size={40} />,
    title: "Nanoplasty/Protein",
    subtitle: "STRONGEST STRAIGHTENING",
    description: "The strongest type of hair straightening. This procedure is created for strong and tight curls, severe frizz (for Afro, East or very curly hair). Nanoplasty should not be done on straight, bleached hair.",
    features: [
      "Perfectly straight and protected hair",
      "Effect: 6-12 months",
      "Time procedure: 3-5 hours"
    ],
    ideal: "If you have incredible volume and very small and tight curls from birth, then you definitely need nanoplasty. But remember - the hair before nano should be of good quality, because it is the most powerful procedure to straighten and change the structure of the hair.",
    specialNote: {
      title: "🌟 Special Note: Afro Hair",
      text: "Afro hair is the most difficult hair to work with. The master needs a lot of time to straighten this hair.",
      highlight: "*100% to the price"
    }
  },
  {
    icon: <Zap size={40} />,
    title: "Hair Color & Treatment",
    subtitle: "FULL COLOR SERVICES",
    description: "Professional hair coloring services including balayage, full color, roots touch-up, and specialized treatments for damaged hair.",
    features: [
      "Total blond balayage",
      "Hair color full color",
      "Roots color",
      "Curls treatment",
      "Complex repair treatment"
    ],
    ideal: "Whether you want a complete transformation or simple maintenance, our expert colorists will create the perfect look while maintaining hair health."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  }
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Professional hair treatments and services designed to transform and maintain your beautiful hair
        </motion.p>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="service-icon"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-subtitle">{service.subtitle}</p>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                <h4>Result:</h4>
                <ul>
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="service-ideal">
                <h4>How do I know if I need this?</h4>
                <p>{service.ideal}</p>
              </div>

              {service.specialNote && (
                <motion.div 
                  className="special-note-inline"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4>{service.specialNote.title}</h4>
                  <p>{service.specialNote.text}</p>
                  <strong>{service.specialNote.highlight}</strong>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
