 const list = document.getElementById('Topics')
//this variable will
const items = list.getElementsByTagName('li')
const input = document.getElementById('searchBox')

document.getElementById('searchButton').addEventListener('click', () => {
    // converting whatever the user inputs to lowercase to make it easier to search the list
    // so that the case sensitivity is not an issue
    const filter = input.value.toLowerCase();

    for (let counter= 0; counter< items.length; counter++){
        const itemsText = items[counter].textContent.toLowerCase();
        // check if current item from the list is the searched item

        if (itemsText.includes(filter)) {
         // if it is we just show the item
            items[counter].style.display = '';
        } else {
            items[counter].style.display= "none";
        }
    }
        
});

