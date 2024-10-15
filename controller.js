const Controller = {
    init() {
        this.bindEventListeners();
        this.updateView();
    },

    bindEventListeners() {
        const form = document.getElementById('book-form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const titleInput = document.getElementById('title');
            const authorInput = document.getElementById('author');
            const bookTitle = titleInput.value.trim();
            const bookAuthor = authorInput.value.trim();

            if (bookTitle) {
                Model.addBook(bookTitle, bookAuthor);
                this.updateView();
                titleInput.value = '';
                authorInput.value = 'Малий Артем Васильович';
            }
        });
    },

    updateView() {
        const books = Model.getBooks();
        View.renderBookList(books);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Controller.init();
});
