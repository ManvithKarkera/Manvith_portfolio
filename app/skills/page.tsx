"use client"

export default function Skills() {
  const technicalSkills = ["C", "Java", "Python", "HTML", "CSS", "JavaScript"]
  const tools = ["Canva", "Figma"]
  const softSkills = ["Teamwork", "Time Management", "Communication", "Critical Thinking"]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black text-white">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-4">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-2 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
