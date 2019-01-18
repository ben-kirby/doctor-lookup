import { Lookup } from './lookup';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let results = null;
  document.getElementById('symptom-search').addEventListener("click", function(){
    let searchTerm = document.getElementById('symptom-query').value;
    console.log(searchTerm);

    Lookup.searchBySymptom(searchTerm).then(function(symptomResponse){
      return symptomResponse.json();
    }).then(function(docBySymptom) {
      results = docBySymptom;
    }).then(function() {
      console.log(results);

    });
  });

  // document.getElementById("name-search").addEventListener("click", function(){
  //   let searchTerm = document.getElementById('name-query');
  //   results = Lookup.searchByName(searchTerm);
  // });
  //
  // let displayResults = function(results){
  //
  // }

});
