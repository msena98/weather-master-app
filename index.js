require('dotenv').config();

const apikey = process.env.API_KEY;
var search = document.getElementById("search-button");
var city   = document.getElementById("search-input");




search.onclick = (city, apikey) => {
    city = city.value;
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${city}`)
        .then((response) => response.json())
        .catch(error => {
            console.log(error); 
          })
        .then((data) => console.log(data));
};
