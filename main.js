
const key = 'e0283766cee7e7e70be7e75409ae8042'

function Pesquisar() {
    let cidade = document.querySelector('.input-cidade').value
    console.log(cidade)
    Dados(cidade)
}

async function Dados(cidade){
let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response =>Response.json())
console.log(dados)
Exibirdados(dados)
}

function Exibirdados(dados){
    document.querySelector('.cidade').innerHTML ="Tempo em " +  dados.name
    document .querySelector('.graus').innerHTML = Math.floor(dados.main.temp) + " °c"
    document .querySelector('.previsao') .innerHTML = dados.weather[0].description
    document .querySelector('.umidade').innerHTML = dados.main.humidity + "%"
    document .querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}