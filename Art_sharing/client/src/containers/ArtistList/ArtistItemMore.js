
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import Axios from "axios";
import useStyles from "../../styles/ArtItemMoreIndex";
import PayButton from "../ArtItemList/PayButton";
import axios from "../../lib";

const ArtistItemMore = ({ match }) => {
    const classes = useStyles.bind();
    console.log(match.params.id);
    const [artItem, setArtItem] = useState(null);


    useEffect(() => {
        const { id } = match.params;

        const get = async () => {
            try {
                const response = await axios.get(`/artSharing/art/detail/${id}`);
                const { status, data } = response;
                if (status == 200) {
                    setArtItem(data);
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
                        <Grid item>
                            <Card className={classes.image}>
                                <img className={classes.img} alt="complex" src={artItem.imageUrl} />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs paddingtop="50">
                                    <Typography gutterBottom variant="subtitle1">
                                       작품명: {artItem.artName}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                      작가명:  {artItem.artistName}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                       작품설명: {artItem.explanation}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                      작품가격:  {artItem.price}
                                    </Typography>
                                    <Typography gutterBottom variant="subtitle1">
                                      작품 등록일:{artItem.regDate}
                                    </Typography>
                                    <Typography gutterBottom>
                                        <PayButton />
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    );
};
export default ArtistItemMore;
