function calcPontos(victory, defeat){

    let saldVictory = victory - defeat;
    return saldVictory;

}

let qtdVictory = 100;
let qtdDefeat = 10;
let rankHeroi = ['Ferro', 'Bronze', 'Prata', 'Ouro', 'Diamante', 'Lendário', 'Imortal']
let i = 0;

let saldVictory = calcPontos (qtdVictory, qtdDefeat);
console.log("Seu saldo de pontos é " + saldVictory);

do {

    if(saldVictory <= 10){

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[0])
        saldVictory++
        i++;

    }
    else if (saldVictory <= 20 ){

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[1])
        saldVictory++
        i++;

    }
    else if (saldVictory <= 50 ){

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[2])
        saldVictory++
        i++;

    }
    else if (saldVictory <= 80 ){

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[3])
        saldVictory++
        i++;

    }
    else if (saldVictory <= 90 ){

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[4])
        saldVictory++
        i++;

    }
    else if (saldVictory <= 100 ){

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[5])
        saldVictory++
        i++;

    }
    else {

        console.log("O Heró tem um saldo de " + saldVictory + ", está no nível de " + rankHeroi[6])
        saldVictory++
        i++;

    }


} while ( i <= 2)