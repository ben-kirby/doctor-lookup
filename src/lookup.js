class Lookup {

  static searchBySymptom(symptom){
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${exports.apiKey}&query=${symptom}&location=or-portland`)
  }

  static searchByName(name){
    return fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${exports.apiKey}&name=${name}&location=or-portland`)
  }
}

export { Lookup }
