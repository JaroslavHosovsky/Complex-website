// Zvětšování obrázků

const images = document.querySelectorAll(
  "#mobile-image1, #mobile-image2, #mobile-image3, #mobile-image4, #mobile-image5, #mobile-image6, #mobile-image7, #mobile-image8, #desktop-image1, #desktop-image2, #desktop-image3, #desktop-image4, #desktop-image5, #desktop-image6, #desktop-image7, #desktop-image8"
);

function imgScale(images) {
  images.addEventListener("mouseenter", () => {
    images.style.transform = "scale(1.1)";
  });

  images.addEventListener("mouseleave", () => {
    images.style.transform = "scale(1)";
  });
}
images.forEach((images) => {
  imgScale(images);
});

// Hamburger menu
const hamburgerIcon = document.querySelector(".nav-hamburger");
const hamburgerMenu = document.querySelector(".navbar-wrapper-container");
const closeIcon = document.querySelector(".nav-close");

hamburgerIcon.addEventListener("click", () => {
  hamburgerMenu.classList.add("active");
});
closeIcon.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
});

// Scroll up button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// Dark/Light mode
const dark = document.querySelector(".dark-mode");
const light = document.querySelector(".light-mode");
const mode = document.getElementsByTagName("link")[3];

dark.addEventListener("click", () => {
  dark.style.display = "none";
  light.style.display = "block";
  mode.setAttribute("href", "dark.css");
});
light.addEventListener("click", () => {
  light.style.display = "none";
  dark.style.display = "block";
  mode.setAttribute("href", "style.css");
});

// Formulář
const form = document.querySelector("form");

const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const password1 = document.querySelector(".form-password1");
const password2 = document.querySelector(".form-password2");

const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notPassword1 = document.querySelector(".notificationPassword1");
const notPassword2 = document.querySelector(".notificationPassword2");
const paragraph = document.querySelector(".result-text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (fullName.value === "") {
    notName.style.display = "block";
  } else {
    notName.style.display = "none";
  }

  if (email.value === "") {
    notEmail.style.display = "block";
  } else {
    notEmail.style.display = "none";
  }

  if (password1.value === "") {
    notPassword1.style.display = "block";
  } else {
    notPassword1.style.display = "none";
  }

  if (password2.value === "") {
    notPassword2.style.display = "block";
  } else {
    notPassword2.style.display = "none";
  }
});

password1.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1Value === password2Value) {
    paragraph.textContent = "Passwords match";
    paragraph.classList.add("valid");
    paragraph.classList.remove("invalid");
  } else {
    paragraph.textContent = "Passwords do not match";
    paragraph.classList.add("invalid");
    paragraph.classList.remove("valid");
  }
  if (password1Value === "" && password2Value === "") {
    paragraph.textContent = "";
  }
});

password2.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password2Value === password1Value) {
    paragraph.textContent = "Passwords match";
    paragraph.classList.add("valid");
    paragraph.classList.remove("invalid");
  } else {
    paragraph.textContent = "Passwords do not match";
    paragraph.classList.add("invalid");
    paragraph.classList.remove("valid");
  }
  if (password1Value === "" && password2Value === "") {
    paragraph.textContent = "";
  }
});
