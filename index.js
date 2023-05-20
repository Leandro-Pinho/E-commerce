// ----------- função para aparece o menuSuspenso -------
var menuSuspenso = document.getElementById("menuProduto");


function pEnter() {
    menuSuspenso.style.display = 'grid'
}

function pClose() {
    menuSuspenso.style.display = 'none'
}

// -------------- function para o menu na vertical quando a tela esta pequena--------------
var MenuItems = document.getElementById('menuItems');

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    } else {
        MenuItems.style.maxHeight = "0px"
    }
}

