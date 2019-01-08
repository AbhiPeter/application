var ulElement = document.querySelector(".list-group");

var liList = document.querySelectorAll(".list-group-items");
var spanStudent = document.querySelectorAll(".technology");
var spanDelete = document.querySelectorAll(".remove")

ulElement.addEventListener("click", function(event) {
    if (event.target.className == "remove") {
        event.target.parentElement.remove();
    }
}, false)

liList.forEach(function(element, index, nodeList) {
    console.log("hello enter in this code");
    var spanDelete = element.querySelector(".remove");
    spanDelete.addEventListener("click", function(event) {
        element.remove();
        spanDelete.parentElement.remove();
    })
})

function addItem() {
    event.preventDefault();

    var inputValue = document.querySelector('.form-group input');
    var li = document.createElement("li");
    var spanStudent = document.createElement("span");
    var spanDelete = document.createElement("span");

    li.className = "list-group-items";
    spanStudent.className = "technology";
    spanDelete.className = "remove";

    li.append(spanStudent);
    li.append(spanDelete);

    ulElement.append(li);

    spanStudent.innerText = inputValue.value;
    spanDelete.innerText = "Remove";
    inputValue.value = "";
}


