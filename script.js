let things = [];

const THINGS_MAX = 5;

const thingsContainer = document.getElementById("things");
const textInput = document.getElementById("input");
const addButton = document.getElementById("add");


function deleteThing(button) {
    let thingElement = button.previousElementSibling;
    let thing = thingElement.innerText;

    things = things.filter(item => item !== thing);

    let parent = button.parentNode;
    parent.remove();
}

function getTextFromInput() {
    let inputValue = textInput.value;
    textInput.value = "";
    return inputValue;
}

function addThing(text) {
    things.push(text);
};

function showThings() {
    let thingsContainerHtml = ""
    things.forEach( thing => {
        thingsContainerHtml += 
        `<div class="thing">
        <p>${thing}</p>
        <button onclick="deleteThing(this)">❌</button>
        </div>`;
    });
    thingsContainer.innerHTML = thingsContainerHtml;
}

function addThingToPage() {
    let textToInsert = getTextFromInput();

    if (things.length ===  THINGS_MAX) {
        alert("Maximum number of things reached!");
        return;
    }

    if (textToInsert === "") {
        return;
    };

    if (things.includes(textToInsert)) {
        alert(`${textToInsert} is already on your list`);
        return;
    }

    addThing(textToInsert);
    showThings();
};

addButton.addEventListener("click", addThingToPage);
