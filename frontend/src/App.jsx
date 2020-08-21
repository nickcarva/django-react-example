import React from 'react'

import DjangoReact from './components/DjangoReact'
import Message from './components/Message'

import './styles.css'

function App () {
    return (
        <div className="app-container">
            <DjangoReact />
            <Message />
        </div>
    )
}

export default App
