pl.view.updateBook = {
    setupUserInterface: function () {
        var formEl = document.forms['Book'],
            saveButton = formEl.commit,
            selectBookEl = formEl.selectBook;
        var i=0, key="", keys=[], book=null, optionEl=null;
        //load all book objects
        Book.loadAll();
        //populate the selection list with books
        keys = Object.keys(Book.instances);
        for (i=0; i < keys.length; i++) {
            key = keys[i];
            book = Book.instances[key];
            optionEl = document.createElement("option");
            optionEl.text = book.title;
            optionEl.value = book.isbn;
            selectBookEl.add(optionEl, null);
        }
        //when a book is selected, populate the form with the book data

        
    }
};