import { motion } from "motion/react";
import { Leaf, Building2, Factory, Wind, BarChart3, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Carbon Audits",
      description: "Comprehensive assessment of your organization's carbon footprint with actionable reduction strategies.",
      features: ["Detailed Emissions Analysis", "Reduction Roadmap", "Industry Benchmarking", "Compliance Support"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wind,
      title: "Renewable Energy Integration",
      description: "Transition to clean energy sources with solar, wind, and hybrid solutions tailored for Pakistan.",
      features: ["Solar Panel Installation", "Wind Energy Systems", "Energy Storage Solutions", "Grid Integration"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Factory,
      title: "Industrial Optimization",
      description: "Transform manufacturing processes to reduce emissions while maintaining productivity and profit.",
      features: ["Process Efficiency", "Waste Reduction", "Clean Technology", "Energy Management"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: BarChart3,
      title: "Carbon Tracking & Reporting",
      description: "Real-time monitoring and transparent reporting of your carbon reduction progress.",
      features: ["Live Dashboards", "Automated Reporting", "Verification Services", "Impact Analytics"],
      color: "from-green-600 to-lime-600",
    },
    {
      icon: Leaf,
      title: "Sustainability Consulting",
      description: "Expert guidance on building sustainable business practices that benefit both planet and profit.",
      features: ["Strategy Development", "Policy Framework", "Stakeholder Engagement", "Green Certification"],
      color: "from-lime-500 to-green-500",
    },
    {
      icon: Users,
      title: "Community Programs",
      description: "Education and empowerment initiatives to drive grassroots carbon reduction in Pakistan.",
      features: ["Training Workshops", "School Programs", "Community Projects", "Awareness Campaigns"],
      color: "from-emerald-600 to-green-600",
    },
  ];

  const process = [
    { step: "01", title: "Assess", description: "Measure your current carbon footprint" },
    { step: "02", title: "Plan", description: "Design your 50% reduction strategy" },
    { step: "03", title: "Implement", description: "Execute sustainable solutions" },
    { step: "04", title: "Monitor", description: "Track and verify your impact" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(22, 163, 74, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive carbon reduction solutions designed for Pakistan's unique challenges and opportunities
            </p>
          </motion.div>

          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.02, rotateY: 2 }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1668097613569-3405bb63262b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRlY2hub2xvZ3klMjBncmVlbnxlbnwxfHx8fDE3NzQyMzcyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Sustainable technology"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>

        {/* 3D Floating shapes */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-green-500/20 rounded-2xl"
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 180, 0],
            rotateX: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-500/20 rounded-3xl"
          animate={{
            y: [0, 30, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="relative p-8 rounded-3xl bg-white border border-green-200 hover:border-transparent hover:shadow-2xl transition-all h-full overflow-hidden"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    whileHover={{ scale: 1.5 }}
                  />

                  <motion.div
                    className={`relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white`}
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon size={40} />
                  </motion.div>

                  <h3 className="text-2xl mb-4 text-gray-900 relative">{service.title}</h3>
                  <p className="text-gray-600 mb-6 relative">{service.description}</p>

                  <ul className="space-y-2 mb-6 relative">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-green-600 hover:text-emerald-600 transition-colors relative"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl text-center mb-20 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="text-center"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="relative w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-4xl font-bold"
                    whileHover={{ rotateY: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      rotateZ: [0, 5, -5, 0],
                    }}
                    whileInView={{
                      rotateZ: [0, 5, -5, 0],
                    }}
                    viewport={{ once: true }}
                  >
                    {item.step}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-white/20"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>

                  <h3 className="text-2xl mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>

                {index < process.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-green-600 to-emerald-600"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Background 3D elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Pakistan-Specific Solutions */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Built for Pakistan
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our services are specifically designed to address Pakistan's industrial landscape, energy infrastructure, and regulatory environment
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 2 }}
            >
              <div className="text-5xl mb-4">🏭</div>
              <h3 className="text-2xl mb-3 text-gray-900">Textile Industry</h3>
              <p className="text-gray-700">
                Specialized solutions for Pakistan's largest export sector, reducing water and energy consumption while cutting emissions.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 2 }}
            >
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl mb-3 text-gray-900">Agriculture</h3>
              <p className="text-gray-700">
                Sustainable farming practices and renewable energy solutions for Pakistan's agricultural heartland.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05, rotateY: 2 }}
            >
              <div className="text-5xl mb-4">🏙️</div>
              <h3 className="text-2xl mb-3 text-gray-900">Urban Development</h3>
              <p className="text-gray-700">
                Green building standards and smart city solutions for Karachi, Lahore, Islamabad, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Cut Your Carbon by 50%?
          </motion.h2>
          <motion.p
            className="text-2xl mb-12 text-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Let's create a customized carbon reduction plan for your organization
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
              Get Started Today
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>

        {/* 3D Animated shapes */}
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
          className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/30"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-white/30 rounded-full"
          animate={{
            y: [0, -30, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>
    </div>
  );
}
