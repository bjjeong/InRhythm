import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {

    return(
      <div className="home-page">
        <div className="form-container row z-depth-2">
          <form onSubmit={this.handleSubmit} className="col s12">
            <h1 className="title"> iTunes Artist Search </h1>
            <div className="row">
              <div className="input-field col s12">
                <input
                  placeholder="Ex. 'Coldplay'"
                  id="artist"
                  type="text"
                  className="validate"
                  onChange={this.update("artist")}
                />
                <label htmlFor="artist">Please Enter an Artist</label>
              </div>
            </div>
            <button type="submit" className="btn waves-effect waves-light">Search</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;