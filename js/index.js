// Array that contain colors name
let colors = ["brown", "blue", "gray", "white", "yellow", "pink"];


let changBgBtn = document.getElementById('btn');
let colorName = document.querySelector('#colorValue');
let addBtn = document.getElementById('add');



// event triggered on add button click to add color from input field push into colors array and store unique color
// colors elements. 
addBtn.onclick = function () {
    let color = document.getElementById('color').value;
    colors.push(color)
    let newColors = [...new Set(colors)]
    colors = [...newColors];
}


// add event when user click on change button it change the background color
changBgBtn.addEventListener("click", function () {

    let randomNumber = 0;
    //generate a random number
    randomNumber = Math.floor(Math.random() * colors.length);
    // change background color
    document.body.style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
})


// function to get current year
document.body.onload = function() {
        let date = new Date();
        document.getElementById('year').innerHTML = date.getFullYear();
}
