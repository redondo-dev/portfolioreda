"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { AboutSection } from "@/components/about-section";
import { SkillsWithIcons } from "@/components/skills-with-icons";
import { ServicesSection } from "@/components/services-section";
import ContactForm from "@/components/contactForm";


const projects = [
  {
    title: "Librairie",
    description:
      "Cherchez le livre et l'édition en utilisant axios et l'API de Google Books.",
    tech: ["React", "Axios", "Google Books API"],
    image:
      "https://cdn.pixabay.com/photo/2017/07/02/09/03/books-2463779_1280.jpg",
    github: "https://github.com/redondo-dev/Ebook",
    demo: "https://redabook-d6ee6.firebaseapp.com",
  },
  {
    title: "API Cinéma",
    description:
      "Interface pour chercher des films en utilisant l'API de films.",
    tech: ["React", "API Films", "Axios"],
    image:
      "https://cdn.pixabay.com/photo/2017/02/23/21/35/cinema-2093264_1280.jpg",
    github: "https://github.com/redondo-dev/apifilmreda",
    demo: "https://cinema-reda-riad.firebaseapp.com",
  },
  {
    title: "Todo-List",
    description: "Application de gestion de tâches avec React",
    tech: ["React", "State Management"],
    image:
      "https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg",
    github: "https://github.com/redondo-dev/TodoList-react",
    demo: "https://todolist-react-223ba.firebaseapp.com",
  },
  {
    title: "API NBA",
    description: "Interface de classement de la conf-est NBA",
    tech: ["React", "NBA API"],
    image:
      "https://cdn.pixabay.com/photo/2015/09/09/20/33/basketball-933173_1280.jpg",
    github: "https://github.com/redondo-dev/ApiNba",
    demo: "https://nba-conference-est-standing.firebaseapp.com",
  },
  {
    title: "E-commerce Cart",
    description: "Panier avec react bootstrap et une fake api e-commerce",
    tech: ["React", "Bootstrap", "Fake Store API"],
    image:
      "https://cdn.pixabay.com/photo/2019/09/30/15/23/online-shopping-4516043_640.jpg",
    github: "https://github.com/redondo-dev/cart-e-commerce",
    demo: "https://panier-e-commerce-en-react.firebaseapp.com",
  },
  {
    title: "Site Chauffeur VTC",
    description: "Un site pour un chauffeur VTC Marseillais en React-js",
    tech: ["React", "Professional Website"],
    image: "./assets/toyota-car.jpg",
    github: "https://github.com/redondo-dev/mariaVTC",
    demo: "https://amvtc13.com",
  },
  {
    title: "Blog Foot Italien",
    description:
      "Un blog pour amateur de foot italien en Node.js, Express, MongoDB et React.js",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
    github: "https://github.com/redondo-dev/blog-calcio",
    demo: "#",
  },
  {
    title: "Météo App (React Native)",
    description: "Application météo utilisant OpenWeather API",
    tech: ["React Native", "OpenWeather API"],
    image: "./assets/meteoApp.png",
    github: "https://github.com/redondo-dev/MeteoApp-",
    demo: "#",
  },
  {
    title: "Best Football Players",
    description:
      "Application Next.js sur les meilleurs footballeurs de l'histoire",
    tech: ["Next.js", "React"],
    image: "./assets/bestoffoot.png",
    github: "https://github.com/redondo-dev/best10",
    demo: "https://bestl0-app.vercel.app/",
  },
  {
    title: "Cabinet Médical",
    description: "Site pour cabinet médical spécialisé en esthétique",
    tech: ["Next.js", "React", "Medical Website"],
    image: "./assets/cabinetMedical.jpg",
    github: "https://github.com/redondo-dev/cabinetMedical",
    demo: "https://cabinet-medical-gray.vercel.app/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <HeroSection />

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 max-w-[500px] mx-auto">
         
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="contact">
            <ContactForm />
          </TabsContent>

          <TabsContent value="services">
            <ServicesSection />
          </TabsContent>

          <TabsContent value="skills">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <SkillsWithIcons />
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <AboutSection />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
