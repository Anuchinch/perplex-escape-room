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
    let sofaTest = inventory.includes("Sofa Cushion");
    let scissorTest = inventory.includes("Scissors")
    let inkTest = inventory.includes("Inkpad");
    let paperTest = inventory.includes("Paper");
    let stampTest = inventory.includes("Stamp");
    if (sofaTest && scissorTest) {
        alert('You use the Scissors to cut open the Sofa Cushion. Immediately, a Stamp falls out.');
		sofaIndex = inventory.indexOf('Sofa Cushion');
		inventory.splice(sofaIndex, 1);
		putInInventory("Stamp",'stamp');
    } else if (inkTest && paperTest && stampTest) {
		leaflet = document.getElementById("leaflet");
		nextScene('leaflet');
	} else{
        alert('Not enough items in inventory. Try exploring more');
    }
}


function nextText(textID) {
    let textElem = document.getElementById(textID);
    textElem.style.display = "block";
}

function clockCode() {
    let inputBox = document.getElementById('clockCodeBox');
    let code = inputBox.value;
    if (code === "9034") {
        nextScene('freedom');
        alert('Freedom at last...');
    } else {
        alert("The lock refuses to open. Try a different code.");
    }
}