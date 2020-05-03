let slotCounter = 1;
let inventory = [];
let questElementCounter = 1;
let sceneCounter = 1;

function putInInventory(item, elemID) {
    if(slotCounter > 9) {
        alert("Inventory Full");
    } else {
        let self = document.getElementById(elemID);
        inventory.push(item);
        slotCounter = slotCounter + 1;
        renderInventory();
        self.onclick = null;
    }
}

function renderInventory() {
    let inventoryStack = document.querySelector("#inventoryStack");
    let len = inventory.length;
    let newInventory = "";
    for(let i = 0; i < len; i = i + 1) {
        newInventory += '<li class="inventoryItem" id="' + inventory[i] + '"' + '>' + inventory[i] + '</li>'
    }
    inventoryStack.innerHTML = newInventory;
}

function nextScene(sceneID) {
    let sceneElem = document.getElementById(sceneID);
    sceneElem.style.display = "block";
	sceneElem.scrollIntoView();
}

function useInventory() {
    let coinTest = inventory.includes("Coin");
    let photoTest = inventory.includes("Photograph")
    if (coinTest && photoTest) {
        alert('You use the coin to scratch the photograph. It reads: "Preeti\'s birthday Oct 2000"');
    } else {
        alert('Not enough items in inventory. Try exploring more');
    }
}

function cupboardCode() {
    let inputBox = document.getElementById('cupboardCodeBox');
    let code = inputBox.value;
    if (code === "1093") {
        nextText('insideCupboard');
    } else {
        alert("Wrong Code");
    }
}

function nextText(textID) {
    let textElem = document.getElementById(textID);
    textElem.style.display = "block";
}

function trapdoorCode() {
    let inputBox = document.getElementById('trapdoorCodeBox');
    let code = inputBox.value;
    if (code === "982065") {
        nextScene('freedom');
        alert('Freedom at last...');
    } else {
        alert("Wrong code");
    }
}