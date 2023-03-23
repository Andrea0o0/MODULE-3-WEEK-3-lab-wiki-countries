import React,{useState,useEffect} from "react";
import CountriesList from "../components/CountriesList";
import { Outlet} from 'react-router-dom'
import {Container,Col} from 'react-bootstrap'

export default function Home({countriesprop}){
    // eslint-disable-next-line
    const [countries,setCountries] = useState([...countriesprop])

    return(
        <div>
        <Container className="Home">
             <Col>
                {countries.map((elem,id) => (
                    <CountriesList key={id} img={elem.alpha2Code} name={elem.name.common} id={elem.alpha3Code} />
                ))}
            </Col>
            <Col>
                <Outlet />
            </Col>
            
        </Container>            
        </div>
    )
}