// Nav Bar Hover
const navLi = document.querySelectorAll("#navLi");

navLi.forEach((listItem) => {
  listItem.addEventListener("mouseover", () => {
    listItem.style.backgroundColor = "#ffae00";
  });

  listItem.addEventListener("mouseout", () => {
    listItem.style.backgroundColor = "#303741";
  });
});

