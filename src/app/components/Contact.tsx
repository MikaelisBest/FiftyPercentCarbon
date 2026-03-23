import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      detail: "hello@fiftypercent.carbon",
      link: "mailto:hello@fiftypercent.carbon",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+92 21 3456 7890",
      link: "tel:+922134567890",
    },
    {
      icon: MapPin,
      title: "Head Office",
      detail: "Karachi, Pakistan",
      link: "https://maps.google.com",
    },
  ];

  const offices = [
    {
      city: "Karachi",
      region: "Sindh",
      status: "Headquarters",
    },
    {
      city: "Lahore",
      region: "Punjab",
      status: "Regional Office",
    },
    {
      city: "Islamabad",
      region: "Capital",
      status: "Regional Office",
    },
    { city: "Peshawar", region: "KPK", status: "Coming Soon" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"
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
              Let's Talk Carbon Reduction
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto">
              Start your journey to 50% carbon reduction. Our
              team in Pakistan is ready to help.
            </p>
          </motion.div>
        </div>

        {/* 3D Floating Elements */}
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-green-500/20 rounded-2xl"
          animate={{
            y: [0, -30, 0],
            rotateZ: [0, 180, 0],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Share your carbon reduction goals and we'll
                reach out within 24 hours
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-gray-700 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="Ahmed Khan"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-gray-700 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="ahmed@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="company"
                    className="block text-gray-700 mb-2"
                  >
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="Your Company Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-green-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="Tell us about your carbon reduction goals..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-600/30"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {isSubmitted ? (
                    "Message Sent! ✓"
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              <motion.div
                className="rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateY: 2 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1598979348399-d9812608afc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZvcmVzdCUyMG5hdHVyZSUyMHBha2lzdGFufGVufDF8fHx8MTc3NDI4OTI3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Green Pakistan"
                  className="w-full h-80 object-cover"
                />
              </motion.div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 hover:border-green-400 transition-colors group"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white flex-shrink-0"
                      whileHover={{ rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon size={24} />
                    </motion.div>
                    <div>
                      <h3 className="text-xl mb-1 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.detail}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-5xl md:text-6xl text-center mb-20 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Presence Across Pakistan
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="p-8 rounded-2xl bg-white shadow-lg text-center h-full"
                  whileHover={{
                    y: -10,
                    rotateY: 5,
                    scale: 1.05,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-white text-2xl font-bold"
                    whileHover={{ rotateY: 360 }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    whileInView={{
                      scale: [1, 1.1, 1],
                    }}
                    viewport={{ once: true }}
                  >
                    <MapPin size={32} />
                  </motion.div>
                  <h3 className="text-2xl mb-2 text-gray-900">
                    {office.city}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {office.region}
                  </p>
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm ${
                      office.status === "Headquarters"
                        ? "bg-green-100 text-green-700"
                        : office.status === "Coming Soon"
                          ? "bg-gray-100 text-gray-600"
                          : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {office.status}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Background elements */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-60 h-60 bg-emerald-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* FAQ Preview */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-5xl text-center mb-12 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Common Questions
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl mb-2 text-gray-900">
                How much does carbon reduction cost?
              </h3>
              <p className="text-gray-700">
                Our solutions are designed to be cost-neutral or
                cost-positive within 2-3 years through energy
                savings and efficiency gains. We offer flexible
                payment plans for Pakistani businesses.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl mb-2 text-gray-900">
                Can we really achieve 50% reduction?
              </h3>
              <p className="text-gray-700">
                Yes! Our clients in Pakistan have consistently
                achieved 40-55% carbon reduction within 18-24
                months using our proven methodologies and local
                expertise.
              </p>
            </motion.div>

            <motion.div
              className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl mb-2 text-gray-900">
                Do you work with small businesses?
              </h3>
              <p className="text-gray-700">
                Absolutely! We serve organizations of all sizes
                across Pakistan, from small local businesses to
                large industrial operations, with customized
                solutions for each.
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
            Let's Build a Greener Pakistan Together
          </motion.h2>
          <motion.p
            className="text-2xl mb-12 text-green-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a free carbon assessment and discover your
            reduction potential
          </motion.p>
          <motion.a
            href="mailto:hello@fiftypercent.carbon"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            Book Free Assessment
          </motion.a>
        </div>

        {/* 3D animated shapes */}
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border-4 border-white/30 rounded-2xl"
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
          className="absolute bottom-10 right-10 w-32 h-32 border-4 border-white/30 rounded-full"
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
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 border-4 border-white/30"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          animate={{
            rotateZ: [0, 360],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </section>
    </div>
  );
}