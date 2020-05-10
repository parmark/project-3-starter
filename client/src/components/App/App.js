import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import API from '../../lib/API';
import TokenStore from '../../lib/TokenStore';
import AuthContext from '../../contexts/AuthContext';
import Navigation from '../../components/Navigation/Navigation';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import Galleries from '../../pages/Galleries'
import NotFound from '../../pages/NotFound/NotFound';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = (user, authToken) => {
      TokenStore.setToken(authToken);
      this.setState(prevState => ({ auth: { ...prevState.auth, user, authToken } }));
    };

    this.handleLogout = () => {
      TokenStore.clearToken();
      this.setState(prevState => ({ auth: { ...prevState.auth, user: undefined, authToken: undefined } }));
    }

    this.handleRefresh = () => {
      const { authToken } = this.state.auth;
      if (!authToken) return;

      API.Users.getMe(authToken)
        .then(response => response.data)
        .then(user => this.setState(prevState => ({ auth: { ...prevState.auth, user } })))
        .catch(err => console.log(err));
    }

    this.state = {
      auth: {
        user: undefined,
        authToken: TokenStore.getToken(),
        onLogin: this.handleLogin,
        onLogout: this.handleLogout, 
        onRefresh: this.handleRefresh
      }, 

      homeGallery:[
        {
          alt:"A sketch of a woman inside of a fishbol",
          image:"https://paintingvalley.com/sketches/nice-sketches-13.jpg"
        },
        {
          
          alt:"A sketch of an eye",
          image:"https://images.template.net/wp-content/uploads/2017/01/26001821/Best-Sketch-Drawing-Ideas.jpg"
        },
        {
          alt:"A sketch of a hand",
          image:"https://cdn.clipart.email/ec6831db71bb28893f1d8dda0a7f1561_check-out-the-28-cool-drawing-ideas-for-unleashing-the-creativity-_600-450.jpeg"
        },
        {
          alt:"A sketch of a sad woman",
          image:"https://bestsketches.com/wp-content/uploads/2020/04/Facial-cute-sketches-easy.jpg"
        },
        {
          alt:"A sketch of a mountain",
          image:"https://1.bp.blogspot.com/-KsHtmvIza_U/T6APoSGzB-I/AAAAAAAAA2Y/YfetAFJVrYc/w640/Sketch-of-Mt-Ama-Dablam.jpg"
        },
        {
          alt:"A sketch of a Rose",
          image:"https://i.pinimg.com/originals/29/53/7a/29537a687d5a399483294ed3bebe22aa.jpg"
        },
        {
          alt:"a sketch of a tree and hand combined",
          image:"https://i.pinimg.com/originals/09/c2/05/09c205dd791dd2e11a8396127f5b7ddb.jpg"
        },
        {
          alt:"a sketch of a landscape",
          image:"https://i.ytimg.com/vi/1rHYcXmKd9o/maxresdefault.jpg"
        },
      ],
      galleries: []
    }
  }

  componentDidMount() {
    this.handleRefresh();
  }

  render() {
    return (
      <AuthContext.Provider value={this.state.auth}>
        <div className='App'>
          <Navigation />
          <div>
            <Switch>
              <Route exact path='/' render={()=> <Home homeGallery={this.state.homeGallery}/>}
               />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route 
                path='/galleries' 
                render={() => <Galleries galleries={this.state.galleries} />}  
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </AuthContext.Provider>
    );
  }
}

export default App;
