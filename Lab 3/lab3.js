let cartQuantity = 0;
function add2(){
    cartQuantity = cartQuantity + 2;
    document.getElementById("quantity").textContent = cartQuantity;
}

function add3(){
    cartQuantity = cartQuantity + 3;
    document.getElementById("quantity").textContent = cartQuantity;
}

function addToCart(){
    cartQuantity = cartQuantity + 1;
    document.getElementById("quantity").textContent = cartQuantity;
}

function reset(){
    cartQuantity = 0;
    document.getElementById("quantity").textContent = cartQuantity;
}

function showQuantity(){
    document.getElementById("quantity").textContent = cartQuantity;
}