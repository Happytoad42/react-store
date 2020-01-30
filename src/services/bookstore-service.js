export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'Red Hat',
      author: 'Charles Perrault',
      price: 15,
      coverImage:
        'https://img3.labirint.ru/rc/9c7799060d68c4ec412cab8542c7ca58/220x340/books61/604097/cover.jpg?1564036096'
    },
    {
      id: 2,
      title: 'Cinderella',
      author: 'Grimm Brothers',
      price: 25,
      coverImage:
        'https://lh4.googleusercontent.com/_3nP82BHufuU/TYyHQJ9nJiI/AAAAAAAAAHw/QqTxdWfwkQE/s512/25.jpg'
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Boom! Headshot'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
