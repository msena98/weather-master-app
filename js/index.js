import _ from 'env'

var search = document.getElementById("search-button");
var city   = document.getElementById("search-input");

search.onclick = function () {
    var city   = city.value;
    fetch('http://dataservice.accuweather.com/locations/v1/cities/search?apikey=' + apikey + '&q=' + city)
        .then((response) => response.json())
        .then((data) => console.log(data));
};
