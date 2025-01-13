
//Area of garden
const PI = 3.1415;
const radius = 5;
const area = Math.ceil(PI * radius * radius);
console.log("Garden area is:", area, "square meters.");

//Maximum Capacity
const plantSpace = 0.8;
const maxPlants = Math.ceil(area / plantSpace);
console.log("Maximum plant capacity is:", maxPlants);

//Plant Growth Prediction
const startingPlants = 20;
let week1Plants = startingPlants * 2; // Double the plants
let week2Plants = week1Plants * 2;
let week3Plants = week2Plants * 2;

console.log("Week 1 plants:", week1Plants);
console.log("Week 2 plants:", week2Plants);
console.log("Week 3 plants:", week3Plants);

//Week 1
if (week1Plants > 0.8 * maxPlants) {
    console.log("Week 1: Pruned, too many plants.");
  } else if (week1Plants >= 0.5 * maxPlants) {
    console.log("Week 1: Monitored, growth is acceptable.");
  } else {
    console.log("Week 1: Planted, more room for plants.");
  }
  
  //Week 2
  if (week2Plants > 0.8 * maxPlants) {
    console.log("Week 2: Pruned, too many plants.");
  } else if (week2Plants >= 0.5 * maxPlants) {
    console.log("Week 2: Monitored, growth is acceptable.");
  } else {
    console.log("Week 2: Planted, more room for plants.");
  }
  //Week 3
  if (week3Plants > 0.8 * maxPlants) {
    console.log("Week 3: Pruned, too many plants.");
  } else if (week3Plants >= 0.5 * maxPlants) {
    console.log("Week 3: Monitored, growth is acceptable.");
  } else {
    console.log("Week 3: Planted, more room for plants.");
  }

  //Part 2
  let plantstart = 100
  let Firstweek = plantstart * 2
  let Secondweek = Firstweek * 2
  let Thirdweek = Secondweek * 2
  let Fourthweek = Thirdweek * 2
  let Fifthweek = Fourthweek * 2
  let Sixthweek = Fifthweek * 2
  let Seventhweek = Sixthweek *2
  let Eigthweek = Seventhweek *2
  let Ninthweek = Eigthweek * 2
  let Tenthweek = Ninthweek * 2
  console.log("Tenth week total plants", Tenthweek);

  //Total capacity area required for plants after ten weeks (circumference)
  let Newcapacity = Tenthweek * plantSpace
  console.log("New capacity circumference equals", Newcapacity);

  // Additional space needed
  let additionalSpace = Newcapacity - maxPlants

  //Calculate the new radius
  
  let Newradius = Math.ceil(Newcapacity / PI /2)
  console.log("Radius equals", Newradius, "meters");


  //Part 3 Errors in Judgment

  // Calculate the total area required for the plants (as before).

let Expandedarea = Math.ceil(PI *Newradius * Newradius)
console.log("Expanded garden area equals", Expandedarea);

// Compare the required area to the original garden’s capacity.

console.log(`Required area of ${Newcapacity} meters exceeds the original garden's ${maxPlants} capacity`);
// If the required area exceeds the garden’s capacity, throw an error.
if ("Expandedarea >area"){
  throw new Error("Space exceeded, no room");
}
// Catch the error and log an appropriate message.
try {
  ("Expandedarea > area")
} catch (error) {
console.log( "The garden is too small:",error.message);
    
    console.log("Plants after 10 weeks:",Tenthweek);
    console.log("Total area required:", Expandedarea, "square meters");
    console.log("Garden capacity is sufficient.");
  console.error("Error:" , error.message);}
