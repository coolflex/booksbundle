import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Book } from '../data/books';

interface BookCarouselProps {
  books: Book[];
}

export function BookCarousel({ books }: BookCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= books.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const visibleBooks = () => {
    const result = [];
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % books.length;
      result.push(books[index]);
    }
    return result;
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-8">
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex gap-6 overflow-hidden">
          {visibleBooks().map((book, index) => (
            <div
              key={book.id}
              className="flex-shrink-0 w-48 transition-all duration-300 hover:scale-105"
            >
              <div className="relative group">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-48 h-64 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold">{book.title}</h3>
                  <p className="text-white/80 text-sm">{book.author}</p>
                  <p className="text-white font-bold mt-2">${book.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 text-white bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}