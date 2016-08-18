import React from 'react';

const Menu = (props) => {
    return (
        <div className="menu text-xs-center">
            <div className="text">
                <h3 className={props.winner === 'n' ? 'visible' : 'hidden'}>Player {props.turn === 'o' ? '1' : '2'}'s
                    turn</h3>
                <h3 className={(props.winner === 'n') || (props.winner === 'd') ? 'hidden' : 'visible'}>
                    Player {props.winner === 'o' ? '1' : '2'} Won!</h3>
                <h3 className={props.winner === 'd' ? 'visible' : 'hidden'}>Draw!</h3>
            </div>
            <div className={props.winner !== 'n' ? 'visible' : 'hidden'}>
                <button className="btn btn-primary" onClick={() => props.reset()} >Reset</button>
            </div>
        </div>
    )
}

export default Menu;