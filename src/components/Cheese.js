import React from 'react';
import Cheese from './Cheese.css';
import cheeseImg1 from '../images/string1.png';
import cheeseImg2 from '../images/string2.png';
import cheeseImg3 from '../images/string3.png';

const cheese = (props) => {
    const images = [cheeseImg1,cheeseImg2,cheeseImg3];
    const cheeseImageIndex = props.imageIndex;
    const cheeseImage = images[cheeseImageIndex];
    const animate = props.animate;
    const leftNum = props.leftNum;
    const animDelay = props.animDelay;
    return (
        <div className={animate ? 'anim' : 'invisible'} 
        style={{
            top: props.top,
            left: leftNum,
            animationDelay: animDelay,
            }}>
            <img src={cheeseImage} />
        </div>
    )
}

export default cheese;