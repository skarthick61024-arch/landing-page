"use client";

import { motion } from 'framer-motion';
import { 
  Zap, Play, Pause, Layers, MessageCircle, ArrowDownToLine, 
  Bell, Shield, Palette, HardDrive, Smartphone, Video 
} from 'lucide-react';
import styles from './Features.module.css';

const features = [
  { icon: Zap, title: "Fast Downloads", desc: "Multi-threaded downloading to max out your connection." },
  { icon: Play, title: "Resume Support", desc: "Never lose progress. Resume interrupted downloads instantly." },
  { icon: Pause, title: "Pause Downloads", desc: "Control your bandwidth by pausing and resuming anytime." },
  { icon: Layers, title: "Parallel Downloads", desc: "Download multiple Telegram files simultaneously." },
  { icon: MessageCircle, title: "Telegram Integration", desc: "Login securely and access your chats directly." },
  { icon: ArrowDownToLine, title: "Background Downloads", desc: "Files keep downloading even when the app is closed." },
  { icon: Bell, title: "Real Notifications", desc: "Native Android notifications for download progress." },
  { icon: Shield, title: "Privacy Focused", desc: "Encrypted traffic. No server logging." },
  { icon: Palette, title: "Material 3 UI", desc: "Dynamic colors, dark mode, and fluid animations." },
  { icon: HardDrive, title: "Secure Storage", desc: "Choose exactly where files are saved on your device." },
  { icon: Smartphone, title: "Native Android", desc: "Built specifically for Android for perfect performance." },
  { icon: Video, title: "Open with MX Player", desc: "Seamlessly open downloaded media in your favorite player." }
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className={`section-padding ${styles.featuresSection}`} id="features">
      <div className="container">
        <div className={styles.header}>
          <h2 className="text-h2">Everything you need.</h2>
          <p className="text-subtitle">Built with powerful features to give you the best download experience.</p>
        </div>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants} className={`${styles.card} glass`}>
                <div className={styles.iconWrapper}>
                  <Icon size={24} />
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDesc}>{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
