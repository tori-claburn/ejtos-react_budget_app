import React, { useContext } from 'react';
import { AppContext} from '../context/AppContext';
import './DropDown.css'


const Currencies = () => {
  const { currency, dispatch,  } = useContext(AppContext);
  

    const changeCurrency = (e)=>{
      dispatch({
          type: 'CHG_CURRENCY',
          payload: e,
      })
    }
        return (
        <div className="alert alert-secondary dropdownContainer"> Currency {
          <select name="currency" id="currency" value={currency}
            onChange={event=>changeCurrency(event.target.value)}
            className="dropdown"
        
          >
              <option className="dropdown-options" value="$">$ Dollar</option>
              <option className="dropdown-options" value="£">£ Pound</option>
              <option className="dropdown-options" value="€">€ Euro</option>
              <option className="dropdown-options" value="₹">₹ Ruppee</option>
          </select>	
        }
        </div>
        
        
       
    );
};

export default Currencies;