export const countDown = (tripData)=>{
    const currentDate = new Date();
    const startDate = new Date(tripData.dateStart);
    const endDate = new Date(tripData.dateEnd);
    let remaingDays = 0;

    if(currentDate.getDate() === startDate.getDate() & currentDate.getMonth() === startDate.getMonth() &  currentDate.getFullYear() === startDate.getFullYear()){
        remaingDays = 0;
    }else{
        remaingDays = Math.round((startDate.getTime() - currentDate.getTime())/ (1000 * 3600 * 24));
    }
    const tripLength = Math.round((endDate.getTime() - startDate.getTime())/ (1000 * 3600 * 24))+1;
    tripData.remaingDays = remaingDays;
    tripData.tripLength = tripLength;

    return tripData;
}

export const inputValidation = (tripData)=>{
    if (tripData.remaingDays <0){
        document.getElementById('msg-date-start').textContent = '** Trip start date can not be in the past! **'
    }else{
        document.getElementById('msg-date-start').textContent = ''
    }
    if (tripData.tripLength <0){
        document.getElementById('msg-date-end').textContent = '** Trip must end on or after start date! **'
    }
    else{
        document.getElementById('msg-date-end').textContent = ''
    }
    // Weather forecast from Weatherbit is only available for 16 days
    if (tripData.remaingDays > 15 ){
       alert("Weather forecast is only available 15 days before your trip starts!")
    }
    return tripData;
}
    