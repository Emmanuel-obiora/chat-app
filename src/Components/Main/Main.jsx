import React from 'react'
import PhoneBuild from '../PhoneBuild/PhoneBuild'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import '../../style.css'

const Main = () => {
return(
    <main className='main-container'>
        <PhoneBuild />
        <AdditionalInfo />
    </main>
)
}

export default Main