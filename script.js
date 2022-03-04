let positionName = null
function sucess(position){
    console.log(position);
    return position;
}

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
    let temperature = weatherCondition.data.main.temp;
    console.log(temperature)
    changeColor(temperature);
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