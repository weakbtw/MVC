const View = {
    renderBookList(books) {
        const bookList = document.getElementById('book-list');
        bookList.innerHTML = '';

        books.forEach((book) => {
            const li = document.createElement('li');
            li.textContent = `${book.title} - Автор: ${book.author}`;
            bookList.appendChild(li);
        });
    }
};
