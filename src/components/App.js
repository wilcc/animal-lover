import React, { Component } from 'react';
import Header from './Header';
import animals from '../data/data';
import Cards from './Cards';
import SideBar from './SideBar';
import Search from './Search';

class App extends Component {
  state = { animals, disliked: [], liked: [], searchTerm: '' };
  handleLiked = (id) => {
    let test = false;
    this.state.liked.map((item) => {
      console.log(item.animalId);
      if (item[0].animalId === id) {
        test = true;
      }
    });
    if (test === false) {
      let newDisliked = this.state.disliked.filter(
        (item) => item[0].animalId !== id
      );
      let found = this.state.animals.filter((item) => item.animalId === id);
      let newLiked = [found, ...this.state.liked];
      this.setState({
        liked: newLiked,
        disliked: newDisliked,
      });
    }
  };

  handleDisLiked = (id) => {
    let test = false;
    this.state.disliked.map((item) => {
      console.log(item.animalId);
      if (item[0].animalId === id) {
        test = true;
      }
    });
    if (test === false) {
      let newLiked = this.state.liked.filter((item) => item[0].animalId !== id);
      let found = this.state.animals.filter((item) => item.animalId === id);
      this.setState({
        disliked: [found, ...this.state.disliked],
        liked: newLiked,
      });
    }
  };
  handleDiscard = (id) => {
    let { animals, disliked, liked } = this.state;
    let newAnimal = animals.filter((item) => item.animalId !== id);
    let newLiked = liked.filter((item) => item[0].animalId !== id);
    let newDisliked = disliked.filter((item) => item[0].animalId !== id);
    this.setState({
      animals: newAnimal,
      liked: newLiked,
      disliked: newDisliked,
    });
  };
  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Search
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
          }}
        >
          <Cards
            animals={this.state.animals}
            handleLiked={this.handleLiked}
            handleDisLiked={this.handleDisLiked}
            handleDiscard={this.handleDiscard}
            handleChange={this.handleChange}
            searchTerm={this.state.searchTerm}
          />
          <SideBar disliked={this.state.disliked} liked={this.state.liked} />
        </div>
      </div>
    );
  }
}

export default App;
