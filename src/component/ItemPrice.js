import React, { useState } from 'react';

function ItemPrice(props) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    console.log(props.value);
    const [gender, setGender] = useState('');
  

    const addGrenderVal = () => {
        // alert("hellow");
        setGender("Mr. ");
        if(gender !== '') {
            props.getDatafromChildComponent(gender);
        }
    }                                                                                                                                                                                                                                                                                                                                                 
    return (   
        <React.Fragment>
            {props.value.map((item, index) => {
                return (
                    <React.Fragment>
                            <div  className="itemPrizes">
                                <h6>{gender + item.name}</h6>
                                <h5>{item.location}</h5>
                                <button onClick={addGrenderVal}>data to Parent comp.</button> 
                        </div>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    );
}

export default ItemPrice;