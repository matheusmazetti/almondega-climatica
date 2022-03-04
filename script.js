let positionName = null
function sucess(position){
    console.log(position);
}
function errorCallback(PositionError){
    console.log(PositionError);
    positionName = prompt("Digite o nome da cidade:");
}
navigator.geolocation.getCurrentPosition(sucess, errorCallback);

