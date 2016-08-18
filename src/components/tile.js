import React from 'react';

class TileItem extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div onClick={() => this.clickHandler()} className={this.props.status === '' ? 'tile' : 'tile status-' + this.props.status}></div>
        )
    }

    clickHandler() {
        //console.log("SHIIIIIIIIT");
        this.props.tileClick(this.props.ckey, this.props.turn);
    }

}

export default TileItem;