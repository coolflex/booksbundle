export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
}

export const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Sarah Anderson",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    price: 24.99
  },
  {
    id: 2,
    title: "The Silent Echo",
    author: "James Mitchell",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
    price: 19.99
  },
  {
    id: 3,
    title: "Whispers in the Wind",
    author: "Emily Clarke",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
    price: 22.99
  },
  {
    id: 4,
    title: "The Lost Garden",
    author: "Robert Palmer",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    price: 21.99
  },
  {
    id: 5,
    title: "Beyond the Stars",
    author: "Luna Rivers",
    cover: "https://images.unsplash.com/photo-1531901599143-df5010ab9438?auto=format&fit=crop&q=80&w=800",
    price: 23.99
  },
  {
    id: 6,
    title: "The Art of Dreams",
    author: "Marcus Chen",
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    price: 25.99
  }
];