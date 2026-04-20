import { motion } from "framer-motion";

const features = [
  {
    title: "Predict Disruptions",
    desc: "AI forecasts supply chain failures before they occur.",
  },
  {
    title: "Real-Time Monitoring",
    desc: "Track every node in your supply chain live.",
  },
  {
    title: "Smart Alerts",
    desc: "Get notified instantly when risks are detected.",
  },
  {
    title: "Automated Actions",
    desc: "Trigger backup plans without manual intervention.",
  },
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-16">

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
        How REX Works
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative group"
          >

            {/* 🔥 Animated Border */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-borderMove opacity-70 group-hover:opacity-100"></div>

            {/* CARD */}
            <div className="relative p-8 rounded-2xl glass border border-white/10 bg-black/30 backdrop-blur-xl group-hover:scale-105 transition duration-300">

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {f.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-300">
                {f.desc}
              </p>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default FeatureSection;