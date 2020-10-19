import React from 'react';
import ReactStars from "react-rating-stars-component";



export default function Stars(props) {
    return (
        <div style={{justifyContent:"center"}}>
            <ReactStars
                count={5}
                size={24}
                isHalf={true}
                activeColor="#ffd700"
                value={props.starValue}
            />
        </div>
    )

}
