import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route,Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './App.css';

const history = createHistory();

class Blogs extends Component {
    go_back = () => {
        history.goBack();
    }
    render(){
        return(
            <div>
                <h3>Blogs</h3>
                <p>
                    The Atlantic Ocean covers approximately 1/5th of the surface of the earth.
                </p>
                <Button onClick={this.go_back}>Go Back</Button>
            </div>
        )    
    }
}

class AboutUs extends Component {
    constructor(props){
        super(props);
        this.state = {component: <div>
            <Card>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        Our work defines us, transporting you to our Portfolio.
                    </Typography>
                </CardContent>
            </Card>
        </div>, wait_time: 5000};
    }

    componentDidMount = () => {
        this.interval = setTimeout(function(){
            history.push("");
            this.setState({component: '', wait_time: 0});
        }.bind(this),this.state.wait_time);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    render() {
        return (
            this.state.component
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                <span>
                    <AppBar position="static">
                        <Toolbar>
                            <Link to="/" className="text_deco_none">Home</Link>
                            <Link to="/blogs" className="text_deco_none"><Button>Blogs</Button></Link>
                            <Link to="/about-us" className="text_deco_none"><Button>About Us</Button></Link>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route path='/blogs' component={Blogs} />
                        <Route path='/about-us' component={AboutUs} />
                    </Switch>    
                </span>
                </Router>
            </div>
        );
    }
}

export default App;