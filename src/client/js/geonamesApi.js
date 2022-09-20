const fetch = require('node-fetch')

/* Function to GET Web API Data from Geonames*/
export const getDataGeonames = async (tripData, cityInput )=>{
    const res = await fetch(`http://api.geonames.org/searchJSON?q=${cityInput}&maxRows=10&username=nhuphan`);
    try{
        const data = await res.json();
        
        tripData.countryName = data.geonames[0].countryName;
        tripData.cityName = data.geonames[0].name;
        tripData.lat = data.geonames[0].lat;
        tripData.lng = data.geonames[0].lng;

        document.getElementById('msg-city').textContent = ''
        return tripData;
    }catch(error){
        console.log('error', error);
        document.getElementById('msg-city').textContent = '** Please enter valid city name! **'
    }
}