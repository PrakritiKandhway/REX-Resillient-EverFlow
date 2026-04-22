import { motion } from "framer-motion";

const StatCard = ({ title, value, change, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative p-[1px] rounded-xl bg-gradient-to-r from-blue-500/40 to-purple-500/40"
    >
      {/* INNER CARD */}
      <div className="rounded-xl bg-black/80 backdrop-blur-xl p-5 h-full">

        <p className="text-sm text-gray-400 mb-2">{title}</p>

        <h2 className="text-2xl font-bold text-white mb-1">
          {value}
        </h2>

        <span className={`text-xs ${color}`}>
          {change}
        </span>

      </div>
    </motion.div>
  );
};

export default StatCard;
