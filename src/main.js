import { Lookup } from './lookup';
import $ from 'jquery';

$(document).ready(function(){
  let doctors = Lookup.searchBySymptom("cough");
  console.log(doctors);
});
