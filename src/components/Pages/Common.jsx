import React from 'react'

function Common({ Image,title,description }) {
    return (
        

            <div className="common" style={{ background: `url(${Image}) #1111`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', height: '100vh', marginTop: '-50px' }}>
                <div className="title" style={{color:'white',paddingTop:'5rem'}}>
                    <h2 style={{paddingLeft:'5rem',paddingBottom:'0.5rem'}}>{title}</h2>
                    <p style={{paddingLeft:'5rem',paddingBottom:'0.5rem'}}>{description}</p>
                    <button style={{marginLeft:'5rem',fontSize:'2rem',padding:'0.5rem',background:'black',color:'white',border:'none',outline:'none',borderRadius:'4px'}}>Learn More</button>
                </div>
            </div>
        
    )
}

export default Common
