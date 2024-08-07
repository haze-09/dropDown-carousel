import "./style.css";
import dropDown from "./dropDown";
import carousel from "./carousel";

let button = document.querySelector("#dropdown");
let dropDowns = document.querySelectorAll(".invisible");
dropDown(button, dropDowns);

carousel.start();

