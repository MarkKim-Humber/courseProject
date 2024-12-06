// Nav Bar Hover
const navLi = document.querySelectorAll("#navLi");

// Using forEach() method to iterate over the array of "navLi" and add Event Listeners to each item
navLi.forEach((listItem) => {
  listItem.addEventListener("mouseover", () => {
    listItem.style.backgroundColor = "#ffae00";
  });

  listItem.addEventListener("mouseout", () => {
    listItem.style.backgroundColor = "#303741";
  });
});

