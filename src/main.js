import { Lookup } from './lookup';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  let results = null;

  document.getElementById('symptom-search').addEventListener("click", function(){
    let searchTerm = document.getElementById('symptom-query').value;

    Lookup.searchBySymptom(searchTerm).then(function(symptomResponse){
      return symptomResponse.json();
    }).then(function(docBySymptom) {
      results = docBySymptom;
      if (results.meta.count > 0) {
        $(".results").html("<ul id='doctor-list'></ul>");
        results.data.forEach(function(doctor, index){
          $("#doctor-list").append(`
            <li class="list-group-item">
              <h2 style="font-style: italic;">
                ${doctor.profile.first_name}  ${doctor.profile.last_name}, ${doctor.profile.title}
              </h2>
            </li>`);
            $("#doctor-list").append(`<ul class="list-group list-group-flush" id='location-list${index}'></ul>`);
            doctor.practices.forEach(function(location){
              $(`#location-list${index}`).append(`
                <li class="list-group-item">
                <h4>${location.name}</h4>
                <p>${location.visit_address.street}</p>
                <p>${location.visit_address.city}, ${location.visit_address.state} ${location.visit_address.zip}</p>
                <p>${location.phones[0].number}</p></li>
              `);
              if (location.accepts_new_patients === true) {
                $(`#location-list${index}`).append(`<li class="list-group-item">Accepting new partients! </li> <br><br>`)
              }
              else {
                $(`#location-list${index}`).append(`<li class="list-group-item">Currently not accepting new partients.  </li><br><br>`)
              }
            });
        });
      }
      else {
        $('.results').html("<h3> Uh oh! No results for that search. Try something else! </h3>");
      }
    });
  });

  document.getElementById("name-search").addEventListener("click", function(){
    $(".results").html("");
    let searchTerm = document.getElementById('name-query').value;

    Lookup.searchByName(searchTerm).then(function(nameResponse){
      return nameResponse.json();
    }).then(function(docByName){
      results = docByName;
      if (results.meta.count > 0) {
        $(".results").html("<ul id='doctor-list'></ul>");
        results.data.forEach(function(doctor, index){
          $("#doctor-list").append(`
            <li class="list-group-item">
              <h2>
                ${doctor.profile.first_name}  ${doctor.profile.last_name}, ${doctor.profile.title}
              </h2>
            </li>`);
            $("#doctor-list").append(`<ul class="list-group list-group-flush" id='location-list${index}'></ul>`);
            doctor.practices.forEach(function(location){
              $(`#location-list${index}`).append(`
                <li class="list-group-item">
                <h4>${location.name}</h4>
                <p>${location.visit_address.street}</p>
                <p>${location.visit_address.city}, ${location.visit_address.state} ${location.visit_address.zip}</p>
                <p>${location.phones[0].number}</p></li>
              `);
              if (location.accepts_new_patients === true) {
                $(`#location-list${index}`).append(`<li class="list-group-item">Accepting new partients! </li> <br><br>`)
              }
              else {
                $(`#location-list${index}`).append(`<li class="list-group-item">Currently not accepting new partients.  </li><br><br>`)
              }
            });
        });
      }
      else {
        $('.results').html("<h3> Uh oh! No results for that search. Try something else! </h3>");
      }
    });
  });
});
