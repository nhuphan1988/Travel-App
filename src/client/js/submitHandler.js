export function init (){
    // Event listener to add function to existing HTML DOM element
    document.getElementById('save').addEventListener('click', dataAction);
    
    /* Function called by event listener */
    function dataAction(){
        // get user input after event 'click'
        const cityInput = document.getElementById('city').value;
        const dateStart = document.getElementById('date-start').value;
        const dateEnd = document.getElementById('date-end').value;
        
        // Setup empty object to hold all trip data
        const tripData = {}; 
        tripData.dateStart = dateStart;
        tripData.dateEnd = dateEnd;
         
        constructData(tripData, cityInput)
    }
}

// construct all functions into one async function to execute in order
export const constructData = async (tripData, cityInput)=>{
    try{
        const resultCountDown = await Client.countDown(tripData);
        const validInput = await Client.inputValidation(resultCountDown);
        const resultGeonames = await Client.getDataGeonames(validInput, cityInput);
        const keyWeatherbit = await Client.getApiKeyWeatherbit();
        const resultWeatherbit = await Client.fetchDataWeatherbit(resultGeonames,keyWeatherbit );
        const keyPixabay = await Client.getApiKeyPixabay();
        const resultPixabay = await Client.fetchDataPixabay (resultWeatherbit, keyPixabay);
        const updatedUI = await Client.updateUI(resultPixabay);
        const postedData = await Client.postData('/addTrip', resultPixabay)
        
    }catch(error){
        console.log('error', error);
    }
}