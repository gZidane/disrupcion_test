import React from "react";
import './Header.css';


function Header()
{

    const getMovementsByMonth = (event) =>
    {
        console.log(event.target);
    };

    return(
        <div className="headerCont">
            <div className="monthsContainer">
                <div className="monthItem" data-month="01" onClick={getMovementsByMonth}>
                    <span>Enero</span>
                </div>
                <div className="monthItem" data-month="02">
                    <span>Febrero</span>
                </div>
                <div className="monthItem" data-month="03">
                    <span>Marzo</span>
                </div>
                <div className="monthItem" data-month="04">
                    <span>Abril</span>
                </div>
                <div className="monthItem" data-month="05">
                    <span>Mayo</span>
                </div>
                <div className="monthItem" data-month="06">
                    <span>Junio</span>
                </div>
                <div className="monthItem" data-month="07">
                    <span>Julio</span>
                </div>
                <div className="monthItem" data-month="08">
                    <span>Agosto</span>
                </div>
                <div className="monthItem" data-month="09">
                    <span>Septiembre</span>
                </div>
                <div className="monthItem" data-month="10">
                    <span>Octubre</span>
                </div>
                <div className="monthItem" data-month="11">
                    <span>Noviembre</span>
                </div>
                <div className="monthItem" data-month="12">
                    <span>Diciembre</span>
                </div>
            </div>
            
        </div>
    )
}
export default Header;