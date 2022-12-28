import React, { useState, useEffect } from 'react'
import BackgroundCol from './Components/BackgroundCol/BackgroundCol'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import './App.css'
import BeatLoader from "react-spinners/BeatLoader";


const App = () => {
    const [loading, setLoading] = useState(false);

        useEffect(() => {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 5000)
        }, [])

    return(
        <div className="chatApp">
            {
                loading ?

                    <BeatLoader
                        color={"hsl(271, 36%, 24%)"}
                        loading={loading}
                        size={30}
                    />
                :
                    <div className='app-container'>
                        <BackgroundCol />
                        <Main />
                        <Footer />
                    </div>
            }
        </div>
    )
}

export default App
