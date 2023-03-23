import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom';
import countryService from "../services/countriesService";
import { Card,Image,Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CountryDetails({countries}){
    const { countryId } = useParams()
    const [country,setCountry] = useState('')
    const [loading, setLoading] = useState(true);

    const getCourse = async () => {
        try {
            const response = await countryService.getCountry(countryId.toUpperCase())
            setCountry(response)
            setLoading(false);

        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        getCourse()
    },[countryId])
    return (
        <Card className="Detail">
            {loading && <p>Loading...</p>}
            {!loading && country && 
            <>
                <Image src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={country.name.common} />
                <Card.Title>{country.name.common}</Card.Title>
                <Card.Body>
                    <Row>
                        <Card.Text>Capital</Card.Text>
                        <Card.Text>{country.capital}</Card.Text>
                    </Row>
                    <Card></Card>
                    <Row>
                        <Card.Text>Area</Card.Text>
                        <Card.Text>{country.area} km²</Card.Text>
                    </Row>
                    <Card></Card>
                    <Row>
                        <Card.Text>Borders</Card.Text>
                        {country.borders.length > 0 && country.borders.map((elem,id) => <Link key={id} to={`/${elem.toLowerCase()}`}>{countries.filter(country => country.alpha3Code === elem)[0].name.common}</Link>)}
                        
                    </Row>
                    <Card></Card>
                    
                </Card.Body>
            </>
            
            }
            
        </Card>
    )
}