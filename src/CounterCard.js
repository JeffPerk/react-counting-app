import React from 'react';

const cardStyle = {
    margin: "auto",
    float: "none",
    marginTop: "25px",
    boxShadow: "0 2px 3px #ccc",
    padding: "0"
}

const CounterCard = (props) => {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="card col-md-6" style={cardStyle}>
                    <div className="card-header text-md-center">
                        <h4>Counter</h4>
                    </div>
                    <div className="card-body" style={{textAlign: "center"}}>
                        <p>{props.counter}</p>
                        <div>
                            <button className="btn btn-success center" type="button" onClick={props.add}>Add One!</button>
                            <button className="btn btn-danger center" type="button" onClick={props.minus}>Minus One!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterCard;