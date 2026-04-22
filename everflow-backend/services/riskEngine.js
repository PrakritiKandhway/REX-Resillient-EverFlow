const calculateRisk = (supplier, weatherRisk) => {
  const reliabilityFactor = (1 - supplier.reliabilityScore) * 0.5;
  const delayFactor = (supplier.avgDelayDays / 10) * 0.2;

  const totalRisk =
    reliabilityFactor +
    weatherRisk * 0.3 +
    delayFactor;

  let level = "Low";
  if (totalRisk > 0.7) level = "High";
  else if (totalRisk > 0.4) level = "Medium";

  return {
    riskScore: Number(totalRisk.toFixed(2)),
    riskLevel: level
  };
};

module.exports = { calculateRisk };