import React from "react";
import { NavLink } from "react-router-dom";

export default function PageTile({ pageTileData }) {
    return (
        <>
            <section className="section section__page-tile">
                <div className="wrapper page-tiles">
                    {pageTileData.map((data, index) => (
                        <div key={index} className="page-tile">
                            <div className="column">
                                <h2>{data.title}</h2>
                                <p>{data.subtitle}</p>
                                <NavLink to={'/astrophotography'} className='btn btn__learn-more'>Learn More</NavLink>
                            </div>
                            <div className="column">
                                <img className="page-tile__img" src={data.img} alt="galaxy" />
                            </div>
                        </div>
                    ))}
                </div>
                
            </section>
        </>
    )
}