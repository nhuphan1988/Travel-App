// function to add data to object TripData
exports.addTripData = (req, res)=>{
    // Setup empty JS object to act as endpoint for all routes
    let tripData = {};

    let newEntry = {
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        remaingDays: req.body.remaingDays,
        tripLength: req.body.tripLength,
        cityName: req.body.cityName,
        countryName : req.body.countryName,
        lat : req.body.lat,
        lng : req.body.lng,
        temp: req.body.temp,
        highTemp: req.body.highTemp,
        lowTemp: req.body.lowTemp,
        weather : req.body.weather,
        photoURL : req.body.photoURL
    }
    tripData = newEntry;
    console.log(tripData);
}

// function to get Api Key
exports.getApiKey = (req, res)=> {
    const apiKey = {
        apiKeyPixabay: process.env.apiKeyPixabay,
        apiKeyWeatherbit: process.env.apiKeyWeatherbit
    };
    res.send(apiKey)};

//function to get TripData
exports.getTripData = (req, res)=> res.send(tripData);