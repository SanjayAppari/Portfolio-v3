import React from 'react'
import '../Square Card/SquareCard.css'
import { Link } from 'react-router-dom'

function SquareCard(props) {
    return (
        <div className="square-card">
            <div className="square-card-logo" style={`$props.title=="cc"` && { padding: "15px 40px" }}>
                <img src={props.logo} alt="" />
            </div>
            <div className="square-card-main">
                {props.rating && <span className="cp-title">Highest Rating : {props.rating}</span>}
                {props.badges && <span className="cp-title">Earned Badges : {props.badges}</span>}
            </div>
        </div>
    )
}

export default SquareCard
