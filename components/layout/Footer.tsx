// /components/layout/Footer.tsx
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-primary">SOLOMON</span>
              <span className="ml-1 text-foreground">AYISI</span>
            </Link>
            <p className="text-foreground/60 mt-2">Full-Stack Engineer & Startup Founder</p>
          </div>
          
          <div className="flex space-x-4">
            <Link href={`https://${personalInfo.links.github}`} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href={`https://${personalInfo.links.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href={`mailto:${personalInfo.email}`} className="text-foreground/60 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border/40 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Ayisi Solomon Annan. All rights reserved.
          </p>
          <p className="text-sm text-foreground/60 mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}