pl.view.clearPage = {
    clearContent: function () {
        var element = document.getElementById('content');
        var htmlString = ' ';

        element.innerHTML = "";
        console.log('Content cleared');
    }
}