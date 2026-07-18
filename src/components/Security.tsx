"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileX, SmartphoneNfc } from 'lucide-react';
import styles from './Security.module.css';

const securityFeatures = [
  { icon: FileX, title: "No Server Storage", desc: "Files stream directly to your device. We do not permanently store your files on our servers." },
  { icon: Lock, title: "Encrypted Traffic", desc: "All communications between your device and Telegram use industry-standard encryption." },
  { icon: SmartphoneNfc, title: "Local Storage Only", desc: "Files are stored exclusively on your device. You have complete control over your data." },
  { icon: ShieldCheck, title: "Minimal Permissions", desc: "TeleTorrent only asks for the permissions it absolutely needs to function. Nothing extra." }
];

export default function Security() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={`section-padding ${styles.securitySection}`} id="security">
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.iconWrapper}>
              <ShieldCheck size={32} />
            </div>
            <h2 className="text-h2">Your privacy is our priority.</h2>
            <p className="text-subtitle">
              We built TeleTorrent with security in mind from day one. You shouldn't have to compromise your privacy for faster downloads.
            </p>
          </motion.div>

          <motion.div 
            className={styles.features}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={itemVariants} className={`${styles.featureCard} glass`}>
                  <div className={styles.featureIcon}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
