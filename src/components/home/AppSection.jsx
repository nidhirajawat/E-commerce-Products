import React from 'react'
import { Link } from 'react-router-dom'



const btnText = "Sign up for Free";
const title = "Learn Anytime, Anywhere";
const desc = "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";


const AppSection = () => {
  return (
    <div className='app-section padding-tb'>
        <div className='container'>
            <div className='section-header text-center'>
                <Link to="/sign-up">{btnText}</Link>
                <h3 className='title'>{title}</h3>
                <p>{desc}</p>
            </div>

            <div className='section-wrapper'>
                <ul className='lab-ul'>
                    <li>
                        <a href="#"><img src="/src/assets/images/app/01.jpg" alt="app-images" /></a>
                        <a href="#"><img src="/src/assets/images/app/02.jpg" alt="app-images" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AppSection