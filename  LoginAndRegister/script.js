// const myBody = document.getElementsByTagName("body")[0];
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");

const iconClose = document.querySelector(".icon-close");

// myBody.addEventListener("click", () => {
//   wrapper.classList.add("inActive-popup");
// });

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  // prevent
  // wrapper.classList.remove("inActive-popup");
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  // prevent
  // wrapper.classList.remove("inActive-popup");
  wrapper.classList.remove("active-popup");
});
