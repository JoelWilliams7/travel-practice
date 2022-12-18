import React from 'react'

export default function Travel(props){
    return (
        <section>
                <img src={props.item.imageUrl} alt="lucknow" />
                <div className="card--element">
                    <div className="card--location">
                    <i className="fas fa-map-marker-alt"></i>
                    <h4>{props.item.location}</h4>
                    <a href={props.item.googleMapsUrl} className="card--map" target="_blank">
                        view on google map
                    </a>
                    </div>
                    <h2 className="card--title">{props.item.title}</h2>
                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
        </section>
    )
}