import React from 'react'
import ReactDOM from 'react-dom'

import LeftNav from '../LeftNav'

const links = [
    {
        active: true,
        url: '#',
        text: 'Hello world!'
    },
    {
        active: false,
        url: '#',
        text: 'Foo!'
    },
    {
        active: false,
        url: '#',
        text: 'Bar!'
    }
]

ReactDOM.render(
    <LeftNav links={links} />,
    document.getElementById('app')
)