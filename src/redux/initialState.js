const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],

  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '1',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '2',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '3',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '4',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '5',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '6',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '7',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '8',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '9',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '10',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '11',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '12',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '13',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '14',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '15',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '16',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '17',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '18',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '19',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '20',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '21',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      oldPrice: '',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '22',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '23',
      favorite: false,
      compared: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      oldPrice: '$40',
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      image: '24',
      favorite: false,
      compared: false,
    },
  ],

  cart: {
    products: [],
  },
};

export default initialState;
