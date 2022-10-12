import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ActivePage from './pages/ActivePage';
import ArchivedPage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import AddPage from './pages/AddPage';
import NotFound from './pages/NoteFoundPage';

function App() {
	return (
		<div className='app-container'>
			<header>
				<h1>
					<Link to='/'>Aplikasi Catatan</Link>
				</h1>
				<nav className='navigation'>
					<ul>
						<li>
							<Link to='/actives'>Aktif</Link>
						</li>
						<li>
							<Link to='/archives'>Arsip</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Routes>
					<Route path='/' element={<ActivePage />} />
					<Route path='/actives' element={<ActivePage />} />
					<Route path='/archives' element={<ArchivedPage />} />
					<Route path='/notes/:id' element={<DetailPage />} />
					<Route path='/add' element={<AddPage />} />
					<Route path='/notfound' element={<NotFound />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
