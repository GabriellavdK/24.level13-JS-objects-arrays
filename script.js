//Deel 1 van de opdracht - Objecten
// Hieronder is een voorbeeld te zien van een object.
let person = {
    name: "Gabriëlla",
    age: 32,
    evaluations: [7, 10, 9],
};
//Name wordt in het bovenstaande object ook wel een key genoemd en "Gabriella" is de value. 

console.log(person);

// Oproepen van een variabele in een object. Kan op twee manieren. 
console.log(person.name); // dot notation
console.log(person["name"]); // bracket notation

console.log(person.age); //dot notation
console.log(person['age']); // bracket notation

console.log(person.evaluations); //dot notation
console.log(person['evaluations']); // bracket notation


// Deel 2 van de opdracht - Arrays
// En hieronder komt een voorbeeld van een Array
let colors = ["groen", "blauw", "rood"];

console.log(colors);

console.log(colors.length); // Weergeeft het aantal values in de array. 

console.log(colors[0]); // Logt het eerst element van de Array. JS start altijd met tellen bij 0.

console.log(colors[colors.length-1]); // Geeft de value van de laatste key aan in de Array. Omdat er nu 3 kleuren in staan en er gestart wordt met tellen bij 0 is dit antwoord dus 2. 

console.log(colors.push("geel")); // Met push voeg je een nieuwe value toe aan je array. 
console.log(colors); 

console.log(colors.push(5)); // Een getal hoeft niet tussen aanhalingstekens.
console.log(colors); 

console.log(colors.push({greeting: "hi ik ben een object"})); // Op deze wijze voeg je een object toe binnen een array.
console.log(colors);

console.log(colors[colors.length-1].greeting); // Op deze wijze kun je de value van een object binnen een array loggen.


// Deel 3 van de opdracht
const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
                food: {
                        favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
        {
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
                        favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
        {
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
                        favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]

console.log("Soortnaam van kat 3:", catBreeds[2].name);

console.log("Energylevel van kat 1: level", catBreeds[0].energy_level);

console.log("Eerste temperament kat 2:", catBreeds[1].temperament[0]);

console.log("Laatste temperament kat 3:", catBreeds[2].temperament[4]);

console.log("Favoriete voer kat 3:", catBreeds[2].food.favourite_food); 