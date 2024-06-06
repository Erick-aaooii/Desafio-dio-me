// Require libraries
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Mensage for user
rl.question('Digite o nome do herói: ', (nameHero) => {
  rl.question('Digite a quantidade de experiência (XP) do herói: ', (xp) => {
    // Create a var for level user
    var user;
    if (xp < 1000) {
        user = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        user = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        user = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        user = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        user = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        user = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        user = "Imortal";
    } else {
        user = "Radiante";
    }
    console.log("O Herói de nome " + nameHero + " está no nível de " + user);
    rl.close();
  });
});
