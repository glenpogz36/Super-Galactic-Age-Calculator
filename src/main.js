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

        $("#mercuryAge").text(newAge.ConvertMercuryAge());
        $("#marsAge").text(newAge.ConvertMarsAge());
        $("#venusAge").text(newAge.ConvertVenusAge());
        $("#jupiterAge").text(newAge.ConvertJupiterAge());
        $("#jupiterLifespan").text(newAge.JupiterAgeLimit());
        $("#marsLifespan").text(newAge.MarsAgeLimit());
        $("#venusLifespan").text(newAge.VenusAgeLimit());
        $("#mercuryLifespan").text(newAge.MercuryAgeLimit());


    });
});