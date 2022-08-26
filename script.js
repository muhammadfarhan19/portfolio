const scriptURL = "https://script.google.com/macros/s/AKfycbymPxwYIqPoogwJfkFX6eXDcokNpyaUW3y25hHAj7jXJBrSCM_jtIPVA7Zt0dOySZnq/exec";
const form = document.forms["portfolio-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");
const navBar = document.querySelector('.navbar');
const navLink = document.querySelectorAll(".nav-link");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

navBar.addEventListener('click', (e) => {
  if (e.target.className == 'nav-link') {
    navLink.forEach((el) => {
      el.classList.remove('active');
    });
    e.target.classList.add('active');
  }
})