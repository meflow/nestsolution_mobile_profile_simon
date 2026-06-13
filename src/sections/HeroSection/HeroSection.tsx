import profilePhoto from '@/assets/images/profile-photo.webp';
import nestLogo from '@/assets/images/nest-logo.webp';
import styles from './HeroSection.module.css';

const SERVICE_TAGS = ['CS 관리', '마케팅', '경영 개선', '인력 관리'];

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.photoWrapper}>
        <img src={profilePhoto} alt="김상연 프로필" className={styles.photo} />
      </div>

      <div className={styles.overlay}>
        <div className={styles.overlayContent}>
          <div className={styles.profileRow}>
            <div className={styles.profileInfo}>
              <p className={styles.name}>김상연</p>
              <p className={styles.subText}>17년 임상 경력</p>
              <p className={styles.subText}>네스트솔루션</p>
            </div>
            <div className={styles.logoWrapper}>
              <img src={nestLogo} alt="네스트솔루션 로고" className={styles.logo} />
            </div>
          </div>

          <div className={styles.tagRow}>
            {SERVICE_TAGS.map((tag) => (
              <div key={tag} className={styles.tag}>
                <span className={styles.tagText}>{tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
