const apiKey="23ca7b83d11c29556338bf640042c100";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=city=Germany";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    let data= await response.json();
    console.log(data);
}
checkWeather();