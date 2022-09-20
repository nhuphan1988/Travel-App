/* Function to update UI */
export const updateUI = async (allData)=>{
    try {
        // Write updated data to DOM elements when remaining days is more than 0 (trip starts on or after today)
        if (allData.remaingDays >= 0 & allData.remaingDays !== null){
            updateTripInfo(allData)
            updateWeather(allData)
            updateTripLength(allData)
        }
    }catch(error){
        console.log('error', error)
    }
}

const updateTripLength = (allData)=>{
    const lengthOfTrip = document.getElementById('trip-length')

    // Write updated data to DOM elements when trip length is more than 0 (trip ends on or after start date)
    if (allData.tripLength>=0 & allData.tripLength !== null){
        lengthOfTrip.innerHTML = `Total trip length is: ${allData.tripLength} day(s)`;
    }else{
        lengthOfTrip.innerHTML = `Total trip length is unknown`;
    }
}

const updateWeather = (allData)=>{
    const typicalWeather = document.getElementById('typical-weather')
    const tempOutput = document.getElementById('temp-output')
    const weatherOutput = document.getElementById('weather-output')

    // Write updated data to DOM elements when weather forecast is available
    if (allData.remaingDays < 16){
        typicalWeather.innerHTML = 'Typical weather for then is:';
        tempOutput.innerHTML = `Temp ${allData.temp} High ${allData.highTemp} Low ${allData.lowTemp} degrees Celcius`; 
        weatherOutput.innerHTML = `${allData.weather}`;
    }else{
        typicalWeather.innerHTML = 'Forecast weather for then is unavailable';
        tempOutput.innerHTML = ''; 
        weatherOutput.innerHTML = '';
    }
}

const updateTripInfo = (allData)=>{
    const photoOutput = document.getElementById('photo-output')
    const locationOutput = document.getElementById('location-output')
    const dateOutput = document.getElementById('date-output')
    const daysAway = document.getElementById('days-away')

    photoOutput.setAttribute('src', `${allData.photoURL}`);
    photoOutput.setAttribute('alt', `${allData.cityName}`);
        
    locationOutput.innerHTML = `My trip to: ${allData.cityName}, ${allData.countryName}`;
    dateOutput.innerHTML = `Departing: ${allData.dateStart}`;
    daysAway.innerHTML = `${allData.cityName}, ${allData.countryName} is ${allData.remaingDays} days away`;
}