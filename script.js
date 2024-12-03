// Nav Bar Hover
const navLi = document.querySelectorAll("#navLi")

console.log(navLi);

navLi.forEach((listItem) => {
    listItem.addEventListener("mouseover", () => {
        listItem.style.backgroundColor = "#ffae00";
        
    })

    listItem.addEventListener("mouseout", () => {
        listItem.style.backgroundColor = "#303741";
    })
})



// Form submission - sending data to https://formspree.io/
const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const status = document.getElementById("myFormStatus");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thank you! I will be in touch soon 😃";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch(() => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
});