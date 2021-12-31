import buildText from "./textBuilder.js";
import largemenu from "./images/largemenu.jpg";
import soraImg from "./images/sora.jpg";
import rikuImg from "./images/riku.jpg";
import kairiImg from "./images/kairi.jpg";
import kingImg from "./images/king.jpg";
import stage1Img from "./images/stage1.jpg";
import stage2Img from "./images/stage2.jpg";


const buildMenuItem = (text, source) => {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    let menuItemImage = document.createElement("img");
    menuItemImage.src = source;
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(buildText("p", text));
    return menuItem;
}

const setMenu = () => {
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(buildText("h1", "Menu"));
    let largemenuimg = document.createElement("img");
    largemenuimg.src = largemenu;
    //main.appendChild(largemenuimg);
    let menuDisplay = document.createElement("div");
    menuDisplay.id = "menuDisplay";
    menuDisplay.appendChild(buildMenuItem("Awakening Tomato Pasta", soraImg));
    menuDisplay.appendChild(buildMenuItem("Breaking Dawn Chicken Burger", rikuImg));
    menuDisplay.appendChild(buildMenuItem("Memories of Cream Stew", kairiImg));
    menuDisplay.appendChild(buildMenuItem("King's Tuna Sandwich", kingImg));
    menuDisplay.appendChild(buildMenuItem("Magic Lamp Chicken Curry", stage1Img));
    menuDisplay.appendChild(buildMenuItem("Seafood Curry on an Isolated Island", stage2Img));
    main.appendChild(menuDisplay);
}

export default setMenu;