import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronRight,Phone  } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { HeroSection } from "@/components/hero-section"
import {
  AnimatedSection,
  AnimatedCard,
  ParticleBackground,
  AnimatedGradientBackground,
} from "@/components/client-animations"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Background Effects */}
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-gray-800 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I&apos;m a MERN Developer with expertise in both frontend and backend development. As an aspiring computer
                  science student, I&apos;m passionate about building full-stack web applications that solve real-world
                  problems.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  I have built many projects ranging from a custom hotel management system to company-scale platforms
                  like Airbnb, portfolio websites, and learning management systems. My experience spans across the
                  entire web development stack.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  Currently working as a freelancer, I&apos;m available for any kind of web development work and specialize
                  in creating scalable, user-friendly applications using modern technologies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Full-Stack MERN Development (MongoDB, Express, React, Node.js)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Frontend Development with React & Next.js</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Backend API Development & Database Design</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Cloud Platform Integration (AWS)</span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-gray-700 dark:text-gray-300">Responsive Web Design & User Experience</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Freelance Web Developer</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Self-Employed</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2024 - Present</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Developing full-stack web applications for various clients using MERN stack technologies.</li>
                  <li>
                    Created portfolio websites for companies like Altakhleeq, House of Mathematics, and Cost Umbrella.
                  </li>
                  <li>
                    Available for any kind of web development work, specializing in responsive and scalable solutions.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Web Development Intern</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">TechCog</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">2024 (5 months)</p>
                </div>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Learned MERN stack fundamentals and gained hands-on experience in full-stack development.</li>
                  <li>Worked as an employee for 5 months, contributing to various web development projects.</li>
                  <li>Gained valuable experience in professional development practices and team collaboration.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Hotel Management System</CardTitle>
                  <CardDescription>Custom full-stack hotel management platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/hotel-management-system-dashboard.png"
                      alt="Hotel Management System"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built a comprehensive hotel management system with booking management, room allocation, customer
                    management, and reporting features using MERN stack.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Express
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  {/* <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">View Project</span>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button> */}
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Learning Management System</CardTitle>
                  <CardDescription>LMS for House of Mathematics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/lms-interface.jpg"
                      alt="Learning Management System"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed a comprehensive learning management system for House of Mathematics with course
                    management, student tracking, and interactive learning features.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      MERN Stack
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Authentication
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Course Management
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  {/* <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">View Project</span>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button> */}
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Airbnb-like Platform</CardTitle>
                  <CardDescription>Property rental and booking platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/airbnb-property-rental-platform.png" alt="Airbnb Platform" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Created a property rental platform similar to Airbnb with property listings, booking system, user
                    authentication, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Payment Integration
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Booking System
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      User Auth
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  {/* <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">View Project</span>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button> */}
                </CardFooter>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Portfolio Websites</CardTitle>
                  <CardDescription>Multiple client portfolio projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/modern-portfolio-website.png" alt="Portfolio Websites" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    Designed and developed portfolio websites for various clients including Altakhleeq, House of
                    Mathematics, Cost Umbrella, and many more companies.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      Responsive Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300"
                    >
                      SEO Optimized
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  {/* <Button variant="outline" className="w-full relative overflow-hidden group bg-transparent" disabled>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="relative z-10">View Project</span>
                    <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
                  </Button> */}
                </CardFooter>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-sm font-bold">FE</span>
                    </span>
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      HTML5
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      CSS3
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Responsive Design
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Tailwind CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      Bootstrap
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">BE</span>
                    </span>
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Express.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      SQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      API Development
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      RESTful APIs
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Authentication
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors"
                    >
                      Database Design
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">LANG</span>
                    </span>
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      C++
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      HTML
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      SQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors"
                    >
                      JSON
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">TOOLS</span>
                    </span>
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      AWS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Git/GitHub
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      VS Code
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Postman
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Vercel
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Netlify
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors"
                    >
                      Firebase
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Additional Skills Tags */}
          <AnimatedSection delay={0.6}>
            <div className="mt-12 text-center">
              <h3 className="text-xl font-semibold mb-6">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  Redux
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  JWT
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                >
                  Mongoose
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                >
                  Axios
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  Socket.io
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                >
                  Material-UI
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                >
                  Stripe API
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                >
                  PayPal API
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
                >
                  Cloudinary
                </Badge>
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
                >
                  Multer
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
          </AnimatedSection>

          <div className="mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold">Bachelor&apos;s in Computer Science</h4>
                    <p className="text-blue-600 dark:text-blue-400">University of Central Punjab, Lahore, Pakistan</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Undergraduate</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="animate-pulse">
                      Data Structures & Algorithms
                    </Badge>
                    <Badge variant="secondary">Object-Oriented Programming</Badge>
                    <Badge variant="secondary" className="animate-pulse">
                      Database Systems
                    </Badge>
                    <Badge variant="secondary">Web Development</Badge>
                    <Badge variant="secondary" className="animate-pulse">
                      Software Engineering
                    </Badge>
                    <Badge variant="secondary">Computer Networks</Badge>
                    <Badge variant="secondary" className="animate-pulse">
                      Operating Systems
                    </Badge>
                    <Badge variant="secondary">Programming Fundamentals</Badge>
                    <Badge variant="secondary">System Analysis & Design</Badge>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-2xl font-bold mb-6">Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">AWS Cloud Practitioner</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Amazon Web Services certification covering cloud fundamentals
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">MERN Stack Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Comprehensive training in MongoDB, Express.js, React, and Node.js
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">Full-Stack Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Frontend and backend development with modern frameworks
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 transition-transform duration-300">
                  <h4 className="font-semibold">JavaScript & React</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Advanced JavaScript programming and React development
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          </AnimatedSection>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <AnimatedSection direction="left" delay={0.2}>
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <Mail className="w-5 h-5 text-blue-600 mr-3" />
          <a
            href="mailto:ayanmajid88@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            ayanmajid88@gmail.com
          </a>
        </div>

        <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <Linkedin className="w-5 h-5 text-blue-600 mr-3" />
          <a
            href="https://www.linkedin.com/in/ayan-majid-4537b52a0/"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <Github className="w-5 h-5 text-blue-600 mr-3" />
          <a
            href="https://github.com/Ayan-wd"
            target="_blank"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </div>

        {/* ✅ Phone number added */}
        <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
          <Phone className="w-5 h-5 text-blue-600 mr-3" />
          <a
            href="tel:+923065169753"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            0306-5169753
          </a>
        </div>
      </div>

      <div className="pt-4">
        <p className="text-gray-700 dark:text-gray-300">
          I&apos;m currently available for freelance work and always open to discussing new projects,
          opportunities, or partnerships. Feel free to reach out!
        </p>
      </div>
    </div>
  </AnimatedSection>

  <AnimatedSection direction="right" delay={0.3}>
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
      <ContactForm />
    </div>
  </AnimatedSection>
</div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Ayan Majid</h2>
              <p className="text-gray-400">MERN Developer</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/ayan-majid-4537b52a0/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Ayan-wd"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:ayanmajid88@gmail.com"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Ayan Majid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
