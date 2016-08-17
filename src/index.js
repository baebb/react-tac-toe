import React from 'react';
import ReactDOM from 'react-dom';

import Board from './components/board';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tiles: ['', '', '',
                    '', '', '',
                    '', '', ''
            ]
        };
    }

    render() {
        return (
            <div className="row">
                <Board tiles={this.state.tiles} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));