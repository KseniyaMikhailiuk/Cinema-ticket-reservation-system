import React from 'react'
import {Provider} from 'react-redux'

import Page from './Pages';

const App = ({
    store
}) => {
    return(
        <Provider store={store}>
            <Page dispatch={store.dispatch}/>
        </Provider>
    )
}



export default App;