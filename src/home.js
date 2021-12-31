import buildText from "./textBuilder.js";

const setHome = () => {
    let main = document.getElementById("main");
    main.innerHTML = "";
    main.appendChild(buildText("h1", "Kingdom Snacks"));
    main.appendChild(buildText("h2", "To us, our costumers are our friends."));
    main.appendChild(document.createElement("hr"));
    main.appendChild(buildText("p", "And our friends are our power."));
}

export default setHome;