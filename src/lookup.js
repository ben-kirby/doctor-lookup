class Lookup {
  static searchBySymptom(symptom){
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.USER_KEY}&query=${symptom}&location=or-portland`).then(function(response){
      return response.json()
    })
  }
}
export { Lookup }
