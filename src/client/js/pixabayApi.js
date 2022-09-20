/* Function to GET Web API Data from Pixabay*/
export const fetchDataPixabay = async (tripData, apiKeyPixabay)=>{
    const cityName = tripData.cityName;
    const res = await fetch(`https://pixabay.com/api/?key=${apiKeyPixabay}&q=${cityName}&image_type=photo`);
    try{
        const data = await res.json();
        if (data.hits.length>0){
            let i = Math.floor(Math.random() * data.hits.length); //get random image from the list
            tripData.photoURL = data.hits[i].webformatURL;
        }else{
            tripData.photoURL = Client.myImage; //when the entered location brings up no results, choose an image from media folder
        }
        return tripData;
    }catch(error){
        console.log('error', error);
    }
}

/* Function to GET API Key from Server*/
export const getApiKeyPixabay = async ()=>{
    const request = await fetch('/apiKey');
    try {
        // Transform into JSON
        const data = await request.json();
        const apiKeyPixabay = data.apiKeyPixabay;
        return apiKeyPixabay;
    }catch(error){
        console.log('error', error);
    }
}

