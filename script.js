const form = document.querySelector("#menu-form");
const menuInput = document.querySelector("#menu-input");
const count = document.querySelector("#count");
const menuText = document.querySelector("#menu-text");

function handleSubmit(event) {
    event.preventDefault();
    
    let menu = JSON.parse(menuInput.value);
    count.textContent = "We have " + menu.length + " items today.";
    
    menuText.textContent = "";

    for (let i = 0; i < menu.length; i++) {
        menuText.textContent = menuText.textContent + menu[i].name + " — $" + menu[i].price + "\n";
    }
}

form.addEventListener("submit", handleSubmit);