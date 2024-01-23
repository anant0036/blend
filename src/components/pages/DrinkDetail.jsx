import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import './Style.scss'
import { useParams } from 'react-router-dom';

function DrinkDetail() {

    const { id } = useParams();
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data.drinks)
                setData(data.drinks)
            }).catch((error) => {
                console.error("API is not working", error)
            })
    }, [])

    const renderedDrinkWithId = data.map(drink => (
        <div key={drink.idDrink} className='sub-container-detail'>
            <div className='container-highlight'>
                <h2>{drink.strDrink}</h2>
                <h3>Glass type : {drink.strGlass}</h3>
                <img src={drink.strDrinkThumb} />
            </div>
            <div className='container-contant'>
                <div className='ingredients'>
                    <h2>Ingredients</h2>
                    <p><span>{drink.strMeasure1}</span>{drink.strIngredient1}</p>
                    <p><span>4 dashes </span>Lime</p>
                    <p><span>1 dl Schweppes </span>Angostura bitters</p>
                    <p><span>5 cl </span>Tonic water</p>
                    <p><span>4 </span>Ice</p>
                </div>
                <div className='instructions'>
                    <h2>Instructions</h2>
                    <p>{drink.strInstructions}</p>
                </div>
            </div>
        </div>
    ))


    return (
        <>
            <NavBar />
            <div className='container-detail'>
                {renderedDrinkWithId}
            </div>
        </>
    )
}

export default DrinkDetail
