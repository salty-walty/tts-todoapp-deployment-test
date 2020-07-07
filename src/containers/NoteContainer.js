import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from '../components/Note'
import { deleteNote } from '../actions/BoardAction'

const NoteContainer = ({ id, title, body, deleteNote }) => (
  <Note
    id={id}
    title={title}
    body={body}
    onDeleteClicked={() => {
      deleteNote(id);
    }}
  />
)

NoteContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default connect(null, {
  deleteNote
})(NoteContainer)
