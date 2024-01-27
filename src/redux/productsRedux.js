/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getComparedProducts = ({ products }) =>
  products.filter(product => product.compared === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const TOGGLE_PRODUCT_COMPARED = createActionName('TOGGLE_PRODUCT_COMPARED');

/* action creators */
export const toggleProductFavorite = payload => ({
  payload,
  type: TOGGLE_PRODUCT_FAVORITE,
});

export const toggleProductCompared = payload => ({
  type: TOGGLE_PRODUCT_COMPARED,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    case TOGGLE_PRODUCT_COMPARED:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, compared: !product.compared }
          : product
      );
    default:
      return statePart;
  }
}
