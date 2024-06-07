// Load items from local storage and display them
function loadItems() {
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = '';
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item}</span>
            <button onclick="editItem(${index})">Edit</button>
            <button onclick="deleteItem(${index})">Delete</button>
        `;
        itemList.appendChild(listItem);
    });
}

// Add a new item
function createItem() {
    const itemInput = document.getElementById('itemInput');
    const newItem = itemInput.value;
    if (newItem) {
        const items = JSON.parse(localStorage.getItem('items')) || [];
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        itemInput.value = '';
        loadItems();
    }
}

// Edit an existing item
function editItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    const newItem = prompt('Edit the item:', items[index]);
    if (newItem !== null) {
        items[index] = newItem;
        localStorage.setItem('items', JSON.stringify(items));
        loadItems();
    }
}

// Delete an item
function deleteItem(index) {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    loadItems();
}

// Load items when the page loads
window.onload = loadItems;
