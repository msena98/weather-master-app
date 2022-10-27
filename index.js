require('dotenv').config();

const apikey = process.env.API_KEY;
var search = document.getElementById("search-button");
var city   = document.getElementById("search-input");




search.onclick = function () {
    city   = city.value;
    fetch('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + apikey + '&q=' + city)
        .then((response) => response.json())
        .then((data) => console.log(data));
};
