/* selectors */

/* action name creator */
const reducerName = 'currentMode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_CURRENT_MODE = createActionName('SET_CURRENT_MODE');

/* action creators */
export const setCurrentMode = payload => ({
  payload,
  type: SET_CURRENT_MODE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SET_CURRENT_MODE:
      return { currentMode: action.payload };
    default:
      return statePart;
  }
}
