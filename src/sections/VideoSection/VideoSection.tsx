import videoNestSolution from '@/assets/videos/nest-solution.mp4';
import styles from './VideoSection.module.css';

export function VideoSection() {
  return (
    <section className={styles.section}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        controlsList="nodownload"
        className={styles.video}
      >
        <source src={videoNestSolution} type="video/mp4" />
      </video>
    </section>
  );
}
