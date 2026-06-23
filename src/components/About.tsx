import { Award, Heart, Star, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const features = [
  { icon: <Award size={32} />, title: "Expert Master", desc: "Certified and experienced in all hair treatment techniques" },
  { icon: <Heart size={32} />, title: "Premium Care", desc: "Using only the highest quality products for your hair" },
  { icon: <Star size={32} />, title: "Proven Results", desc: "Long-lasting treatments that truly transform your hair" },
  { icon: <Users size={32} />, title: "Loyal Clients", desc: "Building lasting relationships with satisfied customers" }
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Keratin Glow
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your trusted keratin treatment and hair care specialist in Janabiyah, Bahrain
        </motion.p>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Hair Master in the GCC
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              At Keratin Glow in Janabiyah, Bahrain, we specialize in advanced hair treatments that transform and revitalize your hair. 
              Our expert services include keratin treatments, nanoplasty, cold restoration, and professional hair coloring — serving clients across Manama and the wider GCC.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
               <strong>You will be my regular client </strong><br />
              We don't just provide services – we build lasting relationships with our clients. Our commitment 
              is to help you achieve and maintain gorgeous, healthy hair throughout your journey with us.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
               <strong>Will stay years together and will grow gorgeous hair for you</strong><br />
              We use only the highest quality products and the latest techniques to ensure your hair receives 
              the best care possible. Whether you're looking to repair damaged hair, achieve silky smooth results, 
              or transform your look entirely, we're here to make it happen.
            </motion.p>
          </motion.div>

          <div className="about-features">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 15px 30px rgba(212, 175, 55, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
