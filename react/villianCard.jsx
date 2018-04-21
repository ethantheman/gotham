import React from "react";

class villianCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>
		{this.props.imageUrl === "" ? null : <img src={this.props.imageUrl} />}
		{this.props.closestMatch === "" ? null : <div><h3>Closest Match:</h3><p>{this.props.closestMatch}</p></div>}
		{this.props.percent_match === null ? null : <div><h3>Percent Match:</h3><p>{this.props.percent_match}</p></div>}
	</div>
	}
}

export default villianCard;