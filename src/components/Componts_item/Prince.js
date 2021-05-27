import React from 'react'
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import './Prince.css'
function Prince() {
    return (
        <div className="Prince">
            <div className="Prince_title">
                Out Services
            </div>
            <div className=" Prince_Container grid wide">
                <div className="row">
                    <div className="col l-4 c-12 m-12 Prince_box">
                        <div className="Prince_box_item">
                            <div className="box_item_icon">
                                <GiCrystalBars/>
                            </div>
                            <div className="box_item_content">
                                <h1 className="content">
                                    Starter Pack
                                </h1>
                                <h1 className="prince">
                                    $99.99
                                </h1>
                                <p className="time">
                                    per month
                                </p>
                            </div>
                            <div className="box_item_context">
                                <h3 className="context">
                                    100 New Users
                                </h3>
                                <h3 className="context">
                                    $10,000 Budget
                                </h3>
                                <h3 className="context">
                                    Retargeting analytics
                                </h3>
                            </div>
                            <button className="btn btn_prince">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col l-4 c-12 m-12 Prince_box">
                        <div className="Prince_box_item">
                            <div className="box_item_icon">
                                <GiCutDiamond/>
                            </div>
                            <div className="box_item_content">
                                <h1 className="content">
                                    Gold Rush                                 </h1>
                                <h1 className="prince">
                                    $299.99
                                </h1>
                                <p className="time">
                                    per month
                                </p>
                            </div>
                            <div className="box_item_context">
                                <h3 className="context">
                                    100 New Users
                                </h3>
                                <h3 className="context">
                                    $50,000 Budget
                                </h3>
                                <h3 className="context">
                                    Retargeting analytics
                                </h3>
                            </div>
                            <button className="btn btn_prince">Choose Plan</button>
                        </div>
                    </div>
                    <div className="col l-4 c-12 m-12 Prince_box">
                        <div className="Prince_box_item">
                            <div className="box_item_icon">
                                <GiRock/>
                            </div>
                            <div className="box_item_content">
                                <h1 className="content">
                                    Diamond King
                                </h1>
                                <h1 className="prince">
                                    $999.99
                                </h1>
                                <p className="time">
                                    per month
                                </p>
                            </div>
                            <div className="box_item_context">
                                <h3 className="context">
                                    Unlimited Users
                                </h3>
                                <h3 className="context">
                                    Unlimited Budget
                                </h3>
                                <h3 className="context">
                                    24/7 Support
                                </h3>
                            </div>
                            <button className="btn btn_prince">Choose Plan</button>
                        </div>
                    </div>
                    
                </div>
            </div>  
        </div>
    )
}

export default Prince
