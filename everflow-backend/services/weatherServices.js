const getWeatherRisk=async(location)=>{
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}`
        );
        const data = await res.json();

        const weather= data.weather[0].main;

        let risk=0.2;
        if(weather==="Rain"||weather==="Storm"){
            risk=0.7
        }
        return{weather,risk};
    } catch (err) {
        return{weather:"Unknown",risk:0.3};
    }
};
module.exports={getWeatherRisk};