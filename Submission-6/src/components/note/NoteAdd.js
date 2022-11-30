import React from 'react';
import PropTypes from 'prop-types';
import NoteInput from './NoteInput';
import NoteInputAdd from './NoteInputAdd';
import { FaCheckCircle } from 'react-icons/fa';
import LocaleContext from '../../contexts/LocaleContext';

function NoteAdd({ title, body, inputTitle, inputBody, handleSubmit }) {
	const { locale } = React.useContext(LocaleContext);
	return (
		<div className='form_wrapper'>
			<section className='add-new-page'>
				<div className='add-new-page__input'>
					<form onSubmit={handleSubmit}>
						<NoteInput
							value={title}
							inputTitle={inputTitle}
							placeHolder={locale === 'id' ? 'judul catatan' : 'note title'}
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
