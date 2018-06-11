import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchModal from '../SearchModal/SearchModal';
import CityMenuModal from '../CityMenu/CityMenuModal';
import CardModal from '../CardModal/CardModal';
import ClientModal from '../ClientModal/ClientModal';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import './App.css';

class App extends Component {

    state = {
        right: false,
    };

    toggle_drawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        return (
            <div>
                <Drawer anchor="right" open={this.state.right} onClose={this.toggle_drawer('right', false)}>
                    <AppBar position="static">
                        <Button>Sign Up</Button>
                        <Button>login</Button>
                    </AppBar>
                    <Divider />
                    <List component="nav">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                        </ListItem>
                    </List>
                </Drawer>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Venumob
                        </Typography>
                        <SearchModal />
                        <Button>Handpicked Venues</Button>
                        <Button>Blogs</Button>
                        <CityMenuModal />
                        <Button onClick={this.toggle_drawer('right', true)}>Open Right</Button>
                    </Toolbar>
                </AppBar>
                <div className="jss7">
                    <CardModal />
                    <GridList cellHeight={320} cols={4}>
                        <GridListTile key="/image.jpg">
                            <img src="/gridlist-image.jpg" alt="image" />
                            <GridListTileBar
                                title="Themed Venues in Melbourne"
                                subtitle="No need to decorate – these venues come pre-styled for your event."
                            />
                        </GridListTile>
                        <GridListTile key="/image.jpg">
                            <img src="/gridlist-image (1).jpg" alt="image" />
                            <GridListTileBar
                                title="Melbourne venues with vehicle access perfect for corporate events"
                                subtitle="Ballrooms, race courses and expansive event spaces with room for a luxury car or two. "
                            />
                        </GridListTile>
                        <GridListTile key="/image.jpg">
                            <img src="/gridlist-image (2).jpg" alt="image" />
                            <GridListTileBar
                                title="Melbourne venues with private smoking areas"
                                subtitle="Don't loiter in an alleyway – check these venues that cater to those looking to light up."
                            />
                        </GridListTile>
                        <GridListTile key="/image.jpg">
                            <img src="/gridlist-image (3).jpg" alt="image" />
                            <GridListTileBar
                                title="Perfect Melbourne venues for a post-conference dinner event "
                                subtitle="Conveniently located and suitably styled, there's a long list of perfect Melbourne venues for a post-conference dinner event.  "
                            />
                        </GridListTile>
                    </GridList>
                    <ClientModal />
                </div>
            </div>
        );
    }
}

export default App;