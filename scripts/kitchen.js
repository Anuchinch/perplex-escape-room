let slotCounter = 1;
let inventory = [];
let questElementCounter = 1;
let sceneCounter = 1;
let fridgeFlag=0;
let panelFlag=0;

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
	if(sceneID=='refrigerator' && fridgeFlag==0){
		alert("There is no electricity in the room. The Refrigerator won't open.");
	} else {
		let sceneElem = document.getElementById(sceneID);
		sceneElem.style.display = "block";
		sceneElem.scrollIntoView();
	}
}

function useInventory() {
    let hammerTest = inventory.includes("Hammer");
    let saltTest = inventory.includes("Salt Shaker");
	let screwTest = inventory.includes("Screwdriver");
    if (hammerTest && saltTest) {
        alert('You use the Hammer to break the Salt Shaker.');
		nextScene('leaflet');
		saltIndex=inventory.indexOf("Salt Shaker");
		inventory.splice(saltIndex, 1);
		renderInventory();
    } else if (screwTest && panelFlag==1) {
		alert('You use the Screwdriver to open the Panel.');
		panelText=document.getElementById("panelText1");
		panelText.style.display="none";
		nextText('panelText2');
	} else {
        alert('Not enough items in inventory. Try exploring more');
    }
}

function breakerCode() {
    let inputBox = document.getElementById('breakerCodeBox');
    let code = inputBox.value.toLowerCase();
    if (code === "yellow") {
        alert("You connect the yellow wire. Power returns to the room. A tiny light starts blinking at the Refrigerator door.");
		fridgeFlag=1;
    } else {
        alert("Wrong Code");
    }
}

function nextText(textID) {
    let textElem = document.getElementById(textID);
    textElem.style.display = "block";
}

function panelCode() {
    let inputBox = document.getElementById('panelCodeBox');
    let code = inputBox.value;
    if (code === "19") {
        nextScene('freedom');
        alert('Success');
    } else {
        alert("Wrong code");
    }
}