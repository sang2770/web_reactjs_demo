import React from 'react'
import Section from "../components/Componts_item/Section"
import homeData from './homedata'
import Slider from '../components/Componts_item/Slider/Slider'
function Home() {
    return (
        <div className="Home">
            <Slider/>
            {
                homeData.map((item, index)=>{
                    return (
                        <Section content={item.content} title={item.title} context={item.context} button={item.button} image={item.image} key={index} check={index%2===0?true:false}/>
                    )
                })
            }
            
        </div>
    )
}

export default Home
