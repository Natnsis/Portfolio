import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground">
              Get to know the person behind the code
            </p>
          </div>

          <Card className="rounded-2xl">
            <CardContent className="p-8 sm:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    My journey into web and mobile development began with
                    curiosity and has evolved into a passion for building
                    digital tools that solve real problems — especially in
                    student and local community spaces. I focus on writing
                    clean, maintainable code and continuously improving my craft
                    by staying current with modern technologies like React,
                    Node.js, and Next.js.
                  </p>
                  <p className="text-lg leading-relaxed">
                    When I'm not coding, you'll find me experimenting with new
                    frameworks, contributing to side projects, or sharing what
                    I’ve learned on platforms like Telegram. I'm always up for
                    new challenges, meaningful collaborations, and creating
                    tools that leave an impact.
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Core Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Clean, readable, and maintainable code</li>
                      <li>• User-centered design and accessibility</li>
                      <li>• Continuous learning and improvement</li>
                      <li>• Collaboration and knowledge sharing</li>
                    </ul>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-4xl font-bold text-primary">
                        1.5+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Years of Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
