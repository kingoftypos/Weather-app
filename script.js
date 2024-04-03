const apiKey="2a27152e6f687aaa52ef3c0690b03f8fd";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=city=Germany";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    let data= await response.json();
    console.log(data);
}
checkWeather();