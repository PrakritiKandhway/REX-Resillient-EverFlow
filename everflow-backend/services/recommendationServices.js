const getRecomendations=(riskLevel,delayDays)=>{
    let recs=[];
    if(riskLevel==="High"){
        recs.push("Switch to backup supplier");
    }
    if(delayDays>2){
        recs.push("Increase inventory buffer");
    }
    return;
};
module.exports={getRecomendations};