import React from 'react';
import ReactDOM from 'react-dom';

import TileItem from './components/tile';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tiles: ['', '', '',
                '', '', '',
                '', '', ''
            ],
            turn: 'o',
            winner: 'n'
        };
    }

    checkBoard() {
        var t = this.state.tiles;
        var check = (a,b,c) => {
            if (a + b + c === 'xxx' || a + b + c === 'ooo') {
                console.log('suo')
            }
        }
        if (check(t[0], t[1], t[2])) return t[0];
        return 'n';
        // check('x','x','x');
    }

    tileClick(position, player) {
        var tempTiles = this.state.tiles;
        if (tempTiles[position] === '') {
            tempTiles[position] = player;
            this.setState({
                tiles: tempTiles,
                turn: player === 'o' ? 'x' : 'o'
            })
            this.checkBoard();
        } else {
            console.log("can't do that");
        }
    }

    tileItems(tile, index) {
        return (
            <TileItem status={tile} key={index} ckey={index} turn={this.state.turn}
                      tileClick={(position, player) => this.tileClick(position, player)}/>
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="board">
                        { this.state.tiles.map(this.tileItems, this) }
                    </div>
                    <div className="text">
                        <h3 className="text-xs-center">Player {this.state.turn === 'o' ? '1' : '2'}'s turn</h3>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));