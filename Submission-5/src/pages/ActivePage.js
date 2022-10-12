import React from 'react';
import { Link } from 'react-router-dom';
import NoteList from '../components/NoteList';
import { getActiveNotes } from '../utils/local-data';
import { FaPlusCircle, FaHistory } from 'react-icons/fa';

class ActiveNotes extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			ActiveNotes: getActiveNotes(),
		};
	}

	render() {
		return (
			<>
				<section>
					<NoteList notes={this.state.ActiveNotes} />
				</section>
				<div className='homepage__action'>
					<Link to='/add'>
						<button className='action' type='button' title='tambah catatan'>
							<FaPlusCircle />
						</button>
					</Link>
					<Link to='/notfound'>
						<button className='action' type='button' title='history'>
							<FaHistory />
						</button>
					</Link>
				</div>
			</>
		);
	}
}

export default ActiveNotes;
