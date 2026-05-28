// This file contains two functions: getRecomendations (it recommends actions based on risk level and delay days) and suggestSupplier (it suggests the most reliable available supplier based on reliability score).

const getRecomendations=(riskLevel,delayDays)=>{
    let recs=[];
    if(riskLevel==="High"){
        recs.push("Switch to backup supplier");
    }
    if(delayDays>2){
        recs.push("Increase inventory buffer");
    }
    return recs;
};

const suggestSupplier=(suppliers)=>{
    return suppliers
    .filter(s=>s.available)
    .sort((a,b)=>b.reliabilityScore-a.reliabilityScore)[0];
};

module.exports={getRecomendations,suggestSupplier};