import React from 'react'
import Section from '../components/Componts_item/Section'
import serviceData from './serviceData'
import Prince from '../components/Componts_item/Prince'
function Services() {
    return (
        <div className="Services">
            <Prince/>
             {
                serviceData.map((item, index)=>{
                    return (
                        <Section content={item.content} title={item.title} context={item.context} button={item.button} image={item.image} key={index} check={index%2===0?true:false} />
                    )
                })
            }
        </div>
    )
}
export default Services
