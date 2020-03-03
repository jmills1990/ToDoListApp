

function updateItemStatus(){
    var cbID = this;
    alert(cbID);

}


function addNewItem(list, itemText) {
    totalItems++;

    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + totalItems;
    checkBox.onclick = updateItemStatus; 


    var span = document.createElement("span");
    span.id = "item_" + totalItems;
    span.innerText = itemText;

    listItem.appendChild(checkBox);
    listItem.appendChild(span);

    list.appendChild(listItem);

}
var totalItems = 0;
var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function (event) {

    // Event.which (13) -> Enter content

if (event.which == 13) {
 var itemText = inItemText.value

    if (!itemText || itemText == "" || itemText == " ")  {
    return false;
}

addNewItem(document.getElementById("todoList"), itemText);


//inItemText.select();
document.getElementById("inItemText").blur();
document.getElementById("inItemText").value = "";
inItemText.focus();
}
}
