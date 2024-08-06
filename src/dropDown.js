function dropDown(button, dropDowns) {
  button.addEventListener("mouseenter", () => {
    for (let item of dropDowns) {
      item.classList.remove("invisible");
      item.classList.add("visible");
    }
  });
  button.addEventListener("mouseleave", () => {
    for (let item of dropDowns) {
      item.classList.add("invisible");
      item.classList.remove("visible");
    }
  });
}

export default dropDown;
