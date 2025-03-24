"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-black p-8">
      <Link href="/" className="inline-flex items-center gap-2 mb-8 text-sm font-medium hover:underline">
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">All Content</h1>

        <div className="grid gap-12">
          {/* About Section */}
          <section id="about" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">About Me</h2>
            <p className="text-lg leading-relaxed">
              I am a curious and enthusiastic individual with a strong passion for learning and gaining new experiences.
              I thrive in environments where I can challenge myself, absorb new knowledge, and grow both personally and
              professionally.
            </p>
            <p className="text-lg leading-relaxed">
              As a Computer Engineering student, I am constantly exploring new technologies and building projects that
              solve real-world problems. My goal is to create innovative solutions that make a positive impact on
              society.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you can find me practicing martial arts, reading about new technologies, or
              participating in hackathons and coding competitions.
            </p>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Programming Languages</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>C</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Tools & Technologies</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Canva</li>
                  <li>Figma</li>
                  <li>Git</li>
                  <li>VS Code</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Soft Skills</h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Teamwork</li>
                  <li>Time Management</li>
                  <li>Communication</li>
                  <li>Critical Thinking</li>
                  <li>Problem Solving</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Achievements</h2>
            <div className="space-y-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-xl font-medium">BitNBuild 2024 Hackathon</h3>
                <p className="text-gray-700">Ranked among top 50 teams globally</p>
                <p className="mt-2">
                  Developed an innovative solution for sustainable urban mobility, competing against hundreds of teams
                  worldwide.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="text-xl font-medium">Inspirational Student Speaker</h3>
                <p className="text-gray-700">Recognized for impactful speech during Reading Day celebrations</p>
                <p className="mt-2">
                  Selected to deliver a motivational speech to fellow students, highlighting the importance of
                  continuous learning and personal growth.
                </p>
              </div>

              <div className="p-4 border rounded-lg">
                <h3 className="text-xl font-medium">Sports Achievements</h3>
                <p className="text-gray-700">Multiple medals in Karate and skating (2017-2019)</p>
                <p className="mt-2">
                  Earned recognition in regional competitions, demonstrating discipline, perseverance, and physical
                  excellence.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="space-y-4">
            <h2 className="text-2xl font-bold border-b pb-2">Education</h2>
            <div className="space-y-6">
              <div className="p-4 border rounded-lg">
                <h3 className="text-xl font-medium">Bachelor of Engineering in Computer Engineering</h3>
                <p className="text-gray-700">University Name, 2022 - Present</p>
                <p className="mt-2">
                  Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management
                  Systems
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
