import { Container } from "@/components/ui/Container";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { SOCIALS } from "@/data/socials";

/**
 * Site footer with navigation links, social links, and copyright.
 * Server Component — no interactivity required.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <a
              href="#home"
              className="text-lg font-bold tracking-tight font-display"
            >
              {SITE_CONFIG.name}
              <span className="text-primary">.</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {SITE_CONFIG.role} building modern, scalable web experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
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

        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {year} {SITE_CONFIG.name}. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
}
