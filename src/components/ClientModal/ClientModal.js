import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
var client_margin_top = {'margin-top': '10px'};

class ClientModal extends Component {
    render() {
        return (
            <div style={client_margin_top}>
                <Card>
                    <CardContent>
                        <div style={{'display':'inline-flex', 'width':'250px'}}>
                            <img src="/optus.png" style={{'padding':'16px'}} />
                        </div>
                        <div style={{'display':'inline-flex', 'width':'250px'}}>
                            <img src="/pwc.png" style={{'padding':'16px'}} />
                        </div>
                        <div style={{'display':'inline-flex', 'width':'250px'}}>
                            <img src="/groupon.png" style={{'padding':'16px'}} />
                        </div>
                        <div style={{'display':'inline-flex', 'width':'250px'}}>
                            <img src="/redbull.png" style={{'padding':'16px'}} />
                        </div>
                        <div style={{'display':'inline-flex', 'width':'250px'}}>
                            <img src="/can.png" style={{'padding':'16px'}} />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default ClientModal;