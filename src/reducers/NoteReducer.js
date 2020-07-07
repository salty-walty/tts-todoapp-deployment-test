import { combineReducers } from 'redux'
 
function noteBodyReducer(currentBody = {}, action) {
  switch (action.type){
    case 'UPDATE_BODY':
      return Object.assign({}, currentBody, {
        body: action.body
      });
    default:
      return currentBody;
  }
}
 
function noteTitleReducer(currentTitle = {}, action) {
  switch (action.type){
    case 'UPDATE_TITLE':
      return Object.assign({}, currentTitle, {
        title: action.title
      });
    default:
      return currentTitle;
  }
}
 
const noteReducer = combineReducers({
  body: noteBodyReducer,
  title: noteTitleReducer
});
 
export default noteReducer;