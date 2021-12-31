import './style.css';
import setHome from "./home.js";
import setMenu from "./menu.js";
import setContact from "./contact.js";
import buildText from "./textBuilder.js";
import headerImageSource from "./images/khsnackslogo.png";

const buildHeader = () => {
    let header = document.createElement("header");
    let headerImage = document.createElement("img");
    headerImage.src = headerImageSource;
    header.appendChild(headerImage);
    let nav = document.createElement("nav");
    
    let homeButton = document.createElement("button");
    homeButton.classList.add("navButton");
    homeButton.classList.add("active");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        setHome();
    });
    nav.appendChild(homeButton);
  
    let menuButton = document.createElement("button");
    menuButton.classList.add("navButton");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        setMenu();
    });
    nav.appendChild(menuButton);

    let contactButton = document.createElement("button");
    contactButton.classList.add("navButton");
    contactButton.textContent = "Contact Us";
    contactButton.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        setContact();
    });
    nav.appendChild(contactButton);
    header.appendChild(nav);
    return header;
}
const buildMain = () => {
    let main = document.createElement("main");
    main.id = "main";
    return main;
}

const buildFooter = () => {
    let footer = document.createElement("footer");
    footer.appendChild(buildText("p", "Allen Schmerler"));
    return footer;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".navButton");
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
  }

const content = document.getElementById("content");

content.appendChild(buildHeader());
content.appendChild(buildMain());

setHome();

content.appendChild(buildFooter());


