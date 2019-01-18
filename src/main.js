import { Lookup } from './lookup';
import $ from 'jquery';
import 'bootstrap';

$(document).ready(function(){
  // let doctorsBySymptom = Lookup.searchBySymptom("cough");
  // console.log("symptoms", doctorsBySymptom);

  let doctorsByName = Lookup.searchByName("smith");
  console.log("name", doctorsByName);
});
