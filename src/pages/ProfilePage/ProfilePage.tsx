import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { ContactSection } from '@/sections/ContactSection/ContactSection';
import { AboutSection } from '@/sections/AboutSection/AboutSection';
import { CompanySection } from '@/sections/CompanySection/CompanySection';
import { VideoSection } from '@/sections/VideoSection/VideoSection';
import styles from './ProfilePage.module.css';

export function ProfilePage() {
  return (
    <main className={styles.page}>
      <HeroSection />
      <ContactSection />
      <AboutSection />
      <CompanySection />
      <VideoSection />
    </main>
  );
}
