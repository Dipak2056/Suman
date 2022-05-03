const sections = document.querySelectorAll(".section");
const secBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");

function pageTransition() {
  //button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        " "
      );
      this.className += " active-btn";
    });
  }
  //added section to the active class
  allSections.forEach((item) =>
    item.addEventListener("click", function (e) {
      const id = e.target.dataset.id;
      if (id) {
        //remove selected from the other btns
        secBtns.forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
        //hide other sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    })
  );
}
pageTransition();
