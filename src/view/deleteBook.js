pl.view.loadDeleteBook = {
    setupHTML: function () {
        var element = document.getElementById('content');
        var htmlString = '';

        //Removes existing content
        pl.view.clearPage.clearContent();

        htmlString += '<h1>Delete a book record</h1>';
        htmlString += '<form id="Book">';
        htmlString += '<p>';
        htmlString += '<label>Select book:';
        htmlString += '<select name="selectBook"><option value=""> --- </option></select>';
        htmlString += '</label>';
        htmlString += '</p>';
        htmlString += '<p><button type="button" name="commit">Delete</button></p>';
        htmlString += '</form>';

        element.insertAdjacentHTML('beforeend', htmlString);

        pl.view.deleteBook.setupUserInterface();
    }
};

pl.view.deleteBook = {
    setupUserInterface: function () {
        var deleteButton = document.forms['Book'].commit;
        var selectEl = document.forms['Book'].selectBook;
        var i=0, key="", keys=[], book=null, optionEl=null;
        //load all book objects
        Book.loadAll();
        keys = Object.keys(Book.instances);
        //populate the selection list with books
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            book = Book.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = book.title;
            optionEl.value = book.isbn;
            selectEl.add(optionEl, null);
        }
        deleteButton.addEventListener("click", pl.view.deleteBook.handleDeleteButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Book.saveAll();
        });
    },
    
    handleDeleteButtonClickEvent: function () {
        var selectEl = document.forms['Book'].selectBook;
        var isbn = selectEl.value;
        if (isbn) {
            Book.destroy(isbn);
            selectEl.remove(selectEl.selectedIndex);
        }
    }
};