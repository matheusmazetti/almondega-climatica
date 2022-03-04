function errorCallback(PositionError){
    
    let locationName = prompt("Digite o nome da cidade:");
    return locationName;

}
navigator.geolocation.getCurrentPosition(sucess, errorCallback);

function getWeather(position){
    let promisse = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=pt_br&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    promisse.then(weatherSucess);
    promisse.catch(weatherError);
}

function sucess(position){
   
    getWeather(position);
}

function weatherError(errorCode){

}

function weatherSucess(weatherCondition){
    console.log(weatherCondition);
    let weatherDisplay = document.querySelector("main")
    weatherDisplay.innerHTML = `
    <div>
    <h1>${weatherCondition.data.main.temp} ºC</h1>
    <h2>${weatherCondition.data.weather[0].description}</h2>
    <h3>${weatherCondition.data.name}<h3>
    <img src="imagem.jpg" alt="Minha Figura">
    </div>
    `



    
}