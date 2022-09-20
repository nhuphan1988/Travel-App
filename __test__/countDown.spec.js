// Import the js file to test
import { countDown } from "../src/client/js/countDown"
  
describe("Testing the countdown functionality", () => {
      
    test("Testing the countDown() function", () => {
        const d = new Date();

        const dateStart = new Date(d).setDate(d.getDate() + 2);
        const dateEnd = new Date(d).setDate(d.getDate() + 5);

        const input = {
            "dateStart": dateStart,
            "dateEnd": dateEnd,   
            }

        const output = {
            "dateStart": dateStart,
            "dateEnd": dateEnd,
            "remaingDays": 2,
            "tripLength": 4
            }
  
        expect (countDown(input)).toEqual(output);
    })});