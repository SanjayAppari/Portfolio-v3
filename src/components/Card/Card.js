import React, { useEffect } from 'react'
import '../Card/Card.css'

function Card(props) {
    useEffect(() => {
        console.log(props);
    }, [])
    return (
        <div className="card">
            <div className="card-left">
                {props.date && <span className="date-atyle">{props.date}</span>}
                {
                    props.logo && (
                        <div className="card-logo">
                            <img src={props.logo} alt="" />
                        </div>
                    )
                }
            </div>
            <div className="card-right">
                <span className="card-heading-style">{props.heading}</span> <br />
                {props.role && <><span className='card-role-style'>{props.role}</span> <br /></>}
                <span className="card-description-style">{props.description}</span>
                <div className="card-keywords">
                    {
                        props.keywords.map((item, i) => {
                            return <div className="keyword" key={i}>{item}</div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card