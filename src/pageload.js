const menuclick = (e) => {
    console.log(e.target);
}

const pageload = (page) => {
    const content = document.getElementById("content");
    content.innerHTML = `
    <header>
        <ul>
            <li class="navButton active" name="home"><p>Home</p></li>
            <li class="navButton" name="menu"><p>Menu</p></li>
            <li class="navButton" name="contact"><p>Contact Us</p></li>
        </ul>  
    </header>
    `;
    content.innerHTML += page == "home" ?
    `
    <main>
        <h1>Kingdom Snacks</h1>
        <h2>To us, our costumers are our friends.</h2>
        <hr>
        <p>And our friends are our power.</p>
    </main>

    <footer>
        <p>Allen Schmerler</p>
    </footer>
    `
    : page == "menu" ?
    `

    `
    :
    `

    `
    
    Array.from(document.getElementsByClassName("baritem")).forEach(element => {
        element.stopPropagation();
        element.addEventListener("click", menuclick);
        
        
    });
};

export default pageload;