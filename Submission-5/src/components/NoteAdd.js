import React from 'react';
import PropTypes from 'prop-types';
import NoteInput from './NoteInput';
import NoteInputAdd from './NoteInputAdd';
import { FaCheckCircle } from 'react-icons/fa';

function NoteAdd({ title, body, inputTitle, inputBody, handleSubmit }) {
	return (
		<div className='form_wrapper'>
			<section className='add-new-page'>
				<div className='add-new-page__input'>
					<form onSubmit={handleSubmit}>
						<NoteInput
							value={title}
							inputTitle={inputTitle}
							placeHolder='judul catatan'
							name='title'
							className='add-new-page__input__title'
							type='text'
						/>
						<NoteInputAdd inputBody={inputBody} body={body} />
						<div className='add-new-page__action'>
							<button className='action' type='submit'>
								<FaCheckCircle />
							</button>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}

NoteAdd.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string.isRequired,
	inputTitle: PropTypes.func.isRequired,
	inputBody: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
};

export default NoteAdd;
