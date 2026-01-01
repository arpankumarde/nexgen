"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

type TeamMember = {
  name: string;
  department: string;
  photo: string;
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
};

const coreTeam: TeamMember[] = [
  {
    name: "Alex Chen",
    department: "AI Engineering",
    photo: "/team/alex.jpg",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    twitter: "https://twitter.com/alexchen",
  },
  {
    name: "Sarah Johnson",
    department: "Data Engineering",
    photo: "https://avatars.githubusercontent.com/u/134305585?v=4",
    github: "https://github.com/sarahjohnson",
    linkedin: "https://linkedin.com/in/sarahjohnson",
  },
  {
    name: "Michael Rodriguez",
    department: "Software Development",
    photo: "/team/michael.jpg",
    github: "https://github.com/michaelrodriguez",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    instagram: "https://instagram.com/michaelrodriguez",
  },
  {
    name: "Emily Zhang",
    department: "AI Research",
    photo: "/team/emily.jpg",
    github: "https://github.com/emilyzhang",
    linkedin: "https://linkedin.com/in/emilyzhang",
    twitter: "https://twitter.com/emilyzhang",
    instagram: "https://instagram.com/emilyzhang",
  },
];

const extendedTeam: TeamMember[] = [
  {
    name: "David Kim",
    department: "Product Design",
    photo: "/team/david.jpg",
    github: "https://github.com/davidkim",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    name: "Lisa Wang",
    department: "Machine Learning",
    photo: "/team/lisa.jpg",
    github: "https://github.com/lisawang",
    linkedin: "https://linkedin.com/in/lisawang",
    twitter: "https://twitter.com/lisawang",
  },
  {
    name: "James Wilson",
    department: "DevOps",
    photo: "/team/james.jpg",
    github: "https://github.com/jameswilson",
    linkedin: "https://linkedin.com/in/jameswilson",
  },
  {
    name: "Maria Garcia",
    department: "Data Science",
    photo: "/team/maria.jpg",
    github: "https://github.com/mariagarcia",
    linkedin: "https://linkedin.com/in/mariagarcia",
    instagram: "https://instagram.com/mariagarcia",
  },
];

const TeamSection = ({
  title,
  members,
  delay = 0,
}: {
  title: string;
  members: TeamMember[];
  delay?: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="mb-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
        className="font-mono text-3xl font-bold sm:text-4xl md:text-5xl mb-12 text-center"
      >
        {title}
      </motion.h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch"
      >
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: delay + 0.4 + index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="h-full"
          >
            <Card className="h-full bg-white/10 border-border hover:border-primary/50 transition-colors duration-300 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center text-center pb-4 flex-shrink-0">
                <div className="mb-4">
                  <Avatar className="size-24 border-2 border-primary/20">
                    <AvatarImage src={member.photo} alt={member.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-2xl font-bold">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-xl font-mono font-bold min-h-[3rem] flex items-center justify-center text-center px-2">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-fuchsia-400 font-mono text-sm min-h-[1.5rem] flex items-center justify-center text-center px-2">
                  {member.department}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-end justify-center pt-4">
                <div className="flex justify-center gap-3">
                  <Link
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  {member.twitter && (
                    <Link
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </Link>
                  )}
                  {member.instagram && (
                    <Link
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Instagram`}
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="container mx-auto px-4 min-h-screen bg-background">
      <section className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight mb-6"
          >
            MEET OUR TEAM
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground font-mono"
          >
            A diverse group of experts passionate about transforming data into
            intelligent solutions.
          </motion.p>
        </motion.div>

        <TeamSection title="CORE TEAM" members={coreTeam} delay={0.6} />
        <TeamSection title="EXTENDED TEAM" members={extendedTeam} delay={1.2} />
      </section>
    </div>
  );
};

export default Page;
