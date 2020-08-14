import React from 'react'

import './Header.css'

const Header = () => {
    let myTechs = ['HTML/CSS', 'JavaScript', 'React', 'NodeJS', 'Java', 'Spring', 'mySQL', 'mongoDB']
    
    const myTechRandom1 = () => myTechs[Math.floor(Math.random() * myTechs.length)];
    const myTechRandom2 = () => myTechs[Math.floor(Math.random() * myTechs.length)];
    const myTechRandom3 = () => myTechs[Math.floor(Math.random() * myTechs.length)];

    return(
    <section className='header-anime'>
        <div className='css-anime'>
            <div className='sky'> 
                <div className='cloud-intro'>
                    <div className='tech1'>
                    {myTechRandom1()}
                    </div>
                    <div className='tech2'>
                    
                    {myTechRandom2()}
                    </div>
                    <div className='tech3'>
                    
                    {myTechRandom3()}
                    </div>
                    </div>
                </div>
            <div className='middle'>
            </div>
            <div className='feet'>
            </div>
        </div>
    </section>
    )
}

export default Header
