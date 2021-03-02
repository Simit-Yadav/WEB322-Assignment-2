// Name: Simit Sanjay Yadav
// Student ID: 151009198
// Section: NCC

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".menu-list");
  console.log(nav);
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};

navSlide();
