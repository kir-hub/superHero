import logo from './logo.svg';
import './App.css';
import {Router, Route, Switch} from 'react-router-dom';
import browserHistory from './browserHistory';
import Hero from './componets/heroes/Hero'
import EditHero from './componets/heroes/HeroEdit'
import List from './componets/list/List'
import Info from './componets/Info/info'


function App() {
  return (
    <Router history={browserHistory}>
      
      <Switch>
        <Route exact path='/' component={Hero}/>
        <Route exact path='/Edit' component={EditHero}/>
        <Route exact path='/List' component={List}/>
        <Route exact path='/Info' component={Info}/>

        
      </Switch>
      
    </Router>
  );
}

export default App;
