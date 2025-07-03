"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="relative w-32 h-32 mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Profile Picture"
                fill
                className="rounded-full object-cover border-4 border-primary/20"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Your Name
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Full-Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences through
              clean code and innovative solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:nsisay49@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
