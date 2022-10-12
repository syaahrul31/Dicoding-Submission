import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import NoteSearch from './NoteSearch';
import { useSearchParams } from 'react-router-dom';

function NoteList({ notes }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get('note') || '';
	const handleChange = (e) => {
		setSearchParams({ note: e.target.value });
	};

	let datas = notes.filter((note) =>
		note.title.toLowerCase().includes(keyword.toLowerCase())
	);

	return (
		<>
			<NoteSearch keyword={keyword} handleChange={handleChange} />

			{datas.length ? (
				<div className='notes-list'>
					{datas.map((note, index) => (
						<NoteItem
							id={note.id}
							title={note.title}
							createdAt={note.createdAt}
							body={note.body}
							key={index}
						/>
					))}
				</div>
			) : (
				<div className='notes-list-empty'>
					{keyword.length ? (
						<p className='note-list__empty'>
							Tidak ditemukan catatan dengan judul ' {keyword} '
						</p>
					) : (
						<p>Tidak ada Catatan</p>
					)}
				</div>
			)}
		</>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
