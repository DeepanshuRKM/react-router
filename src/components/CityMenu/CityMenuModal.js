import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class CityMenuModal extends Component {

    state = {
        anchorEl: null,
    };

    handle_click_menu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handle_close_menu = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {anchorEl} = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handle_click_menu}
                >
                    Melbourne
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handle_close_menu}
                >
                    <MenuItem onClick={this.handle_close_menu}>Melbourne</MenuItem>
                    <MenuItem onClick={this.handle_close_menu}>Sydney</MenuItem>
                    <MenuItem onClick={this.handle_close_menu}>Brisbane</MenuItem>
                    <MenuItem onClick={this.handle_close_menu}>Gold Coast</MenuItem>
                    <MenuItem onClick={this.handle_close_menu}>Perth</MenuItem>
                </Menu>
            </div>
        )
    }
}

export default CityMenuModal;