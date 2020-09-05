import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { Container } from '@material-ui/core';
import Posts from './Components/Posts/Posts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Friends from './Components/Friends/Friends';
import Settings from './Components/Settings/Settings';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div>
      <Container>
        <Header></Header>
        <Router>
          <Switch>
            <Route path="/posts">
              <Posts></Posts>
            </Route>
            <Route path="/friends">
              <Friends></Friends>
            </Route>
            <Route path="/settings">
              <Settings></Settings>
            </Route>
            <Route exact path="/">
              <Posts></Posts>
            </Route>
            <Route path="/postCard/:postId">
              <PostDetails></PostDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </Container>

    </div>
  );
}

export default App;
