import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Card from './components/card'
import MovementItem from './components/movementitem';
import 'bootstrap/dist/css/bootstrap.min.css';

export const movementsContext = React.createContext();

function App() {

  const [movements, setMovements] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState(null);
  const [totalGastos, setTotalGastos] = useState(null);
  const [totalBalance, setTotalBalance] = useState(null);

  const getMovements = () =>
  {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;

    if(currentMonth < 10)
    {
      currentMonth = "0" + currentMonth;
    }

    console.log(currentMonth);

    fetch("http://localhost:3004/movements?date_like=/" + currentMonth + "/")
      .then(response =>
      {
        return response.json()
        .then(data =>
          {

            setMovements(data);
            getBalance(data);
          })
      })
      
  }

  const getBalance = (data) =>
  {
    let gastos = 0;
    let ingresos = 0;

    data.map((movement) =>
    {
      if(movement.type == "gasto")
      {
        gastos += movement.amount;
      }
      else if(movement.type == "ingreso")
      {
        ingresos += movement.amount;
      }

    });

    setTotalGastos(gastos);
    setTotalIngresos(ingresos);

    setTotalBalance(ingresos - gastos);
    
  }

  useEffect(() =>
  {
    getMovements();
    console.log(movements);
  }, [])

  return (
    
      <div className="App">
        <div className='container'>
          <Header></Header>

          <Card>
            <div className='row'>
              <div className='col-12 monthBalance'>
                <p>Balance del mes</p>
                <b><p>${ totalBalance != null ? totalBalance : 0 }</p></b>
              </div>
              <div className='row'>
              <div className='col-6 ingresosSection'>
                <p>Ingresos</p>
                <b><span>+{ totalIngresos != null ? totalIngresos : 0 }</span></b>
              </div>
              <div className='col-6 gastosSection'>
                <p>Gastos</p>
                <b><span>-${ totalGastos != null ? totalGastos : 0 }</span></b>
              </div>
                
              </div>
            </div>
          </Card>

          <div className='movementsOuter'>
            <div className='movementsContainer'>
              <p className='text-left'>Hoy - 6 Dic.</p>

              { movements.length > 0 ?
                movements.map((movement, index) =>
                {
                  return(
                    <movementsContext.Provider value={movement}>
                      <MovementItem key={index} />
                    </movementsContext.Provider>
                  );
                }) : null
              }

            </div>
          </div>

          <button className='addMovementBtn'>Agregar Movimiento</button>

        </div>
      </div>
    
  );
}

export default App;
