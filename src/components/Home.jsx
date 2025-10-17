import { motion, useAnimation } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
  },
};

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

export default function Home() {
  const bgControls = useAnimation();

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-8 bg-gradient-to-br from-indigo-50 via-white to-rose-50 overflow-hidden"
        style={{ isolation: "isolate" }}
      >
        {/* Animated Gradient Blurred Background */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(129, 140, 248, 0.15), transparent 50%), radial-gradient(circle at 80% 70%, rgba(244, 114, 182, 0.12), transparent 50%), radial-gradient(circle at 40% 80%, rgba(167, 139, 250, 0.1), transparent 50%)",
          }}
        />

        {/* Moving Gradient Accent */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(165, 180, 252, 0.2), rgba(251, 207, 232, 0.15), rgba(196, 181, 253, 0.18))",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Gradient Orbs */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400,
            height: 400,
            top: "-5%",
            right: "10%",
            background:
              "radial-gradient(circle, rgba(129, 140, 248, 0.08) 0%, transparent 70%)",
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
            width: 350,
            height: 350,
            bottom: "5%",
            left: "5%",
            background:
              "radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
            zIndex: 0,
          }}
          animate={{
            x: [0, -30, 0],
            y: [0, -35, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute rounded-full"
          style={{
            width: 300,
            height: 300,
            top: "40%",
            left: "50%",
            background:
              "radial-gradient(circle, rgba(167, 139, 250, 0.06) 0%, transparent 70%)",
            filter: "blur(70px)",
            zIndex: 0,
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Bouncing Ball */}
        <motion.div
          className="absolute rounded-full shadow-lg"
          style={{
            width: 40,
            height: 40,
            bottom: 60,
            left: "10%",
            zIndex: 1,
            background: "linear-gradient(135deg, #818cf8 0%, #6366f1 100%)",
          }}
          animate={{ y: ["0%", "-50%", "0%"] }}
          transition={bounceTransition}
        />

        {/* Floating Pencil */}
        <motion.div
          className="absolute opacity-70"
          style={{
            top: "20%",
            right: "15%",
            zIndex: 1,
          }}
          animate={{
            y: ["-20px", "20px", "-20px"],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path
              d="M17.5 2.5L21.5 6.5L7.5 20.5L3.5 16.5L17.5 2.5Z"
              stroke="#4f46e5"
              strokeWidth="1.5"
              fill="#fbbf24"
              opacity="0.85"
            />
            <path d="M13.5 6.5L17.5 10.5" stroke="#4f46e5" strokeWidth="1.5" />
          </svg>
        </motion.div>

        {/* Floating Color Palette */}
        <motion.div
          className="absolute opacity-75"
          style={{
            top: "15%",
            left: "8%",
            zIndex: 1,
          }}
          animate={{
            y: ["10px", "-15px", "10px"],
            x: ["-5px", "10px", "-5px"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#6366f1"
              strokeWidth="1.5"
              fill="white"
              opacity="0.9"
            />
            <circle cx="12" cy="8" r="2" fill="#fbbf24" />
            <circle cx="16" cy="12" r="2" fill="#818cf8" />
            <circle cx="12" cy="16" r="2" fill="#f472b6" />
            <circle cx="8" cy="12" r="2" fill="#a78bfa" />
          </svg>
        </motion.div>

        {/* Rotating Geometric Shapes */}
        <motion.div
          className="absolute opacity-50"
          style={{
            bottom: "25%",
            right: "8%",
            zIndex: 1,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="80" height="80" viewBox="0 0 100 100">
            <polygon points="50,10 90,90 10,90" fill="#a78bfa" opacity="0.6" />
          </svg>
        </motion.div>

        {/* Floating Design Tools */}
        <motion.div
          className="absolute opacity-65"
          style={{
            bottom: "35%",
            left: "12%",
            zIndex: 1,
          }}
          animate={{
            y: ["-10px", "15px", "-10px"],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="45" height="45" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
              stroke="#6366f1"
              strokeWidth="1.5"
              fill="#eef2ff"
            />
            <path d="M9 9h6v6H9z" fill="#818cf8" opacity="0.7" />
            <circle cx="7.5" cy="7.5" r="1.5" fill="#fbbf24" />
          </svg>
        </motion.div>

        {/* Animated Bezier Curve */}
        <motion.div
          className="absolute opacity-60"
          style={{
            top: "60%",
            right: "20%",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="70" height="40" viewBox="0 0 100 50">
            <path
              d="M10,40 Q30,10 50,25 Q70,40 90,10"
              stroke="#f472b6"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="5,5"
              opacity="0.8"
            />
            <circle cx="10" cy="40" r="3" fill="#f472b6" />
            <circle cx="50" cy="25" r="3" fill="#f472b6" />
            <circle cx="90" cy="10" r="3" fill="#f472b6" />
          </svg>
        </motion.div>

        {/* Creative Spark Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${20 + i * 8}%`,
              left: `${15 + i * 9}%`,
              zIndex: 1,
              background:
                i % 3 === 0 ? "#818cf8" : i % 3 === 1 ? "#f472b6" : "#a78bfa",
              opacity: 0.6,
            }}
            animate={{
              scale: [0, 1.3, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating Typography Element */}
        <motion.div
          className="absolute opacity-25 font-bold text-6xl text-indigo-300"
          style={{
            top: "40%",
            left: "5%",
            zIndex: 1,
          }}
          animate={{
            y: ["5px", "-10px", "5px"],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Aa
        </motion.div>

        {/* Grid Pattern */}
        <motion.div
          className="absolute opacity-15"
          style={{
            bottom: "10%",
            right: "25%",
            zIndex: 1,
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="60" height="60" viewBox="0 0 60 60">
            {[...Array(4)].map((_, i) => (
              <g key={i}>
                <line
                  x1={i * 20}
                  y1="0"
                  x2={i * 20}
                  y2="60"
                  stroke="#c7d2fe"
                  strokeWidth="1"
                />
                <line
                  x1="0"
                  y1={i * 20}
                  x2="60"
                  y2={i * 20}
                  stroke="#c7d2fe"
                  strokeWidth="1"
                />
              </g>
            ))}
          </svg>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          {/* Text Content */}
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight leading-none">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Crafting Visual
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-orange-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              I'm a passionate Graphic Designer focused on creating compelling and
              modern visuals that elevate brands and engage audiences.
            </p>
            <motion.button
              onClick={() => handleScrollToSection("gallary")}
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Profile Image with Neon Glow */}
          <motion.div
            className="relative w-full md:w-96 h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            {/* Neon glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>
            
            {/* Image container */}
            <div className="relative h-full rounded-3xl overflow-hidden border-2 border-purple-400/50 backdrop-blur-sm">
              <img
                src="./my-profile-img.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20"></div>
            </div>
          </motion.div>
        </div>
      </section>


    </>
  );
}