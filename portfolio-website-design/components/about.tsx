import { Coffee, Camera, Plane, Code } from "lucide-react"

const interests = [
  { icon: Coffee, label: "Coffee", emoji: "Lover" },
  { icon: Camera, label: "Photography", emoji: "Enthusiast" },
  { icon: Plane, label: "Travel", emoji: "Explorer" },
  { icon: Code, label: "Coding", emoji: "Obsessed" },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center gap-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get to know me
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
        </div>

        <div className="grid items-start gap-12 md:grid-cols-5 lg:gap-20">
          {/* Text */}
          <div className="flex flex-col gap-5 md:col-span-3">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I'm a passionate web developer and designer based in San Francisco with over 5 years of experience building digital products. I specialize in creating clean, user-friendly interfaces that make complex things feel simple."
              }
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "My journey started with a curiosity for how things work on the web, which quickly turned into a love for crafting pixel-perfect designs and writing elegant code. When I'm not building websites, you can find me exploring new coffee shops, capturing moments through my lens, or planning my next adventure."
              }
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {
                "I believe great design is invisible \u2014 it just works. That philosophy drives everything I create, from the first wireframe to the final deployment."
              }
            </p>
          </div>

          {/* Interests */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2">
            {interests.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.emoji}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
