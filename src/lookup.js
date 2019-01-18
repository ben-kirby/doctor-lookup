import $ from 'jquery';

class Lookup {

  static searchBySymptom(symptom){
    // $.ajax({
    //   url: `https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.USER_KEY}&query=${symptom}&location=or-portland`,
    //   type: 'GET',
    //   data: {
    //     format: 'json'
    //   },
    //   success: function(response) {
    //     return response;
    //   },
    //   error: function(error) {
    //     return new Error(error.statusText)
    //   }
    // });
    //
    // .then(function(response){
    //   if (!response.ok) {
    //     throw Error(response.statusText)
    //   }
    //   return response;
    // }).then(function(response){
    //   return response;
    // }).catch(function(error){
    //   return error;
    // })



    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.USER_KEY}&query=${symptom}&location=or-portland`)
  }

  static searchByName(name){
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.USER_KEY}&name=${name}&location=or-portland`)
  }
}

export { Lookup }
