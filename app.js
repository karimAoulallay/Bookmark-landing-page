//---------------- open and close navbar

const closeNav = document.getElementById("close-icon");
const openNav = document.getElementById("open-icon");
const nav = document.getElementById("navbar");
const logo = document.getElementById("logo");

// open

openNav.addEventListener("click", () => {
  // opening navbar scrolling
  nav.style.cssText = "transform: translateX(0); transition: transform .5s";
  // prevent the page from scrolling at nav menu
  document.body.classList = "overflow-y-hidden";
  // hide page navbar
  nav.addEventListener("transitionend", (_) => {
    openNav.style.visibility = "hidden";
    logo.style.display = "hidden";
  });
});

// close

closeNav.onclick = (_) => {
  // closing navbar scrolling
  nav.style.cssText = "transform: translateX(100%); transition: transform .5s";
  // prevent the page from scrolling at nav menu
  document.body.classList = "overflow-y-visible";
  // reshow page navbar
  nav.addEventListener("transitionend", (_) => {
    openNav.style.visibility = "visible";
    logo.style.visibility = "visible";
  });
};

//---------------- Features section tabs

// show red shadow on click event

const tabs = document.querySelectorAll("#tab");
const tabContents = document.querySelectorAll("#tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // hide all section
    tabContents.forEach((content) => content.classList.add("hidden"));
    tabContents.forEach((content) => content.classList.remove("grid"));
    // show chosen section
    tabContents.forEach((content) => {
      if (
        content.getAttribute("data-number") ==
        e.currentTarget.getAttribute("data-number")
      ) {
        content.classList.remove("hidden");
        content.classList.add("grid");
      }
    });

    // remove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.style.color = "rgb(107 114 128 / var(--tw-text-opacity))";
    });
    // add active class to main element
    e.target.classList.add("active");
    e.target.style.color = "hsl(229, 31%, 21%)";
  });
});

//---------------- Accordion

let btn = document.querySelectorAll("#accordion-btn");

btn.forEach((btn) => {
  btn.addEventListener("click", (_) => {
    let content = btn.nextElementSibling;

    // toogle activeBtn class to add styling
    btn.classList.toggle("activeBtn");

    // open accordion
    if (!content.classList.contains("open")) {
      content.classList.add("open");
      let mainHeight = content.clientHeight;

      content.classList.add("collapsing");

      setTimeout((_) => {
        content.style.height = mainHeight + "px";
      }, 1);

      setTimeout((_) => {
        content.classList = "accordion-content open";
      }, 300);

      // close accordion
    } else {
      content.style = "";

      content.classList = "accordion-content collapsing";

      setTimeout(() => {
        content.classList = "accordion-content collapsed";
      }, 400);
    }
  });
});

//---------------- Email validation

let inputField = document.querySelector("input");
let inputWrapper = document.getElementById("inputWrapper");
let contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let regExp = /\w+@\w+(.com)\b/gi; // ===> \b used to make a condition that (.com) must be at the end of the string.
  let validation = regExp.test(inputField.value);

  if (!validation) {
    inputWrapper.setAttribute("data-valid", "false");
  } else {
    inputWrapper.setAttribute("data-valid", "true");
  }
});
