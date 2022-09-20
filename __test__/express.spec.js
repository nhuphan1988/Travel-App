// Import the js file to test
import {getApiKey} from "../src/server/handler"
  
describe("Testing express server", () => { 
    test("Testing the getApiKey() function", () => {
        const apiKey = {
            apiKeyPixabay: process.env.apiKeyPixabay,
            apiKeyWeatherbit: process.env.apiKeyWeatherbit
        }; 
        const req = {};
        const res = {
            send: function (input) {this.apiKey = input}
        };
        getApiKey (req, res)
            
        expect(res.apiKey).toEqual (apiKey)
    })});