
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
// import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "../../styles/ArtItemMoreIndex";
import axios from "../../lib";

const ArtistItem = ({ match }) => {
    const classes = useStyles.bind();
    console.log(match.params.id);
    const [artItem, setArtItem] = useState(null);


    useEffect(() => {
        const { id } = match.params;

        const get = async () => {
            try {
                const response = await axios.get(`/artSharing/art/${id}/1`);
                const { status, data } = response;
                console.log(data);
                if (status == 200) {
                    setArtItem(data.content);
                }
            } catch (e) {

            }
        };
        get();
    }, []);

    return (
        artItem && (
            <div>
                <Paper className={classes.paper}>
                    <Grid container spacing={8}>
                        {artItem.map(card => (
                            <Grid item key={card} xs={12} sm={6} md={4}>

                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            className={classes.cardmedia}
                                            image={card.imageUrl}
                                            title={card.artName}
                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.artName}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Link to={`/ArtistItemMore/${card.id}`} size="small" color="primary">
                                작품 상세보기
                                            </Link>
                                        </CardActions>
                                    </CardActionArea>
                                </Card>

                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </div>
        )
    );
};
export default ArtistItem;
