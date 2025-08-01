
let btn = document.querySelector("button");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");


btn.onclick = (evt) => {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

    let textColor = getTextColor(randomColor);

    body.style.backgroundColor = randomColor;
    h1.style.color = textColor;
    p.style.color = textColor;

    console.log(evt);
};


function getTextColor(hexColor) {
    hexColor = hexColor.replace("#", "");

    let red = parseInt(hexColor.substring(0, 2), 16);
    let green = parseInt(hexColor.substring(2, 4), 16);
    let blue = parseInt(hexColor.substring(4, 6), 16);


    let brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    if (brightness > 128) {
        return "#000000"; 
    } else {
        return "#FFFFFF"; 
    }
}
