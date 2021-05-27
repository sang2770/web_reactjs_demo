import React, {useState} from 'react'
import * as AiIcon from 'react-icons/ai'
import "./Slider.css"
import data from './Dataslider'
function Slider() {
    const [acount, setacount] = useState(0);
    const lenght=data.length;
    const Next=()=>{
        const temp=(acount===lenght-1)?0:acount+1;
        setacount(temp);
        console.log(acount);
    }
    const Prev=()=>{
        const temp=(acount===0)?lenght-1:acount-1;
        setacount(temp);
        console.log(acount);
    }
    return (
        <div className="Container_Slider grid wide">
                {
                    data.map((item)=>{
                        return(
                            <div>
                                {(item.id===acount) && (
                                <div className="row Slider">
                                    <img key={item.id} src={item.img} alt="" className="col l-12 c-12 m-12 Slider-item " />
                                    <div className="Slider_Text">
                                        <p className="Slider_Text_content">
                                            {item.content}
                                        </p>
                                        <h1 className="Slider_Text_title">
                                            {item.title}
                                        </h1>
                                        <p className="Slider_Text_context">
                                            {item.context}
                                        </p>
                                        <button className="btn btn_Slider_Text">{item.button}</button>
                                    </div>
                                </div>)
                                } 
                            </div>
                        )
                    })
                }
            <div className="btn-right btn_click" onClick={Next}> <AiIcon.AiOutlineArrowRight/></div>
            <div className="btn-left btn_click" onClick={Prev}> <AiIcon.AiOutlineArrowLeft/></div>
        </div>
    )
}

export default Slider
