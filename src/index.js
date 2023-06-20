// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";
import cars from "./practice";

//Num 1
const [cat, dog] = animals;
// console.log(cat)

//Num2
// const [animal, makeSound] = useAnimals(cat);
// console.log(animal)
// makeSound();

//Num3
///if there is no data you can assign custom value to a field when destructuring
// const {name="Fluffy", sound="Meow"} = cat;
// console.log(name)

//Num4
// const {name:catName, sound:catSound, feedingRequirements:diet} = cat;
// console.log(catName);

//Num5
// const {food:catFood, water:catWater} = diet;
// console.log(catWater);

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroSixty }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToSixty: telsaZeroSixty }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
