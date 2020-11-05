import {React, Component} from 'react';
import './App.css';

import CardList from './CardList/CardList';
import Form from './Form/Form';

// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

class App extends Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
	render() {
  	return (
    	<div>
    	  <div className="header">The GitHub Cards App</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
    	</div>
    );
  }	
}

// class App1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <App title="The GitHub Cards App" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <div>
//   <App title="The GitHub Cards App" />
// </div>
//   mountNode,
// );

export default App;