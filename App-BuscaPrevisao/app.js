const key = "65fdf6c6dc8f912d09375d872a7da4cc";

function DadosTela(dados){
    console.log(dados);
    document.querySelector(".titulo-cidade").innerHTML = "Tempo em" + dados.name;
    document.querySelector(".graus").innerHTML = Math.floor(dados.main.temp) + " °C";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector(".previsao-texto").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade Relativa do ar: " + dados.main.humidity + "%";
}

async function BuscarDados(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json()) ;
    DadosTela(dados);
}

function CliqueBotao(){
    const cidade = document.querySelector(".input-cidade").value
    BuscarDados(cidade)
}

