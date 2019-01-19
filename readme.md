# Doctor Lookup
This is a simple tool that will let you look up doctors in the Portland area either by name or by symptom.
## Features
- Enter a symptom (e.g., cough or fatigue) and it will generate a list of doctors that have specialties related to those symptoms.
- Enter a name (e.g., Ben or Smith) and it will generate a list of doctors with that name.
- Included in results are all clinics that the doctor works at along with address, phone number, and whether or not they are accepting new patients.
## Tech
* JS
* HTML
* CSS
* Webpack
* BetterDoctor API
## Installation
1. In terminal clone repository from github.
 ```git clone https://github.com/ben-kirby/doctor-lookup.git```
2. Navigate to project folder and install dependencies.
```npm install```
3. Start the local server and vavigate to _localhost:8080_ in your browser.
```npm start```
## Usage
1. Enter a name or symptom into their respective forms and submit. Assuming my API key hasn't maxed out, you'll get a list of 10 doctors matching your criteria.
## Known Issues
- No error handling. If there is an error, the browser will not do anything to let you know.
## What's Next?
- Implement error handling.
- Improve UI.
- Add mapping function to show where the offices are.
## License
*Copyright (c) 2019 Ben Kirby*
*This software is licensed under the MIT license.*
