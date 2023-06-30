import React, { useContext } from 'react';
import './MovementItem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronDown } from "react-icons/bs";

import { movementsContext } from '../../App';

function MovementItem()
{
    const movement = useContext(movementsContext);

    return(
        <div className='movementContainer'>
            <div className='row h-100'>
                <div className="col-2 h-100 d-flex justify-content-center align-items-center">
                    <div className={`circleType ${movement.type == "gasto" ? "circleGasto" : "circleIngreso" }`}></div>
                </div>
                <div className="col-5">
                    <div className="movementTitle h-100 d-flex align-items-center">
                        <p>{ movement.title }</p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="movementAmount h-100 d-flex justify-content-end align-items-center">
                        <span className={movement.type == "gasto" ? "amountGasto" : "amountIngreso" }>{ movement.type == "gasto" ? "-$" : "+$" }{movement.amount}</span>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <button className='arrowBtn'>
                        <BsChevronDown></BsChevronDown>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovementItem;