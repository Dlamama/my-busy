const myButton = document.querySelector('#myButton');
const nameInput = document.querySelector('#nameInput');
const list = document.querySelector('#list');

myButton.addEventListener('click', () => {

    const newItem = document.createElement('li');
    newItem.classList.add('item')
    newItem.textContent = nameInput.value
    list.appendChild(newItem);

    nameInput.value = '';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x'
    newItem.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', () => {
        list.removeChild(newItem);
    })
    document.getElementById("list").onclick = function () {
        this.className = "active";
    }

});
