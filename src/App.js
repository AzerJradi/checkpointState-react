// Import the necessary dependencies
import React, { Component } from 'react';
import './App.css'; // Import the CSS file for styling

class App extends Component {
  constructor(props) {
    super(props);
    // Initial state setup
    this.state = {
      person: {
        fullName: 'Lionel Messi', // Full name of the person
        bio: 'The most player hated by any Real Madrid player (because he beats them every time hihihihi).', // Biography
        imgSrc: 'https://i.pinimg.com/736x/8e/68/6e/8e686ee67d3bb219cd319e373d3966b3.jpg', // Image URL
        profession: 'Beater of every record', // Profession
      },
      show: false, // Flag to control the visibility of the person's profile
      intervalId: null, // Interval ID for the timeSinceMount interval
      timeSinceMount: 0, // Time since the component was mounted
    };
  }
  componentDidMount() {
    // Set up the interval to update timeSinceMount every second
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 0.5, // Increment timeSinceMount every half-second
      }));
    }, 1000);
    this.setState({ intervalId });
  }
  componentWillUnmount() {
    // Clear the interval when the component is unmounted to avoid memory leaks
    clearInterval(this.state.intervalId);
  }
  // Toggle the show state when the button is clicked
  handleToggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  render() {
    const { person, show, timeSinceMount } = this.state;
    return (
      <div>
        {/* Button to toggle the visibility of the person's profile */}
        <button onClick={this.handleToggleShow}>Toggle Show</button>
        {/* Render the person's profile if the show state is true */}
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <h4>{person.bio}</h4>
            <img src={person.imgSrc} alt="Person" />
            <p>Profession: {person.profession}</p>
          </div>
        )}
        {/* Display the time interval since the component was mounted */}
        <p>Messi's goals per second: {timeSinceMount} seconds</p>
      </div>
    );
  }
}

export default App;
