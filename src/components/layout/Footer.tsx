import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/alexchen", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/alexchen", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/alexchen", label: "Twitter" }
  ]

  return (
    <footer className="relative border-t border-border/50">
      {/* Glowing gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-neon opacity-50" />
      
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-neon-blue transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 glass glass-hover rounded-lg flex items-center justify-center group"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4 text-muted-foreground group-hover:text-neon-blue transition-colors" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Alex Chen. Built with</span>
              <Heart className="h-4 w-4 text-neon-pink" />
              <span>and lots of coffee</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer