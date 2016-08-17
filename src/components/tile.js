import React from 'react';

class TileItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {status: null};
    }

    render() {
        return (
            <div onClick={() => this.clickHandler()} className={this.state.status === '' ? 'tile' : 'tile status-' + this.state.status}>{this.props.status}</div>
        )
    }

    clickHandler () {
        console.log("SHIIIIIIIIT");
        console.log(this.state.status);
        this.setState({status: 'x'});
    }

}

export default TileItem;