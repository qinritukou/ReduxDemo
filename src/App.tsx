import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { NewNoteInput } from './NewNoteInput';
import { NotesState } from './notesReducer';
import { addNote } from './actions'

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)

  const dispath = useDispatch()

  const onAddNote = (note: string) => {
    dispath(addNote(note))
  }

  return (
    <div>
      <NewNoteInput addNote={onAddNote}/>
      <hr/>
      <ul>
        {
          notes.map((note) => {
            return <li key={note}>{note}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
