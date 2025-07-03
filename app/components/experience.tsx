import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Led development of responsive web applications using React and Next.js. Collaborated with cross-functional teams to deliver high-quality user experiences.",
    achievements: [
      "Improved application performance by 40%",
      "Mentored 3 junior developers",
      "Implemented automated testing reducing bugs by 60%",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Agency Co.",
    period: "2021 - 2022",
    description:
      "Developed and maintained multiple client websites and web applications using modern JavaScript frameworks and backend technologies.",
    achievements: [
      "Delivered 15+ client projects on time",
      "Reduced server response time by 50%",
      "Implemented CI/CD pipelines",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2020 - 2021",
    description:
      "Built responsive websites and learned modern development practices while contributing to various startup projects.",
    achievements: [
      "Contributed to 10+ projects",
      "Learned React, Node.js, and cloud deployment",
      "Improved code quality through peer reviews",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2016 - 2020",
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
    degree: "Full Stack Web Development Bootcamp",
    institution: "Code Academy",
    period: "2020",
    description:
      "Intensive 6-month program covering modern web development technologies and best practices.",
    coursework: ["React", "Node.js", "MongoDB", "DevOps"],
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
