import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      <section
        id="about"
        className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-800 relative overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center text-balance">
              About Me
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I'm a MERN Developer with expertise in both frontend and backend development. As an aspiring computer
                  science student, I'm passionate about building full-stack web applications that solve real-world
                  problems.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  I have built many projects ranging from a custom hotel management system to company-scale platforms
                  like Airbnb, portfolio websites, and learning management systems. My experience spans across the
                  entire web development stack.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Currently working as a freelancer, I'm available for any kind of web development work and specialize
                  in creating scalable, user-friendly applications using modern technologies.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.4}>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 md:mb-6">Key Expertise</h3>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  <li className="flex items-start group">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 ml-2">
                      Full-Stack MERN Development (MongoDB, Express, React, Node.js)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 ml-2">
                      Frontend Development with React & Next.js
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 ml-2">
                      Backend API Development & Database Design
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 ml-2">
                      Cloud Platform Integration (AWS)
                    </span>
                  </li>
                  <li className="flex items-start group">
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0 transform group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 ml-2">
                      Responsive Web Design & User Experience
                    </span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center text-balance">
              Professional Experience
            </h2>
          </AnimatedSection>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Freelance Web Developer</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">Self-Employed</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 text-xs sm:text-sm md:text-base">
                    2024 - Present
                  </p>
                </div>
                <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
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
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 sm:p-4 md:p-6 border-l-4 border-blue-600 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold">Web Development Intern</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">TechCog</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 text-xs sm:text-sm md:text-base">
                    2024 (5 months)
                  </p>
                </div>
                <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300">
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
      <section
        id="projects"
        className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-800 relative"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center text-balance">
              Featured Projects
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <AnimatedCard delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <CardTitle className="text-base sm:text-lg md:text-xl">Hotel Management System</CardTitle>
                  <CardDescription className="text-xs sm:text-sm md:text-base">
                    Custom full-stack hotel management platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <div className="aspect-video relative rounded-md overflow-hidden mb-3 sm:mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/hotel-management-system-dashboard.png"
                      alt="Hotel Management System"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
                    Built a comprehensive hotel management system with booking management, room allocation, customer
                    management, and reporting features using MERN stack.
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs px-2 py-1"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs px-2 py-1"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs px-2 py-1"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs px-2 py-1"
                    >
                      Express
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">Learning Management System</CardTitle>
                  <CardDescription className="text-sm sm:text-base">LMS for House of Mathematics</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/lms-interface.jpg" alt="Learning Management System" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    Developed a comprehensive learning management system for House of Mathematics with course
                    management, student tracking, and interactive learning features.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      MERN Stack
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Authentication
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Course Management
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">Airbnb-like Platform</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Property rental and booking platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src="/airbnb-property-rental-platform.png"
                      alt="Airbnb Platform"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-red-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    Created a property rental platform similar to Airbnb with property listings, booking system, user
                    authentication, and payment integration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Payment Integration
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Booking System
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      User Auth
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">Portfolio Websites</CardTitle>
                  <CardDescription className="text-sm sm:text-base">Multiple client portfolio projects</CardDescription>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="aspect-video relative rounded-md overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700 transform transition-transform duration-500 hover:scale-[1.02]">
                    <Image src="/modern-portfolio-website.png" alt="Portfolio Websites" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-green-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
                    Designed and developed portfolio websites for various clients including Altakhleeq, House of
                    Mathematics, Cost Umbrella, and many more companies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      Responsive Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="bg-blue-100/50 dark:bg-blue-900/50 hover:bg-blue-200 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      SEO Optimized
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-3 sm:px-4 md:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <AnimatedSection>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-12 text-center text-balance">
              Technical Skills
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
            <AnimatedSection direction="up" delay={0.2}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="p-3 sm:p-4 md:p-6">
                  <CardTitle className="flex items-center text-base sm:text-lg md:text-xl">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-2">
                      <span className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-bold">FE</span>
                    </span>
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-3 sm:p-4 md:p-6 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-1 sm:gap-2 md:gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      React
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      HTML5
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      CSS3
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px] col-span-2 sm:col-span-1"
                    >
                      Responsive Design
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      Tailwind CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-1 sm:py-2 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-xs min-h-[32px] sm:min-h-[36px]"
                    >
                      Bootstrap
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.3}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-2">
                      <span className="text-green-600 dark:text-green-300 text-sm font-bold">BE</span>
                    </span>
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Node.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Express.js
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm"
                    >
                      MongoDB
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm"
                    >
                      SQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm col-span-2 sm:col-span-1"
                    >
                      API Development
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm"
                    >
                      RESTful APIs
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Authentication
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-xs sm:text-sm col-span-2 sm:col-span-1"
                    >
                      Database Design
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedSection direction="up" delay={0.4}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-2">
                      <span className="text-purple-600 dark:text-purple-300 text-sm font-bold">LANG</span>
                    </span>
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      C++
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      TypeScript
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      HTML
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      CSS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      SQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-xs sm:text-sm"
                    >
                      JSON
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.5}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardHeader className="p-4 sm:p-6">
                  <CardTitle className="flex items-center text-lg sm:text-xl">
                    <span className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mr-2">
                      <span className="text-orange-600 dark:text-orange-300 text-sm font-bold">TOOLS</span>
                    </span>
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      AWS
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Git/GitHub
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      VS Code
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Postman
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Docker
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Vercel
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
                    >
                      Netlify
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="justify-center py-2 hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-xs sm:text-sm"
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
            <div className="mt-8 sm:mt-12 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Additional Technologies</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                >
                  Redux
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                >
                  JWT
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors"
                >
                  Mongoose
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 transition-colors"
                >
                  Axios
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors"
                >
                  Socket.io
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
                >
                  Material-UI
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800 hover:bg-pink-100 dark:hover:bg-pink-900/40 transition-colors"
                >
                  Stripe API
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900/40 transition-colors"
                >
                  PayPal API
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900/40 transition-colors"
                >
                  Cloudinary
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 hover:bg-violet-100 dark:hover:bg-violet-900/40 transition-colors"
                >
                  Multer
                </Badge>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education & Certifications */}
      <section
        id="education"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center">
              Education & Certifications
            </h2>
          </AnimatedSection>

          <div className="mb-8 sm:mb-12">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Education</h3>
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-semibold">Bachelor's in Computer Science</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm sm:text-base">
                      University of Central Punjab, Lahore, Pakistan
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-2 sm:mt-0 text-sm sm:text-base">Undergraduate</p>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-sm sm:text-base">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="animate-pulse text-xs sm:text-sm">
                      Data Structures & Algorithms
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      Object-Oriented Programming
                    </Badge>
                    <Badge variant="secondary" className="animate-pulse text-xs sm:text-sm">
                      Database Systems
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      Web Development
                    </Badge>
                    <Badge variant="secondary" className="animate-pulse text-xs sm:text-sm">
                      Software Engineering
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      Computer Networks
                    </Badge>
                    <Badge variant="secondary" className="animate-pulse text-xs sm:text-sm">
                      Operating Systems
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      Programming Fundamentals
                    </Badge>
                    <Badge variant="secondary" className="text-xs sm:text-sm">
                      System Analysis & Design
                    </Badge>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection direction="right" delay={0.3}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold text-sm sm:text-base">AWS Cloud Practitioner</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Amazon Web Services certification covering cloud fundamentals
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold text-sm sm:text-base">MERN Stack Development</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Comprehensive training in MongoDB, Express.js, React, and Node.js
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                  <h4 className="font-semibold text-sm sm:text-base">Full-Stack Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Frontend and backend development with modern frameworks
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow hover:-translate-y-1 duration-300">
                  <h4 className="font-semibold text-sm sm:text-base">JavaScript & React</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                    Advanced JavaScript programming and React development
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 relative"
      >
        <div className="container mx-auto max-w-6xl relative z-10">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center">
              Get In Touch
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-lg sm:text-xl font-semibold">Contact Information</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <a
                      href="mailto:ayanmajid88@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base break-all"
                    >
                      ayanmajid88@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <a
                      href="https://www.linkedin.com/in/ayan-majid-4537b52a0/"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                      rel="noreferrer"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center hover:translate-x-1 transition-transform duration-300">
                    <Github className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <a
                      href="https://github.com/Ayan-wd"
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                      rel="noreferrer"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                    I'm currently available for freelance work and always open to discussing new projects,
                    opportunities, or partnerships. Feel free to reach out!
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.3}>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-lg">
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 dark:bg-gray-950 text-white relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-bold">Ayan Majid</h2>
              <p className="text-gray-400 text-sm sm:text-base">MERN Developer</p>
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
          <div className="mt-4 sm:mt-6 text-center text-gray-400 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} Ayan Majid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
