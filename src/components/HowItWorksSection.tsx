import styles from './HowItWorksSection.module.css';

const steps = [
  { num: "01", title: "Find Telegram Link", desc: "Copy the link of the video or file you want from any Telegram chat or channel." },
  { num: "02", title: "Paste in TeleTorrent", desc: "Open the app, paste your link, and let our engine instantly parse the media data." },
  { num: "03", title: "Download Automatically", desc: "The download will start in the background, utilizing maximum available bandwidth." }
];

export default function HowItWorksSection() {
  return (
    <section className={`container section-padding ${styles.howItWorks}`}>
      <div className={styles.header}>
        <p className="text-subtitle" style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>How To Use</p>
        <h2 className="text-h2">TeleTorrent <span style={{ color: 'var(--color-emerald)' }}>Downloader</span></h2>
      </div>

      <div className={styles.grid}>
        {/* Left Side: Mockup/Image */}
        <div className={styles.imageSide}>
          <div className={styles.shapeBg}>
            <img src="/screenshots/photo_2026-07-13_22-39-33.jpg" alt="App interface" className={styles.mockup} />
          </div>
        </div>

        {/* Right Side: Steps */}
        <div className={styles.stepsSide}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepItem}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepText}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
