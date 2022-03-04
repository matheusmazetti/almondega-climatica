let positionName = null
function sucess(position){
    console.log(position);
    return position;
}
function errorCallback(PositionError){
    console.log(PositionError);
    positionName = prompt("Digite o nome da cidade:");
}
navigator.geolocation.getCurrentPosition(sucess, errorCallback);

function getWeather(){
    let promisse = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    promisse.then(weatherSucess);
    promisse.catch(weatherError);
}

function weatherError(errorCode){
    
}