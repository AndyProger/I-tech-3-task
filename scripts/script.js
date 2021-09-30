var img = document.getElementById("image");

function setImg() {
    img.src = this.value;
    return false;
}

function changeWidth(){
    img.style.width = this.value + 'px';
    return false;
}

function changeHeight(){
    img.style.height = this.value + 'px';
    return false;
}

function changeBorder(){
    img.style.border = this.value + 'px solid black';
    return false;
}

function changeAltText(){
    img.setAttribute('alt', this.value);
    return false;
}

document.getElementById("List").onchange = setImg;
document.getElementById("chWidth").onchange = changeWidth;
document.getElementById("chHeight").onchange = changeHeight;
document.getElementById("chBorder").onchange = changeBorder;
document.getElementById("chAltText").onchange = changeAltText;
