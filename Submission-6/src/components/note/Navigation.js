import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { HiArchive } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import { MdTranslate } from 'react-icons/md';
import { LocaleConsumer } from '../../contexts/LocaleContext';

function Navigation({ logout, name }) {
	return (
		<LocaleConsumer>
			{({ locale, toggleLocale }) => {
				return (
					<nav className='navigation'>
						<ul>
							<li>
								<button
									className='toggle-locale'
									title={locale === 'id' ? 'terjemah' : 'translate'}
									onClick={toggleLocale}
								>
									{locale === 'id' ? 'en' : 'id'}
									{<MdTranslate />}
								</button>
							</li>
							<li>
								<Link
									to='/actives'
									title={locale === 'id' ? 'beranda' : 'home'}
								>
									{<FaHome />}
								</Link>
							</li>
							<li>
								<Link
									to='/archives'
									title={locale === 'id' ? 'arsip' : 'archive'}
								>
									{<HiArchive />}
								</Link>
							</li>
							<li>
								<button
									className='button-logout'
									title={locale === 'id' ? 'keluar' : 'logout'}
									onClick={logout}
								>
									{name}
									<FiLogOut />
								</button>
							</li>
						</ul>
					</nav>
				);
			}}
		</LocaleConsumer>
	);
}

Navigation.propTypes = {
	logout: PropTypes.func,
	name: PropTypes.string,
};

export default Navigation;
