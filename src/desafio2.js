let resultado = calculoRankeadas(100,68)

function calculoRankeadas(vitorias, derrotas){
    let calculo = vitorias - derrotas
    let rank
    if(calculo <= 10){
        rank = "FERRO"
    }else if(calculo > 10 && calculo <= 20){
        rank = "BRONZE"
    }else if(calculo > 20 && calculo <= 50){
        rank = "PRATA"
    }else if(calculo > 50 && calculo <= 80){
        rank = "OURO"
    }else if(calculo > 80 && calculo <= 90){
        rank = "DIAMANTE"
    }else if(calculo > 90 && calculo <= 100){
        rank = "LENDÁRIO"
    }else{
        rank = "IMORTAL"
    }
    console.log("o Hério tem de saldo " + calculo + " está no nível de " + rank)
    return calculo
}