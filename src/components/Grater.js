import React from 'react';
import graterImg from '../images/grater.png';

const grater = (props) => {

    let xpos = props.xpos-350;

    const style = {
        'z-index' : '100',
        'margin-left': xpos.toString() + 'px',
        'margin-top': '-55px',
        width: (849-xpos).toString()+'px',
        height: '500px',
        overflow: 'hidden'
    }

    return (
        
        <div style={style}>
            <img src={graterImg}/>
        </div>
    );
}

export default grater;