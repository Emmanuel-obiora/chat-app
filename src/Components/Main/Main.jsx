import React from 'react'
import PhoneBuild from '../PhoneBuild/PhoneBuild'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import '../../style.css'

const Main = () => {
return(
    <div className='main-container'>
    <PhoneBuild />
    <AdditionalInfo />
    </div>
)
}

export default Main