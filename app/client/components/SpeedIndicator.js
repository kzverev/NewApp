
import React from 'react';

export class SpeedIndicator extends React.Component {

    static propTypes = {
        speed: React.PropTypes.number,
    }

    static defaultProps = {
        speed: 0,
    }

    render() {
        var { speed } = this.props;
        var speedColor = {
            color: 'tomato',
            // display: 'inline-block',
            // marginRight: 10
        };

        if (speed <= 30) {
            speedColor.color = 'lightgreen';
        } else if (speed < 60) {
            speedColor.color = 'orange';
        } 

        console.log(this.props);

        return (
            <div style={speedColor}>
                {speed}
            </div>
        );
    }
}
