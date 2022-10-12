import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteAdd from '../components/NoteAdd';
import { addNote } from '../utils/local-data';

function AddNote() {
	const navigate = useNavigate();
	let [title, setTitle] = useState('');
	let [body, setBody] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		addNote({ title, body });
		navigate('/');
	};
	return (
		<div className='page'>
			<NoteAdd
				title={title}
				body={body}
				inputTitle={(e) => setTitle(e.target.value)}
				inputBody={(e) => setBody(e.target.innerHTML)}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default AddNote;
