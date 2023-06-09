import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider'
import { getBasketTotal } from './reducer';


function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  
  return (
    <div className='subtotal'>
    <CurrencyFormat 
      
      renderText={(value) => (
        <>
        <p>
            subtotal ({basket.length} items): <strong>{value}</strong>
            {/* <strong>{`${value}`}</strong> */}
        </p>
        <small className='subtotal__gift'>
            <input type='checkbox'/> the order contains a gift
        </small>
        </>
      )}
      decimalScale={0}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSpacing={true}
      prefix={'₹'}
    />  
    <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal;
