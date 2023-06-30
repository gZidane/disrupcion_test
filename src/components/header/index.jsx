import React, { useContext } from "react";
import './Header.css';
import { headerContext } from '../../App';



function Header()
{
    const { onGetMovementsByMonth } = useContext(headerContext);


    const getMovementsByMonth = (event) =>
    {
        // console.log(event.target.dataset.month);

        onGetMovementsByMonth(event.target.dataset.month);
    };

    return(
        <div className="headerCont">
            <div className="monthsContainer">
                <div className="monthItem">
                    <span data-month="01" onClick={getMovementsByMonth}>Enero</span>
                </div>
                <div className="monthItem" data-month="02">
                    <span data-month="02" onClick={getMovementsByMonth}>Febrero</span>
                </div>
                <div className="monthItem" data-month="03">
                    <span data-month="03" onClick={getMovementsByMonth}>Marzo</span>
                </div>
                <div className="monthItem" data-month="04">
                    <span data-month="04" onClick={getMovementsByMonth}>Abril</span>
                </div>
                <div className="monthItem" data-month="05">
                    <span data-month="05" onClick={getMovementsByMonth}>Mayo</span>
                </div>
                <div className="monthItem" data-month="06">
                    <span data-month="06" onClick={getMovementsByMonth}>Junio</span>
                </div>
                <div className="monthItem" data-month="07">
                    <span data-month="07" onClick={getMovementsByMonth}>Julio</span>
                </div>
                <div className="monthItem" data-month="08">
                    <span data-month="08" onClick={getMovementsByMonth}>Agosto</span>
                </div>
                <div className="monthItem" data-month="09">
                    <span data-month="09" onClick={getMovementsByMonth}>Septiembre</span>
                </div>
                <div className="monthItem" data-month="10">
                    <span data-month="10" onClick={getMovementsByMonth}>Octubre</span>
                </div>
                <div className="monthItem" data-month="11">
                    <span data-month="11" onClick={getMovementsByMonth}>Noviembre</span>
                </div>
                <div className="monthItem" data-month="12">
                    <span data-month="12" onClick={getMovementsByMonth}>Diciembre</span>
                </div>
            </div>
            
        </div>
    )
}
export default Header;