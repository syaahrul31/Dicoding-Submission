import React from 'react';
import PropTypes from 'prop-types';

function NoteInput({
	type = 'text',
	value,
	name,
	className,
	placeHolder,
	inputTitle,
}) {
	return (
		<input
			type={type}
			value={value}
			name={name}
			className={className}
			placeholder={placeHolder}
			onChange={(e) => inputTitle(e)}
			autoComplete='off'
		/>
	);
}

NoteInput.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	name: PropTypes.string,
	className: PropTypes.string,
	placeHolder: PropTypes.string,
	inputTitle: PropTypes.func,
};

export default NoteInput;
