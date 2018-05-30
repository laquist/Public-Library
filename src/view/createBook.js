pl.view.loadCreateBook = {
    setupHTML: function () {
        var element = document.getElementById('content');
        var htmlString = '';

        //Removes existing content
        pl.view.clearPage.clearContent();

        htmlString += '<h1>Create a new book record</h1>';
        htmlString += '<form id="Book">';
        htmlString += '<p><label>ISBN: <input name="isbn" /></label></p>';
        htmlString += '<p><label>Title: <input name="title" /></label></p>';
        htmlString += '<p><label>Year: <input name="year" /></label></p>';
        htmlString += '<p><button type="button" name="commit">Save</button></p>';
        htmlString += '</form>';

        element.insertAdjacentHTML('beforeend', htmlString);

        pl.view.createBook.setupUserInterface();
    }
}

pl.view.createBook = {
    setupUserInterface: function () {
        var saveButton = document.forms['Book'].commit;
        //load all book objects
        Book.loadAll();
        //set an event handler for the save/submit button
        saveButton.addEventListener("click", pl.view.createBook.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            Book.saveAll();
        });
    },

    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['Book'];
        var slots = {isbn: formEl.isbn.value, title: formEl.title.value, year: formEl.year.value};
        Book.add(slots);
        formEl.reset();
    }
};