import buildText from "./textBuilder.js";
import wayfinder from "./images/wayfinder.png";

const setContact = () => {
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(buildText("h1", "Contact Us"))
    main.appendChild(document.createElement("hr"));
    main.appendChild(buildText("p", "Phone Number: 5346-2431-3123446"))
    main.appendChild(buildText("p", "Email: snack@urheart.com"))
    let image = document.createElement("img");
    image.src = wayfinder;
    main.appendChild(image);
}

export default setContact;