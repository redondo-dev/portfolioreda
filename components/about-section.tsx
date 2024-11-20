"use client";

import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function AboutSection() {
  return (
    <Card className="p-6">
      <h3 className="text-2xl font-semibold mb-4">About Me</h3>
      <div className="space-y-4 text-muted-foreground mb-6">
        <p>
          Développeur Full Stack en devenir , passionné, j&apos;ai forgé mon
          expertise à travers une formation intensive de 8 mois à l&apos;AFPA,
          complétée par un apprentissage autodidacte continu. Cette double
          approche m&apos;a permis de développer une compréhension approfondie
          des technologies web modernes.
        </p>
        <p>
          Mon expérience front-end s&apos;étend sur l&apos;ensemble de
          l&apos;écosystème React, incluant React.js, Redux, Redux Toolkit,
          ainsi que les frameworks CSS modernes comme Material UI, React
          Bootstrap et Tailwind CSS. Ce qui me permet de créer des interfaces
          utilisateur élégantes et performantes.
        </p>
        <p>
          Côté back-end, j&apos;ai acquis une expérience avec PHP et SQL, et
          j&apos;ai évolué vers les technologies Node.js, Express et MongoDB,
          embrassant ainsi les architectures modernes full JavaScript. Cette
          polyvalence me permettra, à l’avenir de gérer l&apos;intégralité de la
          stack technique d&apos;un projet.
        </p>
        <p>
          En constante évolution, je me forme actuellement sur Next.js avec
          l&apos;ambition de devenir un développeur Full Stack expert, capable
          de créer des applications web et mobiles complètes et innovantes.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href="https://www.linkedin.com/in/riad-r%C3%A9da-fethi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </Link>
      </div>
    </Card>
  );
}
