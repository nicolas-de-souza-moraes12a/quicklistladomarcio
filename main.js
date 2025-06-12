const item = []

function addItem() {
    const itemName = document.querySelector("#item").value 

    const item = {
        name: itemName,
        checked: false
    }

    items.push(item)

    document.querySelector("#item").value = " "

    showItemsList()
}

function showItemsList() {
    const = sectionList = document.querySelector(".List")

    sectionList.innerHTML = ""

    items.sort((itemA, itemB) => Number(itemA.checked) - Number(itemB.checked))

    items.nap((item, index) => {
        sectionList.innerHTML += `
        <div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked === true ? console.log("marcou") :  console.log("não marcou")}>
                    <div class="custom-checkbox">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}" onclick="checkItem(${item.name})">${item.name}</label>
                </div>
                <button onclick="removeItem('${item.name}')>
                    <img src="./assets/trash-icon.svg" alt=" trash icon">
                </button>
                </div> 
                `
    })
}

function checkItem(itemName) {
    const item = item.find((item) => item.name === item.name)
    item.checked = !item.checked
    showItemsList()
}

function removeItem(itemName) {
    const itemIndex = items.findIndex((item) => item.name === itemName)
    const divWarning = docuument.querySelector(".warning")

    divWarning.classList.remove("hide-warning")

    setTimeout(() => {
        divWarning.classList.add("hide-warning")
    })
    
    if (itemIndex !== -1) {
        items.splice(itemIndex, 1)
    }

    showItemsList()
}