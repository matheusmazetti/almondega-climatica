let positionName = null
function sucess(position){
    console.log(position);
    return position;
}

function errorCallback(PositionError){
    
    let locationName = prompt("Digite o nome da cidade:");
    getCoordinates(locationName);
    
}
navigator.geolocation.getCurrentPosition(sucess, errorCallback);

function getCoordinates(locationName){
    let promisse = axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${locationName}&limit=1&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    promisse.then(locationCoords);
    promisse.catch(locationError);
}

function locationCoords(coords){
    console.log(coords);
    getWeatherByLocation(coords);
}

function locationError(erro){
    console.log(erro);
}

function getWeather(position){
    let promisse = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=pt_br&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    
    promisse.then(weatherSucess);
    promisse.catch(weatherError);
}

function getWeatherByLocation(coords){
    let promisse = axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${coords.data[0].lat}&lon=${coords.data[0].lon}&units=metric&lang=pt_br&appid=f25110b0f83adb9f7c080ee182cd1d00`);
    promisse.then(weatherSucess);
    promisse.catch(weatherError);
}

function sucess(position){
   getWeather(position);
}

function weatherError(errorCode){
    console.log(errorCode);
}

function weatherSucess(weatherCondition){
    console.log(weatherCondition);
    let temperature = weatherCondition.data.main.temp;
    console.log(temperature)
    changeColor(temperature);
    let weatherDisplay = document.querySelector("main")
    weatherDisplay.innerHTML = `
    <div class="display">
    <h1>${weatherCondition.data.main.temp} ºC</h1>
    <img src="http://openweathermap.org/img/wn/${weatherCondition.data.weather[0].icon}@4x.png" alt="clima">
    <h2>${weatherCondition.data.weather[0].description}</h2>
    <h3>${weatherCondition.data.name}<h3>
    
    </div>
    `
}

function changeColor(temperature){
    if(temperature > 10){
        color = '0, 187, 255';
    }
    if(temperature > 20){
        color = '0, 162, 0';
    }
    if(temperature > 30){
        color = '255, 255, 0';
    }
    if(temperature > 40){
        color = '255, 0, 0';
    }
    changeBackground(color)
}

function changeBackground(color){
    let background = document.querySelector('body');
    console.log(background);
    background.style.backgroundColor = `${color}`;
}
function reload(){
    window.location.reload();
}