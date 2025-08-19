import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { NeonButton } from "@/components/ui/neon-button"

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/alexchen",
      demo: "https://demo.alexchen.dev",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights. Built with Next.js, Python, and TensorFlow.",
      technologies: ["Next.js", "Python", "TensorFlow", "D3.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/alexchen",
      demo: "https://analytics.alexchen.dev",
      featured: true
    },
    {
      title: "Social Media Mobile App",
      description: "Cross-platform mobile app for social networking with real-time messaging and content sharing capabilities.",
      technologies: ["React Native", "Firebase", "Node.js", "Socket.io"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/alexchen",
      demo: "https://app.alexchen.dev",
      featured: false
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "DevOps toolkit for automated deployment and scaling using Kubernetes, Docker, and Terraform.",
      technologies: ["Kubernetes", "Docker", "Terraform", "AWS", "Go"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/alexchen",
      demo: null,
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform built on Ethereum with smart contracts and web3 integration.",
      technologies: ["Solidity", "Web3", "React", "Ethereum", "Hardhat"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/alexchen",
      demo: "https://voting.alexchen.dev",
      featured: false
    },
    {
      title: "AI Content Generator",
      description: "OpenAI-powered content creation tool with custom fine-tuning and advanced prompt engineering.",
      technologies: ["OpenAI", "Next.js", "Prisma", "TypeScript", "Vercel"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/alexchen",
      demo: "https://content.alexchen.dev",
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  }

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from web applications to mobile apps and cloud solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`glass glass-hover rounded-2xl overflow-hidden group ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${
                  project.featured ? 'lg:w-1/2' : ''
                }`}>
                  <div className="aspect-video bg-gradient-subtle relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Github className="w-8 h-8 text-neon-blue" />
                        </div>
                        <p className="text-sm">Project Preview</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className={`p-6 ${project.featured ? 'lg:w-1/2 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-neon-purple/20 text-neon-purple text-xs px-2 py-1 rounded-full border border-neon-purple/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <NeonButton variant="outline" size="sm" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </NeonButton>
                    {project.demo && (
                      <NeonButton variant="ghost" size="sm" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </NeonButton>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <NeonButton variant="hero" size="lg">
            View All Projects
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </NeonButton>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection