
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import FreeClass from './components/FreeClass/FreeClass';
import NotFound from './components/NotFound/NotFound';
import Registration from './components/Registration/Registration';
import Home from './components/Home/Home';
import CourcePlan from './components/CourcePlan/CourcePlan';





function App() {


  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
  
<BrowserRouter>



<Header></Header>


<Switch>
  
  <Route exact path='/home'>
    <Home></Home>

  </Route>
   <Route exact path='/'>
    <Home></Home>

  </Route>

  <Route exact path='/about' >
    <About></About>

    </Route>
    

    <Route exact path='/course-plan'>
      <CourcePlan></CourcePlan>
    
    </Route>


    <Route exact path='/registration'>
      <Registration></Registration>
    
    </Route>
    
    <Route exact path='/freeclass'>
      <FreeClass></FreeClass>

    
    </Route>

    <Route exact path='*'>
      <NotFound></NotFound>
    
    </Route>
    

 

   
   
   

 
    

    
</Switch>

<Footer></Footer>


</BrowserRouter>

      
    </div>
  );
}

export default App;
