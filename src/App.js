import React, {useState,useEffect} from 'react';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './views/Home';
import ErrorPage from './views/ErrorPage';
import CountryDetails from './components/CountryDetails';
import countryService from './services/countriesService';

function App() {
      // eslint-disable-next-line
      const [countries,setCountries] = useState('')

      const getCountries = async () => {
          try {
              const response = await countryService.getCountries()
              setCountries(response)
          } catch (error) {  
              console.log(error)
          }
      }
  
      useEffect(() => {
          getCountries()
      },[])


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={countries.length>0 ? <Home countriesprop={countries}/>: <p>Loading...</p>}>
          <Route path=":countryId" element={countries.length>0 ? <CountryDetails countries={countries}/>: <p>Loading...</p>}/>
        </Route>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
