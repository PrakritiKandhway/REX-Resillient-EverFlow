import { motion } from "framer-motion";

const steps = [
  {
    title: "Predict",
    desc: "AI forecasts potential disruptions using historical & live data",
  },
  {
    title: "Detect",
    desc: "Monitors supply chain signals in real-time",
  },
  {
    title: "Alert",
    desc: "Instant notifications when risks are identified",
  },
  {
    title: "Act",
    desc: "Automated response triggers backup workflows",
  },
  {
    title: "Prevent Loss",
    desc: "Ensures business continuity and reduces downtime",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-28 px-6 md:px-16 relative">

      {/* SECTION TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
        AI-Powered Workflow
      </h2>

      {/* FLOW CONTAINER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative flex flex-col items-center text-center"
          >

            {/* CIRCLE */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {index + 1}
            </div>

            {/* TITLE */}
            <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>

            {/* DESC */}
            <p className="text-blue-200/80 text-sm mt-2 max-w-[200px]">
              {step.desc}
            </p>

            {/* LINE CONNECTOR (DESKTOP ONLY) */}
            {index !== steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-full w-24 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"></div>
            )}
          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default WorkflowSection;