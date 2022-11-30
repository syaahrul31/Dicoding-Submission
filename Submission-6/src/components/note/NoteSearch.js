import React from 'react';
import PropTypes from 'prop-types';
import NoteInput from './NoteInput';
import { LocaleConsumer } from '../../contexts/LocaleContext';

function NoteSearch({ keyword, handleChange }) {
	return (
		<LocaleConsumer>
			{({ locale }) => {
				return (
					<form>
						<section className='homepage'>
							<section className='search-bar'>
								<NoteInput
									value={keyword}
									placeHolder={
										locale === 'id'
											? 'Cari berdasarkan judul'
											: 'Search by title'
									}
									inputTitle={(event) => handleChange(event.target.value)}
									name='search'
									type='text'
								/>
							</section>
						</section>
					</form>
				);
			}}
		</LocaleConsumer>
	);
}

NoteSearch.propTypes = {
	keyword: PropTypes.string,
	handleChange: PropTypes.func,
};

export default NoteSearch;
