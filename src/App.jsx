import React from 'react'
import BackgroundCol from './Components/BackgroundCol/BackgroundCol'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './App.css'


const App = () => {
    return(
        <div className='app-container'>
            <BackgroundCol />
            <Main />
            <Footer />
        </div>
    )
}

export default App
