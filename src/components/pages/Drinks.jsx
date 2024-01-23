import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import { useParams, useNavigate } from 'react-router-dom';
import './Style.scss'

function Drinks() {
    const { type } = useParams();
    const [data, setData] = useState([])
    const navigate = useNavigate();

    function handleDrinkDetail(id) {
        navigate(`/drinks/details/${id}`);
    }

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${type}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data.drinks)
            }).catch((error) => {
                console.error("API is not working", error)
            })
    }, [])

    const renderedDrinks = data.map(drink => (
        <div key={drink.idDrink} className='card'>
            <img src={drink.strDrinkThumb} alt="" />
            <h3>{drink.strDrink.substring(0, 21)}</h3>
            <p>{type === 'Non_Alcoholic' ? 'Non Alcoholic' : 'Alcoholic'}</p>
            <button type="button" onClick={()=> handleDrinkDetail(drink.idDrink)} className='bn5'>Details &#11177;</button>
        </div>
    ))

    return (
        <>
            <NavBar />
            <div className='drinks-container-bg'>
                {renderedDrinks}
            </div>
        </>
    )
}

export default Drinks
