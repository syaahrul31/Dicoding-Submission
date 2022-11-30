import React from 'react';
import PropTypes from 'prop-types';

function NoteButton({ id, title, child, className, handleClick }) {
	return (
		<button
			type='button'
			onClick={() => handleClick(id)}
			className={className}
			title={title}
		>
			{child}
		</button>
	);
}

NoteButton.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	child: PropTypes.element.isRequired,
	className: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default NoteButton;
