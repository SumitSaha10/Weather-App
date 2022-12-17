const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '144d625ec4msh54db180c222fa02p182692jsnd8c97d52c9ca',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)
		

		feels_like.innerHTML = response.feels_like;
		humidity.innerHTML = response.humidity;
		temp.innerHTML = response.temp;
		wind_degrees.innerHTML = response.wind_degrees;
		wind_speed.innerHTML = response.wind_speed;
		temp2.innerHTML = response.temp;
		humidity2.innerHTML = response.humidity;
		wind_speed2.innerHTML = response.wind_speed;
	}
	)
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");