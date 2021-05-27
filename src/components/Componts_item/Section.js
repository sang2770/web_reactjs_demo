import React, {useEffect}  from 'react'
import './Section.css'
import 'animate.css'
import WOW from 'wowjs'
function Section({content,title, context, button, image, check}) {
    useEffect(() => {
        new WOW.WOW().init();
    })
    return (
        <div className="Section ">
            <div className="Section_Container grid wide">
            <div className="row" >
                {check?(
                    <div className="col l-6 m-12 c-12 Section_left animate__backInLeft animate__animated wow" >
                        <p className="Section_content">
                            {content}
                        </p>
                        <h1 className="Section_title">
                            {title}
                        </h1>
                        <p className="Section_context">
                            {context}
                        </p>
                        <button className="btn btn_section">{button}</button>
                    </div>
                ):(
                    <div className="col l-6 m-12  c-12 Section_right animate__slideInLeft  animate__animated wow">
                        <img src={image}  alt={image} className="Section_image" />
                    </div>
                )}
                {check?(
                    <div className="col l-6 m-12  c-12 Section_right animate__backInRight animate__animated wow">
                         <img src={image}  alt={image} className="Section_image" />
                    </div>
                    
                ):(
                    <div className="col l-6 m-12 c-12 Section_left animate__slideInRight  animate__animated wow" >
                        <p className="Section_content">
                            {content}
                        </p>
                        <h1 className="Section_title">
                            {title}
                        </h1>
                        <p className="Section_context">
                            {context}
                        </p>
                        <button className="btn btn_section">{button}</button>
                    </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default Section
