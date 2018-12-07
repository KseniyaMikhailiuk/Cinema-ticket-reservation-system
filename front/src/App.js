import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Page from './containers/headeredpage'

const App = () => {
    return(
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    )
}

export default App;