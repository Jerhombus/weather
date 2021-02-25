
$(document).ready(function(){
    $("#form-submit").submit(function(event){
            weatherSearch(event);
            event.preventDefault(); 
        });
    });

function weatherSearch(event) {
    var request = $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: "GET",
        data: {
            q: $("#city").val(),
            appid: 'b5e21d8e54975d090069c0667cfd02d1',
        },
    });
    
    request.done(function(response){
        console.log(response);
        formatSearch(response);
    });
}

function formatSearch(jsonObject) {
    var city_name = jsonObject.name;
    var city_temp = jsonObject.main.temp;
    var city_min = jsonObject.main.temp_min;
    var city_max = jsonObject.main.temp_max;
    var city_weather = jsonObject.weather[0].description;
    var city_humid = jsonObject.main.humidity;

    
    $("#name").text('State: '+city_name);
    $("#temp").text('Current Temperature: ' + (Math.round(city_temp - 273.15) * 9/5 + 32) + "F");
    $("#max").text('Hi of the day: ' + (Math.round(city_max - 273.15) * 9/5 + 32) + "F");
    $("#min").text('Low of the day: ' + (Math.round(city_min - 273.15) * 9/5 + 32) + "F");
    $("#weather").text('Current Status: ' + city_weather);
    $("#humid").text('Humidity: ' + city_humid + '%');
  

}