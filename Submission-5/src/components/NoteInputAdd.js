import React from 'react';
import PropTypes from 'prop-types';

function NoteInputAdd({ inputBody, body }) {
	return (
		<div
			className='add-new-page__input__body'
			data-placeholder='catatan pribadi...'
			contentEditable
			onInput={inputBody}
			value={body}
		></div>
	);
}

NoteInputAdd.propTypes = {
	inputBody: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
	body: PropTypes.string,
	value: PropTypes.string,
};

export default NoteInputAdd;
