//Burde hele loadBooks egentligt være inde under pl.view.listBooks property'en?, og så setupHTML bare være der i stedet.
//Så man kalder den med: pl.view.listBooks.setupHTML, og setupHTML kalder så setupUserInterface?
//Det virker underligt at denne listBooks del har 2 properties, nu når man skulle tro at pl.view.listBooks dækkede over hele "listBooks" delen

pl.view.loadBooks = {
    setupHTML: function () {
        var element = document.getElementById('content');
        var htmlString = '';

        //Removes existing content
        pl.view.clearPage.clearContent();
    
        htmlString += '<h1>List all books</h1>';
        htmlString += '<table id="books">';
        htmlString += '<thead><tr><th>ISBN</th><th>Title</th><th>Year</th></tr></thead>';
        htmlString += '<tbody></tbody>';
        htmlString += '</table>';
    
        element.insertAdjacentHTML('beforeend', htmlString);
    
        pl.view.listBooks.setupUserInterface();
    }
}

pl.view.listBooks = {
    setupUserInterface: function () {
        var tableBodyEl = document.querySelector("table#books>tbody");
        var i=0, keys=[], key="", row={};
        //Load all book objects
        Book.loadAll();
        keys = Object.keys(Book.instances);
        //for each book, create a table row with a cell for each attribute
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Book.instances[key].isbn;
            row.insertCell(-1).textContent = Book.instances[key].title;
            row.insertCell(-1).textContent = Book.instances[key].year;
        }
    }
};

//TEMP - Til hvis pl.view.loadBooks > setupHTML ikke virker.
//
// function setupHTML () {
//     var element = document.getElementById('content');
//     var htmlString = '';

//     htmlString += '<h1>List all books</h1>';
//     htmlString += '<table id="books">';
//     htmlString += '<thead><tr><th>ISBN</th><th>Title</th><th>Year</th></tr></thead>';
//     htmlString += '<tbody></tbody>';
//     htmlString += '</table>';

//     element.insertAdjacentHTML('beforeend', htmlString);

//     pl.view.listBooks.setupUserInterface();
// }