import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
  { name: "React", color: "from-cyan-400 to-blue-500", icon: "⚛️" },
  { name: "Next.js", color: "from-slate-300 to-slate-500", icon: "▲" },
  { name: "TailwindCSS", color: "from-cyan-400 to-blue-600", icon: "🎨" },
  { name: "JavaScript", color: "from-yellow-400 to-yellow-600", icon: "JS" },
  { name: "TypeScript", color: "from-blue-500 to-blue-700", icon: "TS" },
  { name: "Node.js", color: "from-green-500 to-green-700", icon: "⬢" },
  { name: "Express.js", color: "from-slate-400 to-slate-600", icon: "E" },
  { name: "NPM", color: "from-red-500 to-red-700", icon: "📦" },
  { name: "PNPM", color: "from-orange-400 to-orange-600", icon: "📦" },
  { name: "Git", color: "from-orange-500 to-red-600", icon: "⚡" },
  { name: "Github", color: "from-slate-600 to-slate-800", icon: "🐙" },
  { name: "Figma", color: "from-purple-400 to-pink-500", icon: "🎨" },
  { name: "Turborepo", color: "from-red-500 to-pink-600", icon: "⚡" },
  { name: "Deno", color: "from-slate-700 to-slate-900", icon: "🦕" },
  { name: "PostgreSQL", color: "from-blue-400 to-blue-600", icon: "🐘" },
  { name: "MySQL", color: "from-blue-500 to-cyan-600", icon: "🐬" },
  { name: "MongoDB", color: "from-green-400 to-green-600", icon: "🍃" },
  { name: "Discord.js", color: "from-indigo-500 to-purple-600", icon: "💬" },
  { name: "Rollup", color: "from-red-500 to-orange-600", icon: "📦" },
  { name: "Docker", color: "from-blue-400 to-blue-600", icon: "🐳" },
  { name: "Vercel", color: "from-slate-700 to-slate-900", icon: "▲" },
  { name: "Astro", color: "from-orange-500 to-red-600", icon: "🚀" },
  { name: "ESLint", color: "from-indigo-400 to-purple-600", icon: "📋" },
];

const Skills = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Duplicate skills array for seamless loop
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <section
      className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50"
      style={{ isolation: "isolate" }}
      id="skills"
    >
      {/* Static Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.12), transparent 50%), radial-gradient(circle at 40% 80%, rgba(167, 139, 250, 0.1), transparent 50%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-block"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              background:
                "linear-gradient(to right, #6366f1, #a855f7, #ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skills & Technologies
          </motion.h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto font-light"
        >
          My tech stack and tools I work with daily
        </motion.p>
      </div>

      {/* Scrolling Skills Container */}
      <div className="relative z-10 py-12">
        {/* Row 1 - Left to Right */}
        <div className="overflow-hidden mb-8 relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`row1-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative flex-shrink-0"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-md border border-indigo-200/50 rounded-2xl shadow-lg min-w-[200px] group-hover:border-indigo-300 transition-all">
                  <div
                    className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-lg whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="overflow-hidden mb-8 relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative flex-shrink-0"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-md border border-purple-200/50 rounded-2xl shadow-lg min-w-[200px] group-hover:border-purple-300 transition-all">
                  <div
                    className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-lg whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Row 3 - Left to Right (Faster) */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`row3-${index}`}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative flex-shrink-0"
              >
                {/* Glow effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-60 blur-lg transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-md border border-pink-200/50 rounded-2xl shadow-lg min-w-[200px] group-hover:border-pink-300 transition-all">
                  <div
                    className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}
                  >
                    {skill.icon}
                  </div>
                  <span className="text-gray-800 font-semibold text-lg whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="relative z-10 text-center mt-16"
      >
        <p className="text-gray-600 text-sm font-light">
          Hover over any skill to see it shine ✨
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
