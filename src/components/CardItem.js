import React from 'react';
import '../styles/CardItem.css';

const CardItem = ({ data }) => {

    const { name, sprites } = data;
    const { front_default : image } = sprites;

    return (
        <>
            
                <div className="col mb-3 ml-3">
                    <div className="card text-center border-light text-white bg-dark mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src= { image } alt= { name } />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{ name }</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default CardItem;