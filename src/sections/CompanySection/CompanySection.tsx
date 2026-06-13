import styles from './CompanySection.module.css';

const SERVICES = [
  '유지보수 서비스: 안정적인 시스템 운영 지원',
  '맞춤형 컨설팅: 병원별 맞춤형 전략 수립',
  '시스템 구축: CS관리, 체계적 시스템 설계 및 구축',
];

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path
        d="M2.5 6.5L4.5 8.5L9.5 3.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CompanySection() {
  return (
    <section className={styles.section}>
      <div className={styles.description}>
        <h3 className={styles.descHeading}>
          {`네스트솔루션,\n당신의 병원을 든든하게 지킵니다.`}
        </h3>
        <p className={styles.descText}>
          {`네스트솔루션은 'High Performance'라는 가치 아래\n고객님의 성공적인 병원을 지키기 위해 탄생했습니다.`}
        </p>
        <p className={styles.descText}>
          {`18년 임상 경험을 기반으로 원장님의 고민을 '진심으로' 이해합니다.\n획일적 패키지 대신 우리 병원만의 전략을 설계합니다.`}
        </p>
        <p className={styles.descText}>
          {`어떤 위험 앞에서도 흔들림 없는\n병원 파트너가 되어 든든한 지원을 약속드립니다.`}
        </p>
      </div>

      <div className={styles.services}>
        <div className={styles.servicesHeader}>
          <div className={styles.checkBadge}>
            <CheckIcon />
          </div>
          <span className={styles.servicesTitle}>주요 서비스</span>
        </div>
        <ul className={styles.servicesList}>
          {SERVICES.map((service) => (
            <li key={service} className={styles.serviceItem}>
              <span className={styles.bullet}>•</span>
              <span className={styles.serviceText}>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.cta}>
        <p className={styles.ctaSubheading}>우리병원에 맞는 병원 솔루션,</p>
        <p className={styles.ctaText}>전문 컨설턴트에게 상담해 보세요. 언제든 문의 주세요.</p>
        <h3 className={styles.ctaHeading}>우리병원에 맞는 솔루션을 찾아드립니다</h3>
      </div>
    </section>
  );
}
