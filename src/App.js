import React, { useState } from 'react'

function App() {
    const [result, SetResult] = useState('')
    return (
        <div className="container">
            <form>
                <input type={'text'} value={result} />


            </form>
            <div className='buttons'>
 
            </div>

        </div>
    )
}

export default App