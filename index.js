let heroName = "Axel";
let heroXp = 7500;
let heroLevel;

switch(true) {
    case (heroXp <= 1000):
        heroLevel = "Ferro";
        break;
    case (heroXp > 1000 && heroXp <= 2000):
        heroLevel = "Bronze";
        break;
    case (heroXp > 2000 && heroXp <= 5000):
        heroLevel = "Prata";
        break;
    case (heroXp >= 5001 && heroXp <= 7000):
        heroLevel = "Ouro";
        break;
    case (heroXp >= 7001 && heroXp <= 8000):
        heroLevel = "Platina";
        break;
    case (heroXp >= 8001 && heroXp <= 9000):
        heroLevel = "Ascendente";
        break;
    case (heroXp >= 9001 && heroXp <= 10000):
        heroLevel = "Imortal";
        break;
    default:
        heroLevel = "Radiante";
        break;
}

console.log(`O Herói de nome ${heroName} está no nível de ${heroLevel}.`);
