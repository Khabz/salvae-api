import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  userId:  {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  }
}, { timestamps: true });

const Note = mongoose.model('notes', NoteSchema);

export default Note;