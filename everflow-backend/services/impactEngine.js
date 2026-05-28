// It calculates the financial impact of a delay in fulfilling demand based on the demand quantity, delay duration, and profit per unit. The function takes three parameters: demand (the quantity of goods or services), delayDays (the number of days the fulfillment is delayed), and profitPerUnit (the profit earned for each unit sold). It returns an object containing the estimated loss due to the delay.

const calculateImpact=(demand,delayDays,profitPerUnit)=>{
    const loss=demand*delayDays*profitPerUnit;

    return{
        estimatedLoss:loss
    };
};
module.exports={calculateImpact};