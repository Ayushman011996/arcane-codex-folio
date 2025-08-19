import { motion } from "framer-motion"
import { Code, Users, Award, Coffee } from "lucide-react"
import profileImage from "@/assets/profile-image.jpg"

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      value: "5+",
      label: "Years Experience",
      description: "Building scalable applications"
    },
    {
      icon: Users,
      value: "50+",
      label: "Projects Completed",
      description: "Across various industries"
    },
    {
      icon: Award,
      value: "12+",
      label: "Certifications",
      description: "In modern technologies"
    },
    {
      icon: Coffee,
      value: "∞",
      label: "Coffee Consumed",
      description: "Fueling innovation daily"
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-neon mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-xl opacity-30 animate-pulse-glow" />
              <div className="relative glass rounded-2xl p-4">
                <img
                  src={profileImage}
                  alt="Alex Chen - Full Stack Developer"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Passionate about creating <span className="neon-text">digital solutions</span>
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional, 
                and user-centered digital experiences. With expertise in modern web technologies, 
                I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and staying at the forefront of technological advancement.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="glass glass-hover rounded-xl p-4 text-center"
                >
                  <highlight.icon className="h-8 w-8 text-neon-blue mx-auto mb-3" />
                  <div className="text-2xl font-bold gradient-text mb-1">
                    {highlight.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {highlight.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection