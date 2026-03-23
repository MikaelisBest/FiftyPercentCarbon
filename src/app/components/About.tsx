import { motion } from "motion/react";
import { Heart, Sprout, Sun, Shield } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Planet First",
      description: "Every decision prioritizes environmental sustainability and ecological balance.",
    },
    {
      icon: Sprout,
      title: "Local Roots",
      description: "Starting in Pakistan, nurturing grassroots change in our communities.",
    },
    {
      icon: Sun,
      title: "Clean Energy",
      description: "Championing renewable energy and sustainable power solutions.",
    },
    {
      icon: Shield,
      title: "Transparent Impact",
      description: "Honest reporting and verified carbon reduction measurements.",
    },
  ];

  const timeline = [
    { year: "2023", title: "Foundation", description: "Launched in Karachi with a bold 50% reduction vision" },
    { year: "2024", title: "Pakistan Expansion", description: "Extended operations to Lahore and Islamabad" },
    { year: "2025", title: "Industry Partnerships", description: "Partnered with 100+ Pakistani businesses" },
    { year: "2026", title: "Regional Growth", description: "Expanding to South Asian markets" },
    { year: "2027", title: "Global Vision", description: "Taking our carbon reduction model worldwide" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
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
              About Fifty Percent Carbon
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Pakistan's pioneering carbon reduction initiative, committed to cutting emissions by half and building a sustainable future.
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
              src="https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhciUyMHBhbmVsc3xlbnwxfHx8fDE3NzQxOTA5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Renewable Energy"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Founded in 2023, Fifty Percent Carbon emerged from a simple yet powerful belief: Pakistan can lead the global fight against climate change.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                We're not just reducing carbon emissions—we're transforming how businesses and communities think about sustainability. Our 50% reduction target isn't just a number; it's a commitment to future generations.
              </p>
              <p className="text-xl text-gray-700">
                Starting in Pakistan's major cities, we're proving that economic growth and environmental responsibility go hand in hand. Our success stories are inspiring similar movements across South Asia and beyond.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {[
                { value: "50%", label: "Target Reduction" },
                { value: "100+", label: "Partners" },
                { value: "PKR", label: "Local Focus" },
                { value: "∞", label: "Impact" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-1"
                  whileHover={{ scale: 1.05, rotateZ: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-full h-full rounded-2xl bg-white flex flex-col items-center justify-center p-4">
                    <div className="text-4xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 text-center">{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl text-center mb-20 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="p-8 rounded-2xl bg-white shadow-lg h-full"
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon size={40} />
                  </motion.div>
                  <h3 className="text-2xl mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/10 rounded-3xl"
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 180, 360],
            rotateZ: [0, 90, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl text-center mb-20 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-600 to-emerald-600" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative mb-16 ${
                  index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto md:text-left"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <motion.div
                    className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
                    whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? -5 : 5 }}
                  >
                    <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-2xl mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 border-4 border-white"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pakistan Focus Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, rotateY: -2 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1669553228878-bcacc4e49168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnZpcm9ubWVudGFsJTIwY29uc2VydmF0aW9uJTIwdHJlZXN8ZW58MXx8fHwxNzc0Mjg5Mjc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Environmental conservation"
                className="w-full h-96 object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Why Pakistan?
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                Pakistan faces unique environmental challenges but also holds incredible potential for sustainable transformation. With our growing industrial sector and young, energetic population, we can become a model for carbon reduction in developing nations.
              </p>
              <p className="text-xl text-gray-700 mb-6">
                Our local approach ensures solutions are culturally relevant, economically viable, and environmentally effective. We understand Pakistan's needs because we're Pakistani.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700">
                  <Sprout size={20} />
                  <span>Local Solutions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700">
                  <Sun size={20} />
                  <span>Clean Energy</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700">
                  <Heart size={20} />
                  <span>Community First</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="py-32 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            className="text-5xl md:text-6xl mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Join Our Mission
          </motion.h2>
          <motion.p
            className="text-2xl mb-12 text-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We're building a team of passionate individuals committed to Pakistan's sustainable future
          </motion.p>
          <motion.a
            href="mailto:careers@fiftypercent.carbon"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Explore Opportunities
          </motion.a>
        </div>

        {/* 3D animated shapes */}
        <motion.div
          className="absolute top-20 left-20 w-24 h-24 border-4 border-white/30 rounded-2xl"
          animate={{
            rotateX: [0, 360],
            rotateZ: [0, 180],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white/30 rounded-full"
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </section>
    </div>
  );
}
