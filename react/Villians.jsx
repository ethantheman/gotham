import React from 'react';
import VillianCard from './villianCard.jsx';
import db from'../firebase.js';

class Villians extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			villians: []
		}
	}

	componentDidMount() {
		db.ref('images').once('value', snap => {
		  if (snap.val()) {
		  	console.log(Object.values(snap.val()));
		    this.setState({villians: Object.values(snap.val())});
		    // this.setState(snap.val());
		  }
		});
	}

	render() {
		return (
		<div>
			<ul>
				{this.state.villians.map((villian, i) => {
					return (
					<li key={i}>
						<VillianCard imageUrl={villian[0]} closestMatch={villian[1]} percent_match={villian[2]} />
					</li>
					);
				})}
			</ul>
		</div>
		);
	}
}

export default Villians;