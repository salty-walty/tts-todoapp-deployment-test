import { combineReducers } from 'redux'
import { BoardActionTypes } from '../actions/BoardAction'
 
function notesReducer(currentNotes = [], action) {
  switch (action.type){
    case BoardActionTypes.ADD_NEW_NOTE:
        let newNote = {
            id: Date.now(),
            title: "New Note",
            body: "Sample note body text"
        };
        return [...currentNotes, newNote];
    case BoardActionTypes.DELETE_NOTE:
      return currentNotes.filter((note) => note.id !== action.id);
    default:
      return currentNotes;
  }
}
 
export default combineReducers({
  notes: notesReducer
});