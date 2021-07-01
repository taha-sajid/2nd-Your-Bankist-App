import { React, useState } from 'react'
import { FaArrowDown } from 'react-icons/fa';
import { UseGlobalContext } from './Context-Api';

export let sortedMovement = [];
export const Summary = () => {
    const [sorted, setSorted] = useState(true)
    const { currentUser, balance, movements, movementSorted } = UseGlobalContext();

    let valueIn = currentUser.movements.filter((value) => value > 0)
    let valueOut = currentUser.movements.filter((value) => value < 0)

    // calculate valueIn and valueOut
    valueIn = valueIn.reduce(function (acc, cur) { return acc + cur }, 0)
    valueOut = valueOut.reduce(function (acc, cur) { return acc + cur }, 0)

    //calculate Interest
    const interest = (balance * 5) / 100;

    // Sorting Method
    const sorting = () => {
        setSorted(!sorted)
        movementSorted();
        return sortedMovement = sorted ? movements.slice().sort((a, b) => b - a) : currentUser.movements;
    }
  
    return (
        <>
            {/* <!-- SUMMARY --> */}

            <div className="summary">
                <p className="summary__label">In</p>
                <p className="summary__value summary__value--in">{valueIn}$</p>
                <p className="summary__label">Out</p>
                <p className="summary__value summary__value--out">{-(valueOut)}$</p>
                <p className="summary__label">Interest</p>
                <p className="summary__value summary__value--interest">{interest}$</p>
                <button className="btn--sort" onClick={sorting}> sort <FaArrowDown /></button>
            </div>


        </>
    )
}
