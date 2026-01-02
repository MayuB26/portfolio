import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const allProjects = [
  {
    title: "WOWLEADS",
    footer: "JavaScript | React.js | Node.js",
    details: [
      "Developed a web crawler app to categorize provided website lists.",
      "Used React.js for frontend UI and Node.js APIs for crawling backend.",
      "Improved data extraction accuracy by 20%.",
      "Contributed to end-to-end product lifecycle and deployment.",
    ],
  },
  {
    title: "DATING APP",
    footer: "JavaScript | React.js",
    details: [
      "Subscription-based dating application built for US users.",
      "Designed responsive UI that enhances user experience.",
      "Implemented core features like profiles, subscriptions, and messaging.",
    ],
  },
  {
    title: "GK STORE (Grocery Portal)",
    footer: "JavaScript | React.js",
    details: [
      "B2B e-commerce portal for grocery ordering in Sweden.",
      "Enabled scheduled bulk orders for restaurant chains.",
      "Automated yearly delivery scheduling for client companies.",
    ],
  },
  {
    title: "SOFTLABS ERP",
    footer: "JavaScript | React.js | Redux",
    details: [
      "Designed a visually appealing and user-centric ERP interface.",
      "Integrated API-driven frontend with scalable architecture.",
      "Built and maintained modular components with Redux state logic.",
    ],
  },
  {
    title: "NIPPON ASSET MANAGEMENT (Singapore CMS)",
    footer: "JavaScript | React.js | Redux",
    details: [
      "Developed public website and full-featured admin CMS.",
      "Enabled content management (add/edit/delete) for NAMS team.",
      "Optimized UX for blog, section management, and responsiveness.",
    ],
  },
  {
    title: "COLLEGE INFORMATION SYSTEM",
    footer: "React.js | Redux | Laravel | MySQL",
    details: [
      "Centralized academic & administrative data management.",
      "Handled student database with accuracy and efficient retrieval.",
      "Built both web and mobile admin platforms for seamless access.",
    ],
  },
  {
    title: "HLDA WEBSITE",
    footer: "JavaScript | Vue.js | Quasar | SCSS",
    details: [
      "Developed a platform for dance resources and class management.",
      "Improved website optimization and performance by 30%.",
      "Created sections for schedules, instructors, and dance styles.",
    ],
  },
  {
    title: "FALCON SOLUTIONS ERP WEBSITE",
    footer: "JavaScript | Vue 3 | Quasar",
    details: [
      "Developed the ERP Implementation website for Falcon Solutions.",
      "Built user-friendly UI for service access and customization.",
      "Targeted industries: Law firms, CPA firms, Engineering firms.",
    ],
  },
];

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const projectsPerPage = 3;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = allProjects.slice(startIndex, endIndex);

  const handleNext = () => {
    if (endIndex < allProjects.length)
      setStartIndex((prev) => prev + projectsPerPage);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex((prev) => prev - projectsPerPage);
  };

  // Cursor motion effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const moveX = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const moveY = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen py-24 px-6 md:px-16 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-rose-50"
      style={{ isolation: "isolate" }}
      id="projects"
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
            Projects
          </motion.h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto font-light"
        >
          Explore my portfolio of innovative web solutions and applications
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative h-[440px]"
          >
            {/* Card glow effect on hover */}
            <motion.div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500" />

            {/* Main card */}
            <div className="relative h-full p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-indigo-200/50 shadow-xl overflow-hidden group-hover:border-indigo-300/70 transition-all">
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col h-full justify-between">
                <div>
                  <motion.div
                    className="text-2xl font-bold mb-5 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      background: "linear-gradient(to right, #6366f1, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {project.title}
                  </motion.div>
                  <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
                    {project.details.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <span className="text-indigo-500 mt-1 text-lg">•</span>
                        <span className="group-hover:text-gray-900 transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-indigo-200/50 group-hover:border-indigo-300/70 transition-colors">
                  <div className="flex items-center gap-3">
                    <motion.span
                      className="w-2 h-2 rounded-full"
                      style={{
                        background:
                          "linear-gradient(to right, #6366f1, #a855f7)",
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-gray-600 text-sm font-medium group-hover:text-indigo-600 transition-colors">
                      {project.footer}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="relative z-10 flex justify-center items-center gap-6 mt-16">
        <motion.button
          onClick={handlePrev}
          disabled={startIndex === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 text-gray-700 hover:text-indigo-600 px-8 py-3 border border-indigo-200/50 rounded-2xl bg-white/70 backdrop-blur-md transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:border-indigo-300/70 hover:shadow-lg hover:shadow-indigo-500/20"
        >
          <ArrowLeft
            className="group-hover:-translate-x-1 transition-transform"
            size={20}
          />
          <span className="font-medium">Previous</span>
        </motion.button>

        <div className="flex gap-2">
          {Array.from({
            length: Math.ceil(allProjects.length / projectsPerPage),
          }).map((_, idx) => (
            <motion.div
              key={idx}
              className={`h-2 rounded-full transition-all ${
                idx === Math.floor(startIndex / projectsPerPage)
                  ? "w-8 bg-gradient-to-r from-indigo-500 to-purple-500"
                  : "w-2 bg-indigo-200"
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          onClick={handleNext}
          disabled={endIndex >= allProjects.length}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group flex items-center gap-3 text-gray-700 hover:text-purple-600 px-8 py-3 border border-purple-200/50 rounded-2xl bg-white/70 backdrop-blur-md transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:border-purple-300/70 hover:shadow-lg hover:shadow-purple-500/20"
        >
          <span className="font-medium">Next</span>
          <ArrowRight
            className="group-hover:translate-x-1 transition-transform"
            size={20}
          />
        </motion.button>
      </div>
    </section>
  );
};

export default Projects;
