
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '893bc1922fmsh2ba993fc77e4508p13d4d9jsnb878267f610d',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// async function main(){
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }
// main();









// const cloud_pct = document.getElementById("cloud_pct");
const temp = document.getElementById("temp");
const temp1 = document.getElementById("temp1");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const humidity1 = document.getElementById("humidity1");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_speed1 = document.getElementById("wind_speed1");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");



const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '893bc1922fmsh2ba993fc77e4508p13d4d9jsnb878267f610d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city
async function main() {
	try {
		
		const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options);
		const data = await response.text();
		const result = JSON.parse(data);
		console.log(result)
		
		console.log(result.cloud_pct);
		// cloud_pct.innerHTML = result.cloud_pct
		temp.innerHTML = result.temp
		temp1.innerHTML = result.temp
		feels_like.innerHTML = result.feels_like
		humidity.innerHTML = result.humidity
		humidity1.innerHTML = result.humidity
		min_temp.innerHTML = result.min_temp
		max_temp.innerHTML = result.max_temp
		wind_speed.innerHTML = result.wind_speed
		wind_speed1.innerHTML = result.wind_speed
		wind_degrees.innerHTML = result.wind_degrees
		sunrise.innerHTML = result.sunrise
		sunset.innerHTML = result.sunset
	} catch (error) {
		console.error(error);
	}

}

main();
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
}) 

getWeather("Delhi")