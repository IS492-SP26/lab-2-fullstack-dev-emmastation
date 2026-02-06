import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 -left-20 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20">
        {/* Text content */}
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Web Developer & Designer
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              {"Hi, I'm "}
              <span className="text-primary">Sarah Johnson</span>
            </span>
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            I create beautiful, functional websites that help businesses grow.
            Combining clean code with thoughtful design to build digital
            experiences that people love.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg" className="gap-2 rounded-full">
              <a href="#projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 rounded-full bg-transparent"
            >
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-md md:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero-portrait.jpg"
              alt="Sarah Johnson - Web Developer and Designer"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Floating accent */}
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl border border-border bg-card p-3 shadow-lg">
            <div className="flex h-full flex-col items-center justify-center gap-1">
              <span className="text-2xl font-bold text-primary">5+</span>
              <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                Years Exp.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
