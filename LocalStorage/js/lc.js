//Object//
//save object
function saveColor() {
    if (typeof (Storage) !== "undefined") {
        var colorIn = document.getElementById('favoriteColor');
        localStorage.setItem("favColor", colorIn.value);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("colorOutput").innerHTML = output;
    }
}
//display object
function showColor() {
    var colorOut = localStorage.getItem("favColor");
    document.getElementById("colorOutput").innerHTML = "Favorite Color: " + localStorage.getItem("favColor");
}

//Array//
//save array
function saveArray() {
    if (typeof (Storage) !== "undefined") {
        var oneColor = document.getElementById("colorOne").value;
        var twoColor = document.getElementById("colorTwo").value;
        var threeColor = document.getElementById("colorThree").value;
        var colorArray = [oneColor, twoColor, threeColor];
        var colorArrayString = JSON.stringify(colorArray);
        localStorage.setItem("colorArray", colorArrayString);
        console.log(colorArrayString);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("outputArray").innerHTML = output;
    }
}
//display array
function displayArray() {
    var colors = localStorage.getItem("colorArray");
    console.log(colors);
    var colorsArray = JSON.parse(colors);
    console.log(colorsArray);
    var number = parseFloat(document.getElementById('arrayNum').value);
    var output = colorsArray[number];
    document.getElementById("outputArray").innerHTML = output;
}

//Associative Array//
//save Associative Array
function saveAssocArray() {
    if (typeof (Storage) !== "undefined") {
        var nameIn = document.getElementById("name").value;
        var foodIn = document.getElementById("food").value;
        var musicIn = document.getElementById("music").value;
        var movieIn = document.getElementById("movie").value;
        var insectIn = document.getElementById("insect").value;
        var array = {
            name: nameIn,
            food: foodIn,
            music: musicIn,
            movie: movieIn,
            insect: insectIn
        };
        console.log(array)
        var assocArrayString = JSON.stringify(array);
        localStorage.setItem("assocArray", assocArrayString);
    } else {
        var output = "I am sorry your browser doesn't support local storage.";
        document.getElementById("assocArrayOutput").innerHTML = output;
    }
}
//display Associative array
function displayAssocArrayValue() {
    var getArray = localStorage.getItem("assocArray");
    console.log(getArray);
    var favoriteArray = JSON.parse(getArray);
    console.log(favoriteArray);
    var nameSaved = favoriteArray.name;
    var foodSaved = favoriteArray.food;
    var musicSaved = favoriteArray.music;
    var movieSaved = favoriteArray.movie;
    var insectSaved = favoriteArray.insect;
    console.log(nameSaved, foodSaved, musicSaved, movieSaved, insectSaved);
    document.getElementById("nameOutput").innerHTML = nameSaved;
    document.getElementById("foodOutput").innerHTML = foodSaved;
    document.getElementById("musicOutput").innerHTML = musicSaved;
    document.getElementById("movieOutput").innerHTML = movieSaved;
    document.getElementById("insectOutput").innerHTML = insectSaved;
}
