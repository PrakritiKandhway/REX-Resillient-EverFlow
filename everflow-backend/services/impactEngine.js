const calculateImpact=(demand,delayDays,profitPerUnit)=>{
    const loss=demand*delayDays*profitPerUnit;

    return{
        estimatedLoss:loss
    };
};
module.exports={calculateImpact};