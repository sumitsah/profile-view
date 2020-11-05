import { React, Component } from 'react';
import './Card.css';

class Card extends Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="githubProfile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

export default Card;