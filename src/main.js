import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { galaxy } from './galaxy';


$(document).ready(function () {
    $("#age").submit(function (event) {
        event.preventDefault();
        let age = parseInt($("#userInput").val());
        let newAge = new galaxy(age);
        //Planet Age
        $("#mercuryAge").text(newAge.ConvertMercuryAge());
        $("#venusAge").text(newAge.ConvertVenusAge());
        $("#marsAge").text(newAge.ConvertMarsAge());
        $("#jupiterAge").text(newAge.ConvertJupiterAge());
        $("#saturnAge").text(newAge.ConvertSaturnAge());
        $("#uranusAge").text(newAge.ConvertUranusAge());
        $("#neptuneAge").text(newAge.ConvertNeptuneAge());
        $("#plutoAge").text(newAge.ConvertPlutoAge());

        //Planet LifeSpan Expentancy
        $("#mercuryLifespan").text(newAge.MercuryAgeLimit());
        $("#venusLifespan").text(newAge.VenusAgeLimit());
        $("#marsLifespan").text(newAge.MarsAgeLimit());
        $("#jupiterLifespan").text(newAge.JupiterAgeLimit());
        $("#saturnLifespan").text(newAge.SaturnAgeLimit());
        $("#uranusLifespan").text(newAge.UranusAgeLimit());
        $("#neptuneLifespan").text(newAge.NeptuneAgeLimit());
        $("#plutoLifespan").text(newAge.PlutoAgeLimit());


    });
});