import React from 'react';
import moundImg from '../images/mound.png';

const mound = (props) => {
    
    const style = {
        'margin-left': '150px',
        width: '500px',
        height: '500px',
        'margin-bottom':'30px',
        'margin-top':'15px'
    }

    return (
        <div style={style}>
            <img src={moundImg}/>
        </div>
    );
}

export default mound;