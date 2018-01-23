import React, {Component} from 'react';
import moonImg from '../images/moon.png';

class Moon extends Component {
    constructor(props){
        super(props);
        console.log('[Moon.js] Inside Constructor', props);
        this.state = {
          
        }
      }

    render(){
        const style = {
            'text-align': 'center',
            'margin-left': '150px',
            width: '500px',
            height: this.props.moonY.toString() + 'px',
            overflow: 'hidden'
        }
    
        const img = {
            display: 'block'
        }

        return (
            <div style={style}>
                <img style={img} src={moonImg} />
            </div>
        );
    }

}

export default Moon;