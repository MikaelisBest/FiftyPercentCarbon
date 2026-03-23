import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Leaf, Target, Globe, TrendingDown } from "lucide-react";
import { Link } from "react-router";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const features = [
    {
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Implement eco-friendly practices that reduce emissions and protect our planet.",
    },
    {
      icon: Target,
      title: "50% Reduction Goal",
      description: "Ambitious yet achievable targets to cut carbon footprints in half.",
    },
    {
      icon: Globe,
      title: "Pakistan to Global",
      description: "Starting locally in Pakistan, expanding our impact worldwide.",
    },
    {
      icon: TrendingDown,
      title: "Measurable Impact",
      description: "Track real-time reductions with transparent reporting and verification.",
    },
  ];

  const stats = [
    { number: "50%", label: "Carbon Reduction Target" },
    { number: "100+", label: "Pakistan Partners" },
    { number: "24/7", label: "Carbon Monitoring" },
    { number: "5M+", label: "Trees Equivalent Impact" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-600/10" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Cut Carbon by Half
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Leading Pakistan's carbon reduction revolution. Join us in our mission to reduce carbon footprints by 50% and create a sustainable future for generations to come.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors"
            >
              Our Solutions
            </Link>
          </motion.div>
        </div>

        {/* Floating 3D Elements - Leaf themed */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-green-500/20 rounded-2xl"
          animate={{
            y: [0, -20, 0],
            rotateZ: [0, 10, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/20 rounded-3xl"
          animate={{
            y: [0, 20, 0],
            rotateZ: [0, -10, 0],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-20 w-16 h-16 bg-teal-500/20 rounded-xl"
          animate={{
            x: [0, 20, 0],
            rotateY: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-green-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading the charge in carbon reduction with proven strategies and measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-400 transition-colors h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white"
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon size={32} />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background 3D Elements */}
        <motion.div
          className="absolute -top-10 -left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-10 -right-10 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Image Section - Pakistan Focus */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Starting in Pakistan, Growing Global
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Our journey begins in Pakistan, where we're partnering with local businesses, industries, and communities to achieve unprecedented carbon reduction.
              </p>
              <p className="text-xl text-gray-700 mb-8">
                From Karachi to Islamabad, we're implementing sustainable solutions that cut emissions by 50% while driving economic growth and environmental preservation.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-lg shadow-green-600/30"
              >
                Our Story
                <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1598979348399-d9812608afc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMG5hdHVyZSUyMHBha2lzdGFufGVufDF8fHx8MTc3NDI4OTI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Green nature"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl -z-10"
                animate={{
                  rotateZ: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from businesses and communities across Pakistan
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
            >
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl mb-3 text-gray-900">Industrial Transformation</h3>
              <p className="text-gray-700 mb-4">
                Helping Pakistan's manufacturing sector reduce emissions through clean energy adoption and process optimization.
              </p>
              <div className="text-green-600 font-semibold">Average 45% reduction in first year</div>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
            >
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-2xl mb-3 text-gray-900">Community Engagement</h3>
              <p className="text-gray-700 mb-4">
                Empowering local communities with sustainable practices and green technology education programs.
              </p>
              <div className="text-green-600 font-semibold">50,000+ individuals trained</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Reduce Your Carbon Footprint?
          </motion.h2>
          <motion.p
            className="text-xl mb-12 text-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Join Pakistan's leading carbon reduction initiative and make a real difference
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            >
              Start Your Carbon Journey
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Animated 3D shapes */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border-4 border-white/30 rounded-2xl"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotateZ: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>
    </div>
  );
}
