"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, User, Users } from "lucide-react";

type Speaker = {
  name: string;
  designation?: string;
};

type Event = {
  id: string;
  title: string;
  description: string;
  poster: string;
  startDate: string;
  endDate?: string;
  speakers: Speaker[];
};

const events: Event[] = [
  {
    id: "1",
    title: "Introduction to Machine Learning",
    description:
      "Join us for an interactive workshop on the fundamentals of machine learning. Learn about supervised and unsupervised learning, neural networks, and practical applications in data science. This session is perfect for beginners looking to get started with ML.",
    poster: "/events/ml-workshop.jpg",
    startDate: "2024-03-15",
    endDate: "2024-03-15",
    speakers: [
      {
        name: "Dr. Sarah Johnson",
        designation: "Senior Data Scientist at TechCorp",
      },
      {
        name: "Prof. Michael Chen",
        designation: "Professor of Computer Science",
      },
    ],
  },
  {
    id: "2",
    title: "Data Visualization Masterclass",
    description:
      "Master the art of data visualization using modern tools and techniques. Explore advanced charting libraries, interactive dashboards, and best practices for presenting data insights effectively. Hands-on exercises included.",
    poster: "/events/data-viz.jpg",
    startDate: "2024-03-20",
    endDate: "2024-03-22",
    speakers: [
      { name: "Emily Rodriguez", designation: "Data Visualization Expert" },
    ],
  },
  {
    id: "3",
    title: "AI Hackathon 2024",
    description:
      "A 48-hour hackathon focused on solving real-world problems using artificial intelligence. Teams will work on innovative projects, compete for prizes, and network with industry professionals. Open to all skill levels.",
    poster: "/events/hackathon.jpg",
    startDate: "2024-04-05",
    endDate: "2024-04-07",
    speakers: [
      { name: "Alex Kumar", designation: "AI Research Lead" },
      { name: "Lisa Wang", designation: "ML Engineer" },
      { name: "David Park", designation: "Product Manager" },
    ],
  },
  {
    id: "4",
    title: "Deep Learning Workshop",
    description:
      "Dive deep into neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs). This intensive workshop covers both theory and hands-on implementation using popular frameworks like TensorFlow and PyTorch.",
    poster: "/events/deep-learning.jpg",
    startDate: "2024-04-12",
    speakers: [
      { name: "Dr. James Wilson", designation: "Deep Learning Researcher" },
    ],
  },
  {
    id: "5",
    title: "Industry Expert Talk: Data Science Careers",
    description:
      "Learn about career opportunities in data science from industry veterans. Topics include job market trends, required skills, interview preparation, and career growth paths. Q&A session included.",
    poster: "/events/career-talk.jpg",
    startDate: "2024-04-18",
    speakers: [
      { name: "Maria Garcia", designation: "VP of Data Science" },
      { name: "Robert Kim", designation: "Senior ML Engineer" },
    ],
  },
  {
    id: "6",
    title: "Big Data Analytics Summit",
    description:
      "A comprehensive summit covering big data technologies, distributed computing, and cloud-based analytics solutions. Features talks from leading companies and hands-on sessions with Apache Spark and Hadoop.",
    poster: "/events/big-data.jpg",
    startDate: "2024-05-01",
    endDate: "2024-05-03",
    speakers: [
      { name: "Dr. Priya Sharma", designation: "Big Data Architect" },
      { name: "Tom Anderson", designation: "Cloud Solutions Engineer" },
      { name: "Jennifer Lee", designation: "Data Engineering Lead" },
    ],
  },
];

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatDateRange = (startDate: string, endDate?: string): string => {
  const start = formatDate(startDate);
  if (!endDate || startDate === endDate) {
    return start;
  }
  const end = formatDate(endDate);
  return `${start} - ${end}`;
};

const Page = () => {
  const heroRef = useRef(null);
  const eventsRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.1 });
  const eventsInView = useInView(eventsRef, { once: true, amount: 0.1 });

  return (
    <div className="container mx-auto px-4 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container py-24" ref={heroRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-mono text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto leading-tight mb-4"
          >
            EVENTS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto max-w-3xl text-2xl text-fuchsia-400 font-mono font-semibold"
          >
            Join Us for Workshops, Talks, and Hackathons
          </motion.p>
        </motion.div>

        {/* Events Grid */}
        <div
          ref={eventsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              animate={eventsInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              className="h-full"
            >
              <Card className="h-full pt-0 bg-white/10 border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm flex flex-col group overflow-hidden">
                {/* Event Poster */}
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={event.poster}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%239433cc' width='400' height='300'/%3E%3Ctext fill='%23fff' font-family='monospace' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EEvent Poster%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <CardHeader className="flex-shrink-0">
                  <CardTitle className="font-mono text-xl font-bold mb-2 line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="font-mono text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-fuchsia-400" />
                      <span className="text-fuchsia-400">
                        {formatDateRange(event.startDate, event.endDate)}
                      </span>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-4 line-clamp-4">
                    {event.description}
                  </p>

                  {/* Speakers Section */}
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <div className="flex items-start gap-2 mb-2">
                      {event.speakers.length === 1 ? (
                        <User className="h-4 w-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Users className="h-4 w-4 text-fuchsia-400 mt-0.5 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="font-mono text-xs text-muted-foreground mb-1">
                          {event.speakers.length === 1 ? "Speaker" : "Speakers"}
                        </p>
                        {event.speakers.map((speaker, idx) => (
                          <div key={idx} className="mb-1 last:mb-0">
                            <p className="font-mono text-sm font-semibold text-foreground">
                              {speaker.name}
                            </p>
                            {speaker.designation && (
                              <p className="font-mono text-xs text-muted-foreground">
                                {speaker.designation}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
