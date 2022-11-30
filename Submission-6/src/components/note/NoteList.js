import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../../contexts/LocaleContext';

function NoteList({ notes }) {
	const [searchParams] = useSearchParams();
	const keyword = searchParams.get('note') || '';
	let datas = notes.filter((note) =>
		note.title.toLowerCase().includes(keyword.toLowerCase())
	);
	const { locale } = React.useContext(LocaleContext);

	return (
		<>
			{datas.length ? (
				<div className='notes-list'>
					{datas.map((note) => (
						<NoteItem
							id={note.id}
							title={note.title}
							createdAt={note.createdAt}
							body={note.body}
							key={note.id}
							{...note}
						/>
					))}
				</div>
			) : (
				<div className='notes-list-empty'>
					<p className='note-list__empty'>
						{locale === 'id' ? 'Tidak ada Catatan' : 'notes not found'}
					</p>
				</div>
			)}
		</>
	);
}

NoteList.propTypes = {
	notes: PropTypes.arrayOf(PropTypes.object),
};

export default NoteList;
