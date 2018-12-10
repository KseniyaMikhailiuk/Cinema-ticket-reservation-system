import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Page from './containers/headeredpage'
import {Provider} from 'react-redux'  

const App = ({
    store
}) => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Page />
            </BrowserRouter>
        </Provider>
    )
}

export default App;