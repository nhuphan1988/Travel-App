const fetch = require('node-fetch')

/* Function to GET Web API Data from Weatherbit*/
export const fetchDataWeatherbit = async (tripData, apiKeyWeatherbit )=>{
    const lat = tripData.lat;
    const lng = tripData.lng;
    const res = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${apiKeyWeatherbit}`);
    try{
        const data = await res.json();
        for (let i =0; i < data.data.length; i++){
            if (data.data[i].datetime === tripData.dateStart){ //to get weather forecast of the trip start date
                tripData.temp = data.data[i].temp;
                tripData.highTemp = data.data[i].high_temp;
                tripData.lowTemp = data.data[i].low_temp;
                tripData.weather = data.data[i].weather.description; 
            } 
        } 
        return tripData;
    }catch(error){
        console.log('error', error);
    }
}

/* Function to GET API Key from Server*/
export const getApiKeyWeatherbit = async ()=>{
    const request = await fetch('/apiKey');
    try {
        // Transform into JSON
        const data = await request.json();
        const apiKeyWeatherbit = data.apiKeyWeatherbit;
        return apiKeyWeatherbit;
    }catch(error){
        console.log('error', error);
    }
}
