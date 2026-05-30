"use client";

import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { AuroraBackground } from "@/components/animations/AuroraBackground";
import { SITE_CONFIG, CV_PATH } from "@/lib/constants";
import { SOCIALS } from "@/data/socials";

/**
 * Hero section: full-viewport intro with animated headline, CTAs, and socials.
 * Split layout (text + animated profile card) per docs/design.md.
 */
export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center overflow-hidden pt-16"
    >
      <AuroraBackground />

      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2">
        {/* Left: intro */}
        <div className="text-center lg:text-left">
          <FadeIn delay={0.1}>
            <Badge variant="muted" className="mb-5">
              Available for opportunities
            </Badge>
          </FadeIn>

          <TextReveal
            as="h1"
            text={`${SITE_CONFIG.name}`}
            delay={0.2}
            className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl font-display"
          />

          <FadeIn delay={0.5} className="mt-4">
            <p className="text-xl font-medium text-primary sm:text-2xl">
              {SITE_CONFIG.role} &amp; Informatics Student
            </p>
          </FadeIn>

          <FadeIn delay={0.65} className="mt-5">
            <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
              I build modern, user-focused web applications with Next.js,
              TypeScript, and Laravel. I believe technology can create a positive
              impact, and I keep growing by learning the latest industry trends.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} className="mt-8">
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
              <MagneticButton>
                <Button asChild size="lg">
                  <a href="#projects">
                    View Projects
                    <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
              </MagneticButton>

              <Button asChild size="lg" variant="outline">
                <a href={CV_PATH} download>
                  <Download aria-hidden="true" />
                  Download CV
                </a>
              </Button>

              <Button asChild size="lg" variant="ghost">
                <a href="#contact">
                  <Mail aria-hidden="true" />
                  Contact Me
                </a>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.95} className="mt-8">
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex items-center gap-1">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon aria-hidden="true" className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right: animated profile card */}
        <FadeIn delay={0.5} className="hidden lg:block">
          <HeroProfileCard />
        </FadeIn>
      </Container>
    </section>
  );
}

/**
 * Decorative profile card with a gradient border and floating animation.
 * Replace the initials block with a <Image> of your professional photo.
 */
function HeroProfileCard() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {/* Gradient glow */}
      <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-2xl" />

      <div className="group relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-1 shadow-xl">
        <div className="flex h-full flex-col items-center justify-center rounded-[1.7rem] bg-gradient-to-br from-muted to-card">
          <div className="flex size-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-primary-foreground">
            {SITE_CONFIG.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <p className="mt-6 text-lg font-semibold">{SITE_CONFIG.name}</p>
          <p className="text-sm text-muted-foreground">{SITE_CONFIG.role}</p>
        </div>
      </div>
    </div>
  );
}
