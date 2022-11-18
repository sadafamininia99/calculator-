import React, { useState } from 'react'

function App() {
    const [result, SetResult] = useState('');
    const handelClick = () => {

    }
    return (
        <div className="container">
            <form>
                <input type={'text'} value={result} />


            </form>
            <div className='buttons'>

                <button name='/' onClick={handleCLick} >&divide;</button>
                <button name='7' onClick={handleCLick} >7</button>
                <button name='8' onClick={handleCLick} >8</button>
                <button name='9' onClick={handleCLick} >9</button>
                <button name='*' onClick={handleCLick} >&times;</button>
                <button name='4' onClick={handleCLick} >4</button>
                <button name='5' onClick={handleCLick} >5</button>
                <button name='6' onClick={handleCLick} >6</button>
                <button name='-' onClick={handleCLick} >-</button>
                <button name='1' onClick={handleCLick} >1</button>
                <button name='2' onClick={handleCLick} >2</button>
                <button name='3' onClick={handleCLick} >3</button>
                <button name='+' onClick={handleCLick} >+</button>
                <button name='0' onClick={handleCLick} >0</button>
                <button name='.' onClick={handleCLick} >.</button>
                <button className='span-two' onClick={calculate} >=</button>


            </div>

        </div>
    )
}

export default App