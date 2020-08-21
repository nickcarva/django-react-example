import React, { useState, useEffect } from 'react'

import api from './services/api'

function App () {
    const [message, setMessage] = useState('Getting server response...')

    useEffect(() => {
        api.get('/api/')
            .then(res => {
                setMessage(res.data)
            })
    }, [])

    return (
        <div className="App">
            {message}
        </div>
    )
}

export default App
