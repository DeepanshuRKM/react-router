import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class SearchModal extends Component {
    state= {
        open: false,
        value: 0,
    };

    handle_open_modal = () => {
        this.setState({ open: true });
    }

    handle_close_modal = () => {
        this.setState({ open: false });
    };

    handle_change_tab = (event, value) => {
        this.setState({ value });
    };

    render(){
        const { value } = this.state;

        return (
            <div>
                <Button position="static" onClick={this.handle_open_modal}>Search Venue</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handle_close_modal}
                >
                    <div style={{top:'10%',left: '30%', position: 'absolute'}}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={this.handle_change_tab}>
                                <Tab label="Find Venue" />
                                <Tab label="Event Category" />
                            </Tabs>
                        </AppBar>
                        {value === 0 && <TabContainer>Item One</TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                    </div>
                </Modal>
            </div>
        )
    }

}

SearchModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SearchModal;