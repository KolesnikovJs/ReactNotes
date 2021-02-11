import React, { Component } from "react";
import Notes from './Notes';
import { withoutIndex } from '../utils';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [
        "Покупки: чай, молоко, кофе",
        "Дела: закончить перевод, сделать презентацию",
        "Ненужная заметка: удалить",
        "Нужная заметка: не удалять!"

      ] 
    };

  }


  onNoteDelete = (indexToRemove) => {
    this.setState(oldState => {
      return {
        notes: withoutIndex(oldState.notes, indexToRemove)
      }
    })
  }

  onNoteCreate = newNowText => {
    this.setState(oldState => {
      return {
        notes: [newNowText].concat(oldState.notes)
      }
    })
  }

  render() {
    
    return <Notes notes={this.state.notes} onDelete={this.onNoteDelete} onCreate={this.onNoteCreate}/>;

  }
}

export default App;
