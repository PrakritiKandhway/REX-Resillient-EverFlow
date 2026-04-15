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
            className="p-8 rounded-2xl glass border border-white/10 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-400">{f.desc}</p>
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default FeatureSection;