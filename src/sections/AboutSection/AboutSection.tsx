import styles from './AboutSection.module.css';

const KAKAO_URL = 'https://pf.kakao.com/_HStBn';

const CAREER_HIGHLIGHTS = [
  '18년 이상 임상 경력',
  'CS, 인력, 운영 프로세스 전면 최적화',
  '의원부터 병원까지 다양한 프로젝트 경험',
];

function KakaoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2C4.318 2 1.33333 4.318 1.33333 7C1.33333 8.628 2.34133 10.072 3.878 11.018C3.77267 11.384 3.45667 12.482 3.39333 12.7127C3.31733 12.9893 3.49467 12.986 3.60533 12.9113C3.69533 12.85 5.00267 11.98 5.49867 11.65C6.084 11.8773 7.01333 12 8 12C11.682 12 14.6667 9.682 14.6667 7C14.6667 4.318 11.682 2 8 2Z"
        fill="black"
      />
    </svg>
  );
}

export function AboutSection() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>병원 컨설팅 전문가 김상연입니다</h2>

      <ul className={styles.list}>
        {CAREER_HIGHLIGHTS.map((item) => (
          <li key={item} className={styles.listItem}>
            <span className={styles.bullet}>•</span>
            <span className={styles.listText}>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={KAKAO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.kakaoButton}
      >
        <div className={styles.kakaoBadge}>
          <KakaoIcon />
        </div>
        <span className={styles.kakaoText}>카카오톡 1:1 상담하기</span>
      </a>
    </section>
  );
}
