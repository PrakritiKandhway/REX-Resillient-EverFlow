const checkRisk=(order,inventory,supplier)=>{
    let risks=[];
    if(order.status === "delayed"){
        risks.push({
            type:"delay",
            severity:"high",
            message:"Order is delayed"
        });
    }
    if (inventory && inventory.stock<inventory.threshold){
        risks.push({
            type:"low_stock",
            severity:"medium",
            message:"Stock is low"
        });
    }
    if(supplier && supplier.reliabilityScore<50){
        risks.push({
        type: "supplier_risk",
        severity: "high",
        message: "Supplier is unreliable"
        });
    }
    return risks;
};
const suggestSupplier=(suppliers)=>{
    return suppliers
    .filter(s=>s.available)
    .sort((a,b)=>b.reliabilityScore-a.reliabilityScore)[0];
};
module.exports={checkRisk,suggestSupplier}

alertroutes
