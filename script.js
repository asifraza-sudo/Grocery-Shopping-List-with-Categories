const groceryItems = {
    vegetables: ['Tomatoes', 'Spinach', 'Bell Peppers'],
    fruits: ['Apples', 'Bananas', 'Oranges'],
    dairy: ['Milk', 'Eggs', 'Cheese'],
    pantry: ['Rice', 'Pasta', 'Canned Beans']
};

function populateLists() {
    for (let category in groceryItems) {
        let categoryList = document.getElementById(`${category}-list`);
        groceryItems[category].forEach(item => {
            let listItem = document.createElement('li');
            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = item;
            listItem.appendChild(checkbox);
            listItem.appendChild(document.createTextNode(item));
            categoryList.appendChild(listItem);
        });
    }
}

function displaySelectedItems() {
    const selectedItemsList = document.getElementById('selected-items-list');
    selectedItemsList.innerHTML = ''; 
    
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
        let li = document.createElement('li');
        li.textContent = item.value;
        selectedItemsList.appendChild(li);
    });

    const selectedItemsCard = document.getElementById('selected-items-card');
    selectedItemsCard.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
    populateLists();

    document.querySelectorAll('input[type="checkbox"]').forEach(item => {
        item.addEventListener('change', displaySelectedItems);
    });
});
