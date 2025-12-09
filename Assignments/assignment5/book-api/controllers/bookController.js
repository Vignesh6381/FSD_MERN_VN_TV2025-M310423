const book = require('../models/book');
const Book = require('../models/book');


exports.createBook = async (req, res) => {
    try {
        const { title, author, publishedYear, genre } = req.body;

        const newBook = await Book.create({
            title, author, publishedYear, genre,
        });

        res.status(201).json(newBook);
    }
    catch (err) {
        console.log('Error Creating book:', err.message)
        res.status(400).json({ message: 'Failed to create book', error: err.message })
    }
};


exports.getAllBooks = async (req, res) => {
    try {
        const { genre } = req.query;
        const filter = {};

        if (genre) {
            filter.genre = genre;
        }

        const books = await Book.find(filter).sort({ publishedYear: 1 })

        res.json(books);
    } catch (err) {
        console.error('Error fetching books:', err.message);
        res.status(500).json({ message: 'failed to fetch books', error: err.message });
    }

};


exports.getBookById = async (req, res) => {
      try{
        const {id} = req.params;
        const books = await Book.findById(id);

        if(!book){
            return res.status(404).json({message: 'book not found'});
        }
        res.json(books);

      } catch(err){
        console.error('error fetching book:',err.message);
        res.status(400).json({message:'inavlid ID or error fetching book',error: err.message});
      }
};


exports.updateBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,          // return updated document
      runValidators: true // validate according to schema
    });

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(updatedBook);
  } catch (err) {
    console.error('Error updating book:', err.message);
    res.status(400).json({ message: 'Failed to update book', error: err.message });
  }
};




exports.deleteBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    console.error('Error deleting book:', err.message);
    res.status(400).json({ message: 'Failed to delete book', error: err.message });
  }
};