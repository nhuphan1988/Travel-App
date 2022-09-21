# Weather-Journal App Project

# Project Description
- Setting up Webpack
- Install babel
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- Using Jest for testing

## How-to run the app
- App is running on port 3000
- To run production mode: npm run build-prod
- To run development mode: npm run build-dev
- To start the app: 
    + npm run start
    + input city name, start date and end date, then submit and wait for the result
    + request to be sent to these webpages:
        - http://api.geonames.org/ (to get lat and lng data based on city input by user)
        - https://api.weatherbit.io/v2.0/forecast/ (to get 16 days weather forecast based on lat and lng)
        - https://pixabay.com/api/ (to get image of city input by user)

- To test: npm run test 

## Dependencies
- "babel-jest": "^29.0.3",
- "dotenv": "^16.0.1",
- "express": "^4.18.1",
- "jest-fetch-mock": "^3.0.3",
- "node-fetch": "^2.6.7",
- "ts-jest": "^29.0.1",
- "webpack": "^4.46.0",
- "webpack-cli": "^3.3.5"

- "@babel/core": "^7.18.13",
- "@babel/preset-env": "^7.18.10",
- "babel-loader": "^8.2.5",
- "clean-webpack-plugin": "^3.0.0",
- "cors": "^2.8.5",
- "css-loader": "^3.6.0",
- "dotenv": "^16.0.2",
- "form-data": "^4.0.0",
- "html-webpack-plugin": "^3.2.0",
- "http": "^0.0.1-security",
- "jest": "^29.0.3",
- "jest-environment-jsdom": "^29.0.1",
- "mini-css-extract-plugin": "^1.6.2",
- "node-sass": "^7.0.1",
- "optimize-css-assets-webpack-plugin": "^5.0.8",
- "sass-loader": "^10.3.1",
- "style-loader": "^2.0.0",
- "supertest": "^6.2.4",
- "terser-webpack-plugin": "^1.4.5",
- "url-loader": "^4.1.1",
- "webpack-dev-server": "^3.7.2",
- "workbox-webpack-plugin": "^6.5.4"


