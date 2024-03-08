// Desenvolva um algoritmo que valide a idade da pessoa conforme as
// leis brasileiras de voptação, retornando
// uma mensagem com asa condições

//1. Não possui idade para votar
//2. Voto facultativo
//3. Voto obrigatório

// const idade = ?; 

const age = 21;
 
if (age < 16){
    console.log("não possui idade para votar")
} else if (age >= 70 && age < 18) {
    console.log("facultativo");
} else {
    console.log("obrigatório");
}