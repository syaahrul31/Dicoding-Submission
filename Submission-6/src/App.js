import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { getUserLogged, putAccessToken } from './utils/network-data';
import { LocaleProvider } from './contexts/LocaleContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BiBookmark } from 'react-icons/bi';
import ToggleTheme from './components/toggle/ToggleTheme';
import ToggleLocale from './components/toggle/ToggleLocale';
import RegisterPage from './pages/auth/RegisterPage';
import LoginPage from './pages/auth/LoginPage';
import Navigation from './components/note/Navigation';
import ActiveNotes from './pages/note/ActivePage';
import ArchivedNotes from './pages/note/ArchivePage';
import DetailNote from './pages/note/DetailPage';
import AddNote from './pages/note/AddPage';
import NotFound from './pages/note/NoteFoundPage';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			authedUser: null,
			initializing: true,
			localeContext: {
				locale: localStorage.getItem('locale') || 'id',
				toggleLocale: () => {
					this.setState((prevState) => {
						const newLocale =
							prevState.localeContext.locale === 'id' ? 'en' : 'id';
						localStorage.setItem('locale', newLocale);
						return {
							localeContext: {
								...prevState.localeContext,
								locale: newLocale,
							},
						};
					});
				},
			},

			theme: localStorage.getItem('theme') || 'light',
			toggleTheme: () => {
				this.setState((prevState) => {
					const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
					localStorage.setItem('theme', newTheme);
					return {
						theme: newTheme,
					};
				});
			},
		};

		this.onLoginSuccess = this.onLoginSuccess.bind(this);
		this.onLogout = this.onLogout.bind(this);
	}

	async componentDidMount() {
		document.documentElement.setAttribute('data-theme', this.state.theme);
		const { data } = await getUserLogged();
		this.setState(() => {
			return {
				authedUser: data,
				initializing: false,
			};
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.theme !== this.state.theme) {
			document.documentElement.setAttribute('data-theme', this.state.theme);
		}
	}

	async onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();

		this.setState(() => {
			return {
				authedUser: data,
			};
		});
	}

	onLogout() {
		this.setState(() => {
			return {
				authedUser: null,
			};
		});
		putAccessToken('');
	}

	render() {
		if (this.state.initializing) {
			return null;
		}

		if (this.state.authedUser === null) {
			return (
				<LocaleProvider value={this.state.localeContext}>
					<ThemeProvider value={this.state}>
						<div className='app-container'>
							<header>
								<h1>
									<Link to='/'>
										{<BiBookmark />}
										{this.state.localeContext.locale === 'id'
											? ' Aplikasi Catatan'
											: ' Notes App'}
									</Link>
								</h1>
								<ToggleLocale />
								<ToggleTheme />
							</header>
							<main>
								<Routes>
									<Route
										path='/*'
										element={<LoginPage loginSuccess={this.onLoginSuccess} />}
									/>
									<Route path='/register' element={<RegisterPage />} />
								</Routes>
							</main>
						</div>
					</ThemeProvider>
				</LocaleProvider>
			);
		}

		return (
			<LocaleProvider value={this.state.localeContext}>
				<ThemeProvider value={this.state}>
					<div className='app-container'>
						<header>
							<h1>
								<Link to='/'>
									{<BiBookmark />}
									{this.state.localeContext.locale === 'id'
										? ' Aplikasi Catatan'
										: ' Notes App'}
								</Link>
							</h1>
							<ToggleTheme />
							<Navigation
								logout={this.onLogout}
								name={this.state.authedUser.name}
							/>
						</header>
						<main>
							<Routes>
								<Route path='/' element={<ActiveNotes />} />
								<Route path='/actives' element={<ActiveNotes />} />
								<Route path='/archives' element={<ArchivedNotes />} />
								<Route path='/notes/:id' element={<DetailNote />} />
								<Route path='/add' element={<AddNote />} />
								<Route path='/*' element={<NotFound />} />
							</Routes>
						</main>
					</div>
				</ThemeProvider>
			</LocaleProvider>
		);
	}
}

export default App;
