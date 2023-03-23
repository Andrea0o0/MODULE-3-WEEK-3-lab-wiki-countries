import React from "react";
import { Link } from 'react-router-dom'
import { Image, Card, Button } from 'react-bootstrap'

export default function CountriesList({img,name,id}){

    return (
        <Card className="Countries">
            <Link to={`/${id.toLowerCase()}`}>
            <Image src={`https://flagpedia.net/data/flags/icon/72x54/${img.toLowerCase()}.png`} alt={name} />
            <p>{name}</p>
            </Link>
        </Card>
    )
}