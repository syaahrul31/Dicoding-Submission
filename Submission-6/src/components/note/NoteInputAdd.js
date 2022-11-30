import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../../contexts/LocaleContext';

function NoteInputAdd({ inputBody, body }) {
	const { locale } = React.useContext(LocaleContext);
	return (
		<div
			className='add-new-page__input__body'
			data-placeholder={locale === 'id' ? 'catatan pribadi' : 'personal note'}
			contentEditable
			onInput={inputBody}
			value={body}
		></div>
	);
}

NoteInputAdd.propTypes = {
	inputBody: PropTypes.func.isRequired,
	body: PropTypes.string,
};

export default NoteInputAdd;
