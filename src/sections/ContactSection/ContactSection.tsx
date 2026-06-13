import { ChevronIcon } from '@/components/common/ChevronIcon';
import styles from './ContactSection.module.css';

const NAVER_MAP_URL =
  'https://map.naver.com/p/search/%EB%84%A4%EC%8A%A4%ED%8A%B8%EC%86%94%EB%A3%A8%EC%85%98/place/2033624447?placePath=%3Fbk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26from%3Dnx%26fromNxList%3Dtrue&placeSearchOption=bk_query%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26entry%3Dpll%26fromNxList%3Dtrue%26originalQuery%3D%25EB%2584%25A4%25EC%258A%25A4%25ED%258A%25B8%25EC%2586%2594%25EB%25A3%25A8%25EC%2585%2598%26x%3D%26y%3D&searchType=place';

const CONTACTS = [
  {
    label: '휴대전화',
    value: '010-3129-8248',
    href: 'tel:010-3129-8248',
    external: false,
    alignRight: false,
  },
  {
    label: '이메일',
    value: 'nestsadvice@gmail.com',
    href: 'mailto:nestsadvice@gmail.com',
    external: false,
    alignRight: false,
  },
  {
    label: '홈페이지',
    value: 'nestsolution.co.kr',
    href: 'https://nestsolution.co.kr/',
    external: true,
    alignRight: false,
  },
  {
    label: '주소',
    value: '서울특별시 서초구 서운로 13 지하1층',
    href: NAVER_MAP_URL,
    external: true,
    alignRight: true,
  },
];

export function ContactSection() {
  return (
    <section className={styles.section}>
      {CONTACTS.map((contact) => (
        <a
          key={contact.label}
          href={contact.href}
          className={styles.row}
          target={contact.external ? '_blank' : undefined}
          rel={contact.external ? 'noopener noreferrer' : undefined}
        >
          <div aria-hidden="true" className={styles.divider} />
          <span className={styles.label}>{contact.label}</span>
          <div className={styles.valueWrapper}>
            <span className={contact.alignRight ? styles.valueRight : styles.value}>
              {contact.value}
            </span>
            <ChevronIcon />
          </div>
        </a>
      ))}
    </section>
  );
}
