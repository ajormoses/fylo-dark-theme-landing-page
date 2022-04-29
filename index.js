const btn = document.querySelectorAll(".btn");
const email = document.querySelector("#email");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const fylo = document.querySelector(".fylo-works");
const one = document.querySelector("#list-one");
const two = document.querySelector("#list-two");
const three = document.querySelector("#list-three");

// list one click event
one.addEventListener("click", () => {
  trans(one);
});

// list two click event
two.addEventListener("click", () => {
  trans(two);
});

// list three click event
three.addEventListener("click", () => {
  trans(three);
});

// function to validate one, two, three event
function trans(element) {
  element.style.transition = "0.3s";
  // setTimeout(element, 5000);
}

// fylo styling using onmouseover event
fylo.addEventListener("mouseover", (e) => {
  e.preventDefault();
  effect(fylo);
});

// effect function on fylo
function effect(element) {
  element.style.borderColor = "transparent transparent white transparent";
  const p = element.querySelector("p");
  p.style.color = "white";
  const y = element.querySelector("img");
  const z = element.querySelector("svg");
  y.style.display = "none";
  z.style.display = "block";
}

// Email validation
btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (email.value.trim() == "") {
      error(email, "Please enter a vaild email address");
    } else {
      success(email);
    }
    // pattern validation for email address
    if (email.value.match(pattern)) {
      success(email);
    } else {
      error(email, "Please enter a vaild email address");
    }
  });
});

// function for email validation
function error(element, msg) {
  element.style.border = "2px solid hsl(0, 100%, 63%)";
  const parent = element.parentElement;
  const p = parent.querySelector(".text");
  const m = parent.querySelector(".text-ig");
  m.innerHTML = msg;
  p.innerHTML = msg;
  m.style.color = "hsl(0, 100%, 63%)";
  p.style.color = "hsl(0, 100%, 63%)";
}

function success(element) {
  element.style.border = "2px solid hsl(176, 68%, 64%)";
  const parent = element.parentElement;
  const p = parent.querySelector(".text");
  const m = parent.querySelector(".text-ig");
  m.innerHTML = "";
  p.innerHTML = "";
}
