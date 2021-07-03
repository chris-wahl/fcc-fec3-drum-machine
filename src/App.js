import './App.scss';
import DrumPad from "./DrumPad";
import {Component} from "react";

const kitRef = [
    { val: 'Q', keyCode: 81, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', text: 'Heater #1'},
    { val: 'W', keyCode: 87, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', text: 'Heater #2'},
    { val: 'E', keyCode: 69, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', text: 'Heater #3'},

    { val: 'A', keyCode: 65, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', text: 'Heater #4'},
    { val: 'S', keyCode: 83, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', text: 'Heater #6'},
    { val: 'D', keyCode: 68, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', text: 'Oh No!'},

    { val: 'Z', keyCode: 90, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', text: 'Kick \'n\' Hat'},
    { val: 'X', keyCode: 88, clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', text: 'Kick #1'},
    { val: 'C', keyCode: 67, clip: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', text: 'Cev H2'},
]


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Play a sound!'
        }
        this.setSoundText = this.setSoundText.bind(this);
    }

    setSoundText(value) {
        this.setState({text: value});
    }

    render() {
        return (
            <div className="App" id="drum-machine">
                <div id="display">
                    <section className="pad-container">
                        {
                            kitRef.map(e => (
                                <DrumPad reference={e}
                                         key={'drumpad' + e.text}
                                setSoundText={ this.setSoundText }/>
                            ))
                        }
                    </section>
                    <section className="text">
                        { this.state.text }
                    </section>
                </div>

            </div>
        );
    }
}


export default App;
