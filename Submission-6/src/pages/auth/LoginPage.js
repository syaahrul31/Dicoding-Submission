import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../../components/auth/LoginInput';
import { login } from '../../utils/network-data';
import LocaleContext from '../../contexts/LocaleContext';

function LoginPage({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}
	const { locale } = React.useContext(LocaleContext);

	return (
		<section className='login-page'>
			<h2>
				{locale === 'id'
					? 'Yuk, login untuk menggunakan aplikasi.'
					: 'Come on, login to use the application.'}
			</h2>
			<LoginInput login={onLogin} />
			<p>
				{locale === 'id' ? 'Belum punya akun? ' : `Don't have an account yet? `}
				<Link to='/register'>
					{locale === 'id' ? 'Daftar di sini.' : 'Register here.'}
				</Link>
			</p>
		</section>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func,
	email: PropTypes.string,
	password: PropTypes.string,
};

export default LoginPage;
