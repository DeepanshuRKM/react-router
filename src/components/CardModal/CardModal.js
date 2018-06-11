import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
var card_style = { 'max-width':'445px', 'margin': '10px'};
var card_media_style = { 'height': '0', 'padding-top': '56.25%'}
var div_style = {'width':'100%', 'display': 'inline-flex'}

class CardModal extends Component {
    render() {
        return (
            <div>
                <Typography variant="headline" gutterBottom>
                    Featured Super Venues
                </Typography>
                <div style={div_style}>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Campari House
                            </Typography>
                            <Typography component="p">
                                Though it may sound like the Melbourne consulate for Italy’s much-loved bitter red aperitif
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image (1).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Carlton Brewhouse
                            </Typography>
                            <Typography component="p">
                                The Carlton Brewhouse is located at the iconic Carlton &amp; United Brewery in Abbotsford and is the official home of Australia’s most popular draught beer,
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/image (2).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Mofo Lounge
                            </Typography>
                            <Typography component="p">
                                Prahran's Mofo Lounge is a venue that specialises in intimate social events – when it's not a public bar
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <Typography variant="headline" gutterBottom>
                    Venumob Stories
                </Typography>
                <div style={div_style}>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/venuemob-image.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Event Showcase: Party Beyond at Scienceworks
                            </Typography>
                            <Typography component="p">
                                Experience the collision of art, science and music as Scienceworks open late for guests to party beyond perception.

                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/venuemob-image (1).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Woodland House – an epicurean delight
                            </Typography>
                            <Typography component="p">
                                An incredible setting, superb service and award-winning cuisine make for memorable events – just ask the team at Woodland House.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card style={card_style}>
                        <CardMedia
                            style={card_media_style}
                            image="/venuemob-image (2).jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="headline" component="h2">
                                Food trucks, tiny dogs and big parties at Welcome to Bowen Hill
                            </Typography>
                            <Typography component="p">
                                Brisbane's Welcome to Bowen Hills well and truly embraces a sense of cheeky fun – whether it's a weekend 'tiny dog festival', or a large-scale function.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default CardModal