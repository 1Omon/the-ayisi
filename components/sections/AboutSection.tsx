// /components/sections/AboutSection.tsx
"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-foreground/70 max-w-3xl mx-auto">
              I&apos;m a passionate Full-Stack Engineer and Startup Founder with expertise in building 
              scalable web applications that solve real-world problems. My focus areas include healthcare,
              education, and e-commerce solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-primary/10 flex items-center justify-center">
              <Image width={400} height={450} src={'/1.jpg'} alt="my image" className="w-full h-full object-cover"/>
                {/* Placeholder for profile image */}
                {/* <div className="text-6xl font-bold text-primary/40">SA</div> */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-background  rounded-full bg-primary/30 hidden md:flex items-center justify-center">
                <span className="text-primary font-bold">4+ Years </span>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                <p className="text-foreground/70 mb-4">
                  As a Full-Stack Engineer with a passion for innovation, I&apos;ve founded XCUXION to help
                  businesses leverage technology for growth. I specialize in building robust, scalable
                  applications using modern technologies like React, Node.js, and cloud services.
                </p>
                <p className="text-foreground/70">
                  I believe in technology&apos;s power to solve real-world problems, which is why I focus on
                  creating impactful solutions in healthcare, education, and e-commerce. My commitment
                  to mentoring the next generation of engineers reflects my passion for growing the tech
                  ecosystem in Ghana and beyond.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-3">My Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Frontend Development</h4>
                      <div className="flex flex-wrap gap-1">
                        {skills.frontend.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-medium mb-2">Backend Development</h4>
                      <div className="flex flex-wrap gap-1">
                        {skills.backend.map((skill) => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants} 
            className="mt-12 pt-8 border-t border-border/50"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.languages.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">Database & APIs</h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.database.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-medium mb-2">DevOps & Other</h4>
                  <div className="flex flex-wrap gap-1">
                    {[...skills.devops, ...skills.other].map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}