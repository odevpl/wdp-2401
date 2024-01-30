/* selectors */

/* action name creator */
const reducerName = 'currentMode';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_CURRENT_MODE = createActionName('CHANGE_CURRENT_MODE');

/* action creators */
export const changeCurrentMode = payload => ({
  payload,
  type: CHANGE_CURRENT_MODE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_CURRENT_MODE:
      return { currentMode: action.payload };
    default:
      return statePart;
  }
}
