import React from 'react';
import ReactDOM from 'react-dom';

import TileItem from './components/tile';
import Menu from './components/menu';

const initState = {
    tiles: ['', '', '',
        '', '', '',
        '', '', ''
    ],
    turn: 'o',
    winner: 'n'
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = initState;
    }

    reset() {
        this.setState({
            tiles: ['', '', '',
                '', '', '',
                '', '', ''
            ],
            turn: 'o',
            winner: 'n'
        });
    }

    checkBoard() {
        var t = this.state.tiles;
        var check = (a, b, c) => {
            if (a + b + c === 'xxx' || a + b + c === 'ooo') return true;
        }

        if (check(t[0], t[1], t[2])) return t[0];
        if (check(t[3], t[4], t[5])) return t[3];
        if (check(t[6], t[7], t[8])) return t[6];

        if (check(t[0], t[3], t[6])) return t[0];
        if (check(t[1], t[4], t[7])) return t[1];
        if (check(t[2], t[5], t[8])) return t[2];

        if (check(t[0], t[4], t[8])) return t[0];
        if (check(t[2], t[4], t[6])) return t[2];

        if (t.join('').length == 9) {
            return 'd';
        }

        return 'n';
    }

    tileClick(position, player) {
        var tempTiles = this.state.tiles;
        if (tempTiles[position] === '' && this.state.winner === 'n') {
            tempTiles[position] = player;
            this.setState({
                tiles: tempTiles,
                turn: player === 'o' ? 'x' : 'o',
                winner: this.checkBoard()
            })
        } else {
            console.log("can't do that");
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="board">
                        {this.state.tiles.map((tile,index) => {
                            return <TileItem
                                status={tile}
                                key={index}
                                ckey={index}
                                turn={this.state.turn}
                                tileClick={(position, player) => this.tileClick(position, player)}
                            />
                        })}
                        </div>
                    <Menu winner={this.state.winner} turn={this.state.turn} reset={() => this.reset()} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));