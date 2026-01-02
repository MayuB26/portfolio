import { motion } from "framer-motion";

const AnimatedWrapper = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-purple-50/30 to-indigo-50/40 text-gray-900 overflow-hidden"
    >
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          top: "-10%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 300,
          height: 300,
          bottom: "-5%",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 opacity-40"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="2"
            opacity="0.6"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="#6366f1"
            strokeWidth="2"
            opacity="0.4"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-10 opacity-40"
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100">
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#a78bfa"
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading + intro */}
        <AnimatedWrapper delay={0.2}>
          <motion.h2
            className="text-5xl font-black mb-8 text-center tracking-tight"
            whileInView={{ scale: [0.95, 1.02, 1] }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>

          <motion.p
            className="text-xl max-w-4xl leading-relaxed text-left mx-auto text-slate-700 font-light"
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A passionate{" "}
            <span className="font-semibold text-purple-600">
              MERN Stack Developer
            </span>{" "}
            with over{" "}
            <span className="font-semibold">4 years of experience</span> in
            building scalable, performant, and user-centric web applications.
            Skilled in developing enterprise-level solutions using modern
            JavaScript technologies and writing clean, maintainable, and
            efficient code. Core expertise includes
            <span className="font-semibold">
              {" "}
              React.js, Node.js, Express.js, Redux,
            </span>{" "}
            and
            <span className="font-semibold"> Tailwind CSS</span>, crafting
            responsive and reusable front-end and back-end components.
            Experienced with
            <span className="font-semibold"> MongoDB, MySQL, SQL,</span> and
            version control using
            <span className="font-semibold"> Git</span>, enabling complete
            full-stack development from concept to deployment. Proficient in
            <span className="font-semibold"> JavaScript</span> (Advanced) with
            intermediate knowledge of
            <span className="font-semibold"> PHP, Laravel,</span> and
            <span className="font-semibold"> React Native</span>. Adept at
            working with
            <span className="font-semibold">
              {" "}
              HTML, CSS, SCSS, SASS, Bootstrap, JQuery,
            </span>{" "}
            and
            <span className="font-semibold"> Postman</span> for API testing and
            UI integration. Demonstrates strong{" "}
            <span className="font-semibold">
              problem-solving, collaboration, communication,
            </span>
            and <span className="font-semibold">adaptability</span> skills,
            ensuring high-quality delivery and continuous learning through
            evolving technologies and best practices.
          </motion.p>
        </AnimatedWrapper>

        {/* Stats section */}
        <AnimatedWrapper delay={0.6}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "10+",
                label: "Enterprise Apps Built",
                icon: "⚙️",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                number: "4+",
                label: "Years in Full-Stack Dev",
                icon: "💻",
                gradient: "from-violet-500 to-fuchsia-500",
              },
              {
                number: "10+",
                label: "Tech Stacks Mastered",
                icon: "🧠",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/60 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)",
                  scale: 1.02,
                }}
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <motion.div
                    className={`text-4xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-slate-600 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Call to action */}
        <AnimatedWrapper delay={0.8}>
          <div className="text-center mt-16">
            <motion.a
              onClick={() => handleScrollToSection("contact")}
              className="inline-block relative px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-xl cursor-pointer overflow-hidden group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Let's Work Together</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </AnimatedWrapper>

        {/* Decorative Bottom Line */}
        <motion.div
          className="mt-20 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
    </section>
  );
}
