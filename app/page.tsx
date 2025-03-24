"use client"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, Phone, Code, Palette, Users } from "lucide-react"

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const position = window.scrollY
        const maxScroll = document.body.scrollHeight - window.innerHeight
        const scrollPercentage = Math.min(position / maxScroll, 1)
        setScrollPosition(scrollPercentage)
      }
    }

    // Set document height to enable scrolling for multiple sections
    document.body.style.height = "400vh"

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate transition values based on scroll position
  const section1Opacity = 1 - Math.min(scrollPosition * 4, 1)
  const section2Opacity = Math.max(Math.min(scrollPosition * 4 - 1, 1), 0)
  const section3Opacity = Math.max(Math.min(scrollPosition * 4 - 2, 1), 0)
  const section4Opacity = Math.max(Math.min(scrollPosition * 4 - 3, 1), 0)

  // Background color transition (only for the first transition)
  const backgroundColorR = Math.round(26 + (210 - 26) * Math.min(scrollPosition * 4, 1))
  const backgroundColorG = Math.round(26 + (240 - 26) * Math.min(scrollPosition * 4, 1))
  const backgroundColorB = Math.round(26 + (39 - 26) * Math.min(scrollPosition * 4, 1))

  // Calculate active section
  const activeSection = scrollPosition < 0.25 ? 1 : scrollPosition < 0.5 ? 2 : scrollPosition < 0.75 ? 3 : 4

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-screen overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: `rgb(${backgroundColorR}, ${backgroundColorG}, ${backgroundColorB})` }}
    >
      {/* Grid overlay - fades out on scroll */}
      <div
        className="absolute inset-0 grid grid-cols-6 grid-rows-6 transition-opacity duration-300"
        style={{ opacity: section1Opacity }}
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div key={i} className="border border-[#2a2a2a]"></div>
        ))}
      </div>

      {/* Top navigation */}
      <div className="absolute top-0 right-0 flex justify-end p-6 z-50">
        <nav className="flex items-center gap-6">
          <a
            href="#about"
            className={`text-sm font-medium hover:text-white/80 transition-colors ${activeSection === 2 ? "font-bold" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: window.innerHeight * 0.5,
                behavior: "smooth",
              })
            }}
          >
            About
          </a>
          <a
            href="#skills"
            className={`text-sm font-medium hover:text-white/80 transition-colors ${activeSection === 3 ? "font-bold" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: window.innerHeight * 1.5,
                behavior: "smooth",
              })
            }}
          >
            Skills
          </a>
          <a
            href="#achievements"
            className={`text-sm font-medium hover:text-white/80 transition-colors ${activeSection === 4 ? "font-bold" : ""}`}
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: window.innerHeight * 2.5,
                behavior: "smooth",
              })
            }}
          >
            Achievements
          </a>
          <a href="/content" className="text-sm font-medium hover:text-white/80 transition-colors">
            View All
          </a>
        </nav>
      </div>

      {/* Section 1: Hero */}
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 z-40 ${activeSection !== 1 ? "pointer-events-none" : ""}`}
        style={{
          opacity: section1Opacity,
          transform: `translateY(${activeSection === 1 ? "0" : "-100%"})`,
        }}
      >
        <h1 className="text-white text-8xl md:text-9xl font-bold tracking-wider">MANVITH</h1>
        <p className="text-white mt-4 text-xl font-light tracking-widest">COMPUTER ENGINEERING STUDENT</p>
        <div className="flex gap-6 mt-8 relative z-20">
          <a
            href="https://github.com/ManvithKarkera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://github.com/ManvithKarkera", "_blank")
            }}
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/manvith-karkera-403b33333/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.open("https://linkedin.com/in/manvith-karkera-403b33333/", "_blank")
            }}
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:manvith.karkera176@gmail.com"
            className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "mailto:manvith.karkera176@gmail.com"
            }}
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:9867381226"
            className="p-3 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              window.location.href = "tel:9867381226"
            }}
          >
            <Phone size={24} />
          </a>
        </div>
      </section>

      {/* Section 2: About */}
      <section
        id="about"
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 px-4 z-30 ${activeSection !== 2 ? "pointer-events-none" : ""}`}
        style={{
          opacity: section2Opacity,
          transform: `translateY(${activeSection < 2 ? "100%" : activeSection > 2 ? "-100%" : "0"})`,
        }}
      >
        <div className="max-w-3xl bg-black/10 p-8 rounded-xl backdrop-blur-sm">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-[#1a1a1a]">About Me</h2>
            <p className="text-lg leading-relaxed text-[#1a1a1a] font-medium">
              I am a curious and enthusiastic individual with a strong passion for learning and gaining new experiences.
              I thrive in environments where I can challenge myself, absorb new knowledge, and grow both personally and
              professionally.
            </p>
            <p className="text-lg leading-relaxed text-[#1a1a1a] font-medium">
              As a Computer Engineering student, I am constantly exploring new technologies and building projects that
              solve real-world problems. My goal is to create innovative solutions that make a positive impact on
              society.
            </p>
            <p className="text-lg leading-relaxed text-[#1a1a1a] font-medium">
              When I'm not coding, you can find me practicing martial arts, reading about new technologies, or
              participating in hackathons and coding competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Skills */}
      <section
        id="skills"
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 px-4 z-20 ${activeSection !== 3 ? "pointer-events-none" : ""}`}
        style={{
          opacity: section3Opacity,
          transform: `translateY(${activeSection < 3 ? "100%" : activeSection > 3 ? "-100%" : "0"})`,
        }}
      >
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Programming Languages */}
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1a1a1a] p-2 rounded-lg">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Languages</h3>
              </div>
              <ul className="space-y-2 text-[#1a1a1a] font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>C
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Java
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Python
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  HTML/CSS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  JavaScript
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1a1a1a] p-2 rounded-lg">
                  <Palette size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Tools</h3>
              </div>
              <ul className="space-y-2 text-[#1a1a1a] font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Canva
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Figma
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Git
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  VS Code
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="bg-black/10 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1a1a1a] p-2 rounded-lg">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Soft Skills</h3>
              </div>
              <ul className="space-y-2 text-[#1a1a1a] font-medium">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Teamwork
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Time Management
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Communication
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Critical Thinking
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Problem Solving
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a]"></div>
                  Adaptability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Achievements */}
      <section
        id="achievements"
        className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 px-4 z-10 ${activeSection !== 4 ? "pointer-events-none" : ""}`}
        style={{
          opacity: section4Opacity,
          transform: `translateY(${activeSection < 4 ? "100%" : "0"})`,
        }}
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-8 text-center">Achievements</h2>
          <ul className="space-y-6">
            <li className="p-6 bg-black/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a]">BitNBuild 2024 Hackathon</h3>
              <p className="text-[#1a1a1a] font-medium mt-1">Ranked among top 50 teams globally</p>
              <p className="mt-3 text-[#1a1a1a]">
                Developed an innovative solution for sustainable urban mobility, competing against hundreds of teams
                worldwide.
              </p>
            </li>
            <li className="p-6 bg-black/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a]">Inspirational Student Speaker</h3>
              <p className="text-[#1a1a1a] font-medium mt-1">
                Recognized for impactful speech during Reading Day celebrations
              </p>
              <p className="mt-3 text-[#1a1a1a]">
                Selected to deliver a motivational speech to fellow students, highlighting the importance of continuous
                learning and personal growth.
              </p>
            </li>
            <li className="p-6 bg-black/10 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#1a1a1a]">Sports Achievements</h3>
              <p className="text-[#1a1a1a] font-medium mt-1">Multiple medals in Karate and skating (2017-2019)</p>
              <p className="mt-3 text-[#1a1a1a]">
                Earned recognition in regional competitions, demonstrating discipline, perseverance, and physical
                excellence.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Scroll indicator - only visible on first section */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm transition-opacity duration-300 z-50"
        style={{
          opacity: section1Opacity,
          color: "white",
        }}
      >
        <p className="mb-2">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce mt-2"></div>
        </div>
      </div>

      {/* Section indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <button
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 1 ? "bg-white scale-125" : "bg-white/30"}`}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Go to Hero section"
        />
        <button
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 2 ? "bg-black scale-125" : "bg-black/30"}`}
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.5, behavior: "smooth" })}
          aria-label="Go to About section"
        />
        <button
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 3 ? "bg-black scale-125" : "bg-black/30"}`}
          onClick={() => window.scrollTo({ top: window.innerHeight * 1.5, behavior: "smooth" })}
          aria-label="Go to Skills section"
        />
        <button
          className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSection === 4 ? "bg-black scale-125" : "bg-black/30"}`}
          onClick={() => window.scrollTo({ top: window.innerHeight * 2.5, behavior: "smooth" })}
          aria-label="Go to Achievements section"
        />
      </div>
    </div>
  )
}
