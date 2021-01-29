
// New paragraph with text
function create() {
    var para = document.createElement("p");
    var node = document.createTextNode("Newly created paragraph element by you!");
    para.appendChild(node);
    var element = document.getElementById("npc");
    element.appendChild(para);
}

//Add new li at the end
function changeList() {
    var node = document.createElement("li");
    var name = document.createTextNode("Trek the Movie<");
    node.appendChild(name);
    document.getElementById("mov").appendChild(node);
}

// Add new list at the top of list
function addFirst() {
    var newListItem = document.createElement("li");
    var name = document.createTextNode("Out of Liberty");
    newListItem.appendChild(name);
    var list = document.getElementById("movi");
    list.insertBefore(newListItem, list.childNodes[0]);
}

//Remove item from list
function remove() {
    var list = document.getElementById("mmovi");
    list.removeChild(list.childNodes[0]);
}
