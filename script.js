let positionName = null
let temperature = null;
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
    console.log(promisse);
    promisse.then(weatherSucess);
    promisse.catch(weatherError);
}

function weatherError(errorCode){
    
}

function changeColor(){
    if(temperature > 10){
        color = '0, 187, 255';
    }
    if(temperature > 20){
        color = '255, 162, 0';
    }
    if(temperature > 30){
        color = '255, 255, 0';
    }
    if(temperature > 40){
        color = '255, 0, 0';
    }
}

function changeBackground(){
    let background = document.querySelector('body');
    background.style.backgroundColor = color;
}
function reload(){
    document.location.reload(true);
}