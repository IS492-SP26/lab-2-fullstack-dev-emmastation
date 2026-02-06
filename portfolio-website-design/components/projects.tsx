import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A full-featured online store with product filtering, cart functionality, and secure checkout. Built with React and a headless CMS.",
    image: "/images/project-ecommerce.jpg",
    tags: ["React", "Next.js", "Stripe"],
  },
  {
    title: "Restaurant Website",
    description:
      "An elegant restaurant website featuring online reservations, a dynamic menu, and a beautiful gallery showcasing the dining experience.",
    image: "/images/project-restaurant.jpg",
    tags: ["WordPress", "CSS", "PHP"],
  },
  {
    title: "Portfolio Blog",
    description:
      "A clean, typography-focused portfolio blog with a custom CMS, dark mode support, and optimized performance for fast load times.",
    image: "/images/project-blog.jpg",
    tags: ["Next.js", "MDX", "Tailwind"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Selected work
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Project grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/5" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="mt-2 gap-2 rounded-full bg-transparent" asChild>
                  <a href="#" aria-label={`View ${project.title} project`}>
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
