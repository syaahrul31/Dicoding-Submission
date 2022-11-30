import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	getNote,
	archiveNote,
	unarchiveNote,
	deleteNote,
} from '../../utils/network-data';
import NoteDetail from '../../components/note/NoteDetail';
import NoteButton from '../../components/note/NoteButton';
import { BiArchiveIn, BiArchiveOut, BiTrash } from 'react-icons/bi';
import LocaleContext from '../../contexts/LocaleContext';

function DetailNote() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [note, setNote] = useState('');

	useEffect(() => {
		const getData = async () => {
			const response = await getNote(id);
			setNote(response.data);
		};
		getData();
	}, [id]);

	const handleArchieve = async (noteId) => {
		await archiveNote(noteId);
		navigate('/');
	};
	const handleActivate = async (noteId) => {
		await unarchiveNote(noteId);
		navigate('/');
	};
	const handleDelete = async (noteId) => {
		await deleteNote(noteId);
		navigate('/');
	};
	const { locale } = React.useContext(LocaleContext);

	return (
		<>
			<NoteDetail
				title={note.title}
				createdAt={note.createdAt}
				body={note.body}
			/>
			<div className='detail-page__action'>
				{note.archived ? (
					<NoteButton
						id={note.id}
						title={locale === 'id' ? 'Aktifkan catatan' : 'activate note'}
						child={<BiArchiveOut />}
						className='action'
						handleClick={handleActivate}
					/>
				) : (
					<NoteButton
						id={note.id}
						title={locale === 'id' ? 'Arsipkan catatan' : 'archive note'}
						child={<BiArchiveIn />}
						className='action'
						handleClick={handleArchieve}
					/>
				)}
				<NoteButton
					id={note.id}
					title={locale === 'id' ? 'Hapus catatan' : 'delete note'}
					child={<BiTrash />}
					className='action'
					handleClick={handleDelete}
				/>
			</div>
		</>
	);
}

export default DetailNote;
