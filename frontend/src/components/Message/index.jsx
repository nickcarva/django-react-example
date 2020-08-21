import React, { useState, useEffect } from 'react'

import api from '../../services/api'

import './styles.css'

function Message () {
    const [message, setMessage] = useState('Getting server response...')

    useEffect(() => {
        api.get('/api/')
            .then(res => {
                setMessage(res.data)
            })
    }, [])

    return (
        <h1 className="message-text">{message}</h1>
    )
}

export default Message
