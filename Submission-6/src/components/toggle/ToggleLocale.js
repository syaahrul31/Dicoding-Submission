import { LocaleConsumer } from '../../contexts/LocaleContext';
import { MdTranslate } from 'react-icons/md';

function ToggleLocale() {
	return (
		<LocaleConsumer>
			{({ locale, toggleLocale }) => {
				return (
					<button className='toggle-locale' onClick={toggleLocale}>
						{locale === 'id' ? 'en' : 'id'} {<MdTranslate />}
					</button>
				);
			}}
		</LocaleConsumer>
	);
}

export default ToggleLocale;
