import React from 'react';
import PropTypes from 'prop-types';
import NoteInput from './NoteInput';

function NoteSearch({ keyword, handleChange }) {
	return (
		<form>
			<section className='homepage'>
				<h2>Catatan Aktif</h2>
				<section className='search-bar'>
					<NoteInput
						value={keyword}
						placeHolder='cari berdasarkan judul'
						inputTitle={handleChange}
						name='search'
						type='text'
					/>
				</section>
			</section>
		</form>
	);
}

NoteSearch.propTypes = {
	keyword: PropTypes.string,
	handleChange: PropTypes.func,
};

export default NoteSearch;
