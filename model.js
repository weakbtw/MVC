const Model = {
    books: [],

    addBook(title, author) {
        this.books.push({ title, author });
    },

    getBooks() {
        return this.books;
    }
};
