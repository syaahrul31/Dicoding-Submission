import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NoteList from '../../components/note/NoteList';
import NoteSearch from '../../components/note/NoteSearch';
import { getActiveNotes } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';
import { FaPlusCircle, FaHistory } from 'react-icons/fa';

function ActiveNotes() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [notes, setNotes] = React.useState([]);
	const [keyword, setKeyword] = React.useState(() => {
		return searchParams.get('keyword') || '';
	});
	const { locale } = React.useContext(LocaleContext);

	React.useEffect(() => {
		getActiveNotes().then(({ data }) => {
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
				<h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}</h2>
				<NoteSearch keyword={keyword} handleChange={handleChange} />
				<NoteList notes={filteredNotes} />
			</section>
			<div className='homepage__action'>
				<Link to='/add'>
					<button
						className='action'
						type='button'
						title={locale === 'id' ? 'tambah catatan' : 'add note'}
					>
						<FaPlusCircle />
					</button>
				</Link>
				<Link to='/notfound'>
					<button
						className='action'
						type='button'
						title={locale === 'id' ? 'sejarah' : 'history'}
					>
						<FaHistory />
					</button>
				</Link>
			</div>
		</>
	);
}

export default ActiveNotes;
