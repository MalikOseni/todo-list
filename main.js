let form = document.getElementById('addform');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
// form submit event
form.addEventListener('submit', addItem);

//Delete event 
itemList.addEventListener('click', removeItem);
// search event 
filter.addEventListener('keyup', filterItem);
// function addItem
function addItem(e) {
    e.preventDefault();

    // get input value
    let newAddItem = document.getElementById('task-field').value;
    
    // create new li Element
    let listEl = document.createElement('li');
    listEl.className = 'task-list-group';
    listEl.appendChild(document.createTextNode(newAddItem));
    // create del button 
    let delButton = document.createElement('button');
    delButton.className = 'del';
    // append textnode
    delButton.appendChild(document.createTextNode('x'));
    // add delBtn to listEl
    listEl.appendChild(delButton);
    itemList.appendChild(listEl)
    
}
// remove function
function removeItem(e) {
    if (e.target.classList.contains('del')) {
        if (confirm('Are you sure?')) {
            let listEl = e.target.parentElement;
            itemList.removeChild(listEl);
        }
    }
}
function filterItem(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName( 'li');
    // turn to array
    Array.from(items).forEach( (item) => {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.visibility = 'visible';
            item.style.display = 'flex'
        } else {
            item.style.visibility = 'hidden';
            item.style.display='none'
        }
    });
}