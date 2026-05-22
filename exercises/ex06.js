const eatsPlants = true;
const eatsAnimals = false;

const category =
    eatsPlants && !eatsAnimals ? "herbivore" :
    !eatsPlants && eatsAnimals ? "carnivore" :
    eatsPlants && eatsAnimals ? "omnivore" :
    "undefined";

console.log(category);
