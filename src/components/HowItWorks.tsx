"use client";

import { motion } from 'framer-motion';
import { Download, Link as LinkIcon, Smartphone, Zap } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  { id: 1, title: 'Install APK', desc: 'Download and install the lightweight TeleTorrent app.', icon: <Download size={24} /> },
  { id: 2, title: 'Connect Telegram', desc: 'Securely link your Telegram account via the official API.', icon: <Smartphone size={24} /> },
  { id: 3, title: 'Paste Link', desc: 'Copy any Telegram file link and paste it into the app.', icon: <LinkIcon size={24} /> },
  { id: 4, title: 'Download', desc: 'Enjoy high-speed, parallel background downloads.', icon: <Zap size={24} /> }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">As simple as 1, 2, 3, 4.</h2>
          <p className="text-subtitle">Get started in seconds. No complicated setup.</p>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className={styles.stepNumber}>{step.id}</div>
              <div className={styles.iconWrapper}>{step.icon}</div>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className={styles.connector} />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
