// Import the js file to test
import { getDataGeonames } from "../src/client/js/geonamesApi"
  
describe("Testing the Geonames API", () => {
      
    test("Testing the getDataGeonames() function", () => {
        const mElement = { textContent: '** Please enter valid city name! **' };
        document.getElementById = jest.fn().mockReturnValueOnce(mElement);
        
        const tripData = {}
        const cityInput = 'paris'
        
        const output = {
            "cityName": "Paris",
            "countryName": "France",
            "lat": "48.85341",
            "lng": "2.3488",
            }

        return getDataGeonames(tripData, cityInput).then(data => expect (data).toEqual(output));
    })});