import React from "react"
import { Button } from "./ui/button"
import { Menu, X, Phone } from "lucide-react"

interface NavItem {
  href: string
  label: string
}

interface MobileMenuToggleProps {
  navItems: NavItem[]
}

export default function MobileMenuToggle({ navItems }: MobileMenuToggleProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="rounded-md"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 md:hidden">
          <div className="mx-6 px-4 pt-4 pb-6 space-y-3 bg-card/95 backdrop-blur-sm rounded-lg mt-4 border border-border/30 shadow-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-all duration-300 text-base font-sans"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-2">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-4 font-sans"
              >
                <a href="https://calendly.com/charlotte-drouilly" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  Réserver
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}