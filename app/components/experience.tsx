import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Internship",
    company: "Commercial Bank of Ethiopia",
    period: "2022 - Present",
    description:
      "Gained hands-on experience working in a structured enterprise environment. I was part of a collaborative team where I learned the importance of clear communication, documentation, and team workflows. While I didn’t work on production-level code, I was exposed to internal systems, development standards, and real-world software processes.",
    achievements: [
      "Assisted in identifying and reporting bugs in internal software systems",
      "Created internal documentation and walkthroughs for onboarding and clarity",
      "Participated in code reviews and team discussions, offering fresh perspectives",
    ],
  },
  {
    title: "Full Stack Developer (Student)",
    company: "Final Year Project – ASU",
    period: "2024",
    description:
      "Led the development of a full-featured ecommerce platform as part of my final year project, delivering both a web and mobile experience using modern full stack technologies. Focused on solving real-world problems with clean, scalable architecture.",
    achievements: [
      "Led a team and handled the majority of frontend and backend implementation",
      "Built both web (React.js + Node.js) and mobile (React Native) versions with SQL integration",
      "Won 'Best Final Year Project' award for innovation and practical impact",
    ],
  },
  {
    title: "Independent Full Stack Developer",
    company: "Self-Initiated Projects",
    period: "2024 – Present",
    description:
      "After graduation, I focused on sharpening my full stack skills by building practical web and mobile applications. I worked on personal and community-driven projects, experimenting with modern frameworks and deploying end-to-end solutions.",
    achievements: [
      "Built and released the ASU Student App (GPA calculator, schedule planner) in beta",
      "Practiced advanced concepts like Next.js Server Components and TypeScript",
      "Improved skills in project structuring, API design, and UI/UX consistency across platforms",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Assosa University",
    period: "2021 - 2025",
    description:
      "Focused on software engineering, algorithms, and web development. Graduated with honors.",
    coursework: [
      "Data Structures",
      "Web Development",
      "Database Systems",
      "Software Engineering",
    ],
  },
  {
    degree: "Networking Essentials Certification",
    institution: "Cisco Networking Academy",
    period: "2023",
    description:
      "Completed a foundational course covering core networking concepts, protocols, and infrastructure. Gained hands-on knowledge of how networks operate and how data flows through wired and wireless systems.",
    coursework: [
      "IP addressing",
      "Routing & Switching",
      "Network security basics",
      "OSI & TCP/IP models",
    ],
  },
  {
    degree: "Foundations in AI, Data Analysis, and Android Development",
    institution: "Udacity",
    period: "Feb 2025",
    description:
      "Completed foundational courses to expand my knowledge across AI, data analysis, and Android development. Built hands-on projects and explored real-world applications in each area.",
    coursework: [
      "AI Fundamentals – machine learning concepts, ethical AI",
      "Data Analysis – data wrangling, visualization, basic statistics",
      "Android Development – UI components, activity lifecycle, Kotlin basics",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-muted-foreground">
              My professional journey and academic background
            </p>
          </div>

          <div className="space-y-12">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">
                  Professional Experience
                </h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">{exp.title}</h4>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="rounded-full mt-2 md:mt-0"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {exp.description}
                      </p>
                      <div>
                        <h5 className="font-medium mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="text-sm text-muted-foreground"
                            >
                              • {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="rounded-2xl">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h4 className="text-xl font-semibold">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="rounded-full mt-2 md:mt-0"
                        >
                          {edu.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {edu.description}
                      </p>
                      <div>
                        <h5 className="font-medium mb-2">
                          Relevant Coursework:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, courseIndex) => (
                            <Badge
                              key={courseIndex}
                              variant="secondary"
                              className="rounded-full"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
