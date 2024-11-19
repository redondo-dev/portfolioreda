import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { AboutSection } from "@/components/about-section";
import { SkillsWithIcons } from "@/components/skills-with-icons";
import { ServicesSection } from "@/components/services-section";
import ContactForm from '@/components/contactForm';

export async function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fr" },
    { locale: "ar" },
    { locale: "it" },
    { locale: "es" },
  ];
}

export default function Page({ params }: { params: { locale: string } }) {
  // Move useTranslations inside the component
  const t = useTranslations('navigation');

  return (
    <div>
      <nav>
        <ul>
          <li>{t('about')}</li>
          <li>{t('projects')}</li>
          <li>{t('services')}</li>
          <li>{t('skills')}</li>
          <li>{t('contact')}</li>
        </ul>
      </nav>

      <main>
        <HeroSection />
        
        <AboutSection />
        
        <SkillsWithIcons />
        
        <ServicesSection />
        
        <ContactForm />
        
        <p>Welcome to {params.locale} page</p>
      </main>
    </div>
  );
}

