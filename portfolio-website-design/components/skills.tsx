"use client"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Design Tools",
    skills: ["Figma", "Photoshop", "Illustrator", "Sketch"],
  },
  {
    title: "Other",
    skills: ["WordPress", "Git", "GitHub", "REST APIs", "Node.js"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            What I work with
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {"Skills & Technologies"}
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Skill categories */}
        <div className="grid gap-10 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title} className="flex flex-col gap-5">
              <h3 className="text-center text-sm font-bold uppercase tracking-widest text-foreground">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
