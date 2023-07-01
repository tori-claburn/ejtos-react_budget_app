import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';

// Add code to import the other components here under
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
<<<<<<< HEAD
                        {/* Add Budget component here under */}  
                    <div className='col-sm'>
                        <Budget />
                    </div> 

                        {/* Add Remaining component here under */} 
                    <div className='col-sm'>
                        <Remaining />
                    </div>       

                        {/* Add ExpenseTotal component here under */}  
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>      
                       
                        {/* Add ExpenseList component here under */} 
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>       

                        {/* Add ExpenseItem component here under */}  
                    <div className='col-sm'>
                        <ExpenseItem />
                    </div>      

                        {/* Add AllocationForm component here under */} 
                    <div classname='col-sm'>
                        <AllocationForm />
                    </div>       
=======
                        {/* Add Budget component here under */}        

                        {/* Add Remaining component here under */}        

                        {/* Add ExpenseTotal component here under */}        
                       
                        {/* Add ExpenseList component here under */}         

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        
>>>>>>> a76ae12e135bb0a996a63edb53226d1f1ce48868

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
