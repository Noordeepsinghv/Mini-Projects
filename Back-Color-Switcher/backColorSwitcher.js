lst = ["lightCoral", "deepSkyBlue", "mediumSeaGreen", "goldenRod", "lightSalmon", "paleVioletRed", "darkTurquoise", "steelBlue", "mediumPurple", "lightSlateGray", "dodgerBlue", "orchid", "tomato", "springGreen", "peachPuff", "mistyRose", "khaki", "plum", "thistle", "cornflowerBlue", "powderBlue", "mediumOrchid", "darkSeaGreen", "lightSteelBlue", "sandyBrown", "rosyBrown", "turquoise", "mediumAquaMarine", "hotPink", "cadetBlue"];

var button = document.getElementById("changeColorButton");

var index = 0;
button.addEventListener("click", function() {
    document.body.style.backgroundColor = lst[index];
    document.getElementById("displayText").innerHTML = lst[index];
    index++;

    if (index >= lst.length) {
        index = 0;
    }
});

