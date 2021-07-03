import './DrumPad.scss';
import React from "react";

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.keyPress = this.keyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyPress)
    }

    keyPress(event) {
        if (event.keyCode === this.props.reference.keyCode) {
            this.play();
        }
    };

    play() {
        const sound = document.getElementById(this.props.reference.val);
        sound.currentTime = 0;
        sound.play();
        this.props.setSoundText(this.props.reference.text);
        const el = document.getElementById('drum-pad-' + this.props.reference.val);
        el.classList.add('active');
        setTimeout(() => el.classList.remove('active'), 200);
    }

    render() {

        return (
            <button
                id={'drum-pad-' + this.props.reference.val}
                onClick={this.play.bind(this)}
                className="drum-pad">
                {this.props.reference.val}
                <audio
                    className="clip"
                    id={this.props.reference.val}
                    src={this.props.reference.clip}/>
            </button>
        )
    }
}

export default DrumPad;
