import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	getNote,
	archiveNote,
	unarchiveNote,
	deleteNote,
} from '../utils/local-data';
import NoteDetail from '../components/NoteDetail';
import NoteButton from '../components/NoteButton';
import { FaArchive, FaTrash, FaInbox } from 'react-icons/fa';

function DetailNote() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [Note_Detail] = useState(getNote(id));
	const handleDelete = (noteId) => {
		deleteNote(noteId);
		navigate('/');
	};
	const handleArchieve = (noteId) => {
		archiveNote(noteId);
		navigate('/');
	};
	const handleActivate = (noteId) => {
		unarchiveNote(noteId);
		navigate('/');
	};

	return (
		<>
			<NoteDetail {...Note_Detail} />
			<div className='detail-page__action'>
				{Note_Detail.archived ? (
					<NoteButton
						id={Note_Detail.id}
						title='aktifkan catatan'
						child={<FaInbox />}
						className='action'
						handleClick={handleActivate}
					/>
				) : (
					<NoteButton
						id={Note_Detail.id}
						title='arsipkan catatan'
						child={<FaArchive />}
						className='action'
						handleClick={handleArchieve}
					/>
				)}
				<NoteButton
					id={Note_Detail.id}
					title='hapus catatan'
					child={<FaTrash />}
					className='action'
					handleClick={handleDelete}
				/>
			</div>
		</>
	);
}

export default DetailNote;
