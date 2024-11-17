"use client";

import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { AboutSection } from "@/components/about-section";
import { SkillsWithIcons } from "@/components/skills-with-icons";
import { ServicesSection } from "@/components/services-section";



export default function Home() {
  const t = useTranslations();

  return (
    <main className="gradient-bg min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <HeroSection />

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-[500px] mx-auto bg-background/50 backdrop-blur-sm">
           <TabsTrigger value="about">{t('navigation.about')}
            </TabsTrigger> <TabsTrigger value="projects">{t('navigation.projects')}</TabsTrigger>         
            <TabsTrigger value="services">{t('navigation.services')}</TabsTrigger>
            <TabsTrigger value="skills">{t('navigation.skills')}</TabsTrigger>            
            <TabsTrigger value="contact">{t('navigation.contact')}</TabsTrigger>
          </TabsList>

        </Tabs>
      </div>
    </main>
  );
}