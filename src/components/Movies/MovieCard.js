import React from 'react';
import Stars from '../../components/Stars'

export default function MovieCard(props) {
    return (
        <div >
            <div className="card m-5" style={{ width: "300px", display: "flex", flexWrap:"wrap" ,justifyContent: "space-around", direction: "row" }} key={props.movie.id}>
                <img className="card-img-top" src={props.movie.imageUrl} alt="img" style={{ width: "100%" }} />
                <div className="card-body" style={{height:"350px"}}>
                    <h4 className="card-title">{props.movie.title}</h4>
                    <p>{props.movie.subtitle}</p>
                    <p className="card-text">{props.movie.description}</p>
                    <div className="card-footer">
                        <Stars starValue={props.movie.rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}
