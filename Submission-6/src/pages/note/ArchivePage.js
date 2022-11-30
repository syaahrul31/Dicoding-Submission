import React from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../../components/note/NoteList';
import NoteSearch from '../../components/note/NoteSearch';
import { getArchivedNotes } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';

function ArchivedNotes() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState(() => {
		return searchParams.get('keyword') || '';
	});
	const { locale } = React.useContext(LocaleContext);

	React.useEffect(() => {
		getArchivedNotes().then(({ data }) => {
			setNotes(data);
		});
	}, []);

	function handleChange(keyword) {
		setKeyword(keyword);
		setSearchParams({ keyword });
	}

	const filteredNotes = notes.filter((note) => {
		return note.title.toLowerCase().includes(keyword.toLowerCase());
	});

	return (
		<>
			<section>
				<h2>{locale === 'id' ? 'Catatan Arsip' : 'Archive Notes'}</h2>
				<NoteSearch keyword={keyword} handleChange={handleChange} />
				<NoteList notes={filteredNotes} />
			</section>
		</>
	);
}

export default ArchivedNotes;
