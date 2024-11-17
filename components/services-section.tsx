"use client";

import { Laptop, Code2, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Creation de sites web et mobiles Responsives",
    description: "On vous offre une expérience utilisateur optimale sur tous les appareils avec nos créations de sites web entièrement responsive, garantissant une navigation fluide et une présentation impeccable, quel que soit l'écran"
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "HTML et CSS Templates",
    description: "Renforcer votre présence en ligne grâce à nos templates HTML, CSS et ReactJS. Profitez de designs modernes et professionnels pour créer facilement un site web à l'image de votre activité"
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "UI & site vitrine",
    description: "Façonnez des expériences utilisateur exceptionnelles avec notre approche et Transformez votre présence en ligne avec la conception de sites vitrines, alliant esthétique et convivialité pour présenter votre entreprise de manière captivante et professionnelle."
  }
];

export function ServicesSection() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-8 text-center">Ce que je fais</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
          >
            <div className="mb-4 text-primary">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}