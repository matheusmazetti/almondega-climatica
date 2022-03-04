function errorCallback(PositionError){
    console.log(PositionError);
    let locationName = prompt("Digite o nome da cidade:");
    return locationName;

}
navigator.geolocation.getCurrentPosition(sucess, errorCallback);

function getWeather(position){
    let promisse = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    promisse.then(weatherSucess);
    promisse.catch(weatherError);
}

function sucess(position){
    console.log(position);
    getWeather(position);
}

function weatherError(errorCode){
    console.log(errorCode);
}

function weatherSucess(weatherCondition){
    console.log(weatherCondition);
}