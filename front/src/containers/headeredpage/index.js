import React from 'react'
import Header from '../../components/Common/Header'
import Content from './content'
import Footer from '../../components/Common/Footer'

const Page = ({
    store
}) => {
    return(
        <div>            
            <Header />
            <Content /> 
            <Footer />
        </div>
    )
}
export default Page;