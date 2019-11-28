// 상세페이지에서 id값을 넘겨주는 것까지함
// axios연결하는 거 하기.
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import axios from "axios";
import useStyles from "../../styles/ArtItemMoreIndex";
import ArtistOnlyMoreDelete from "./ArtistOnlyMoreDelet";
import ArtistOnlyMoreUpdate from "./ArtistOnlyMoreUpdate";


const ArtistOnlyMore = ({ match }) => {
    const classes = useStyles.bind();
    console.log(match.params.id);
    const [artItem, setArtItem] = useState(null);

    useEffect(() => {
        const { id } = match.params;

        const get = async () => {
            try {
                const response = await axios.get(`/artSharing/art/detail/${id}`);
                const { status, data } = response;
                if (status === 200) {
                    setArtItem(data);
                }
            } catch (e) {

            }
        };
        get();
    }, []);

    return (
        artItem && (
            <div className={classes.root}>
                <Grid container spacing={8}>
                    <Grid item>
                        <Card className={classes.image}>
                            <img className={classes.img} alt="complex" src={artItem.imageUrl} />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container xs={12} direction="row" justify="flex-end" alignItems="flex-start">
                    <Grid>
                        <ArtistOnlyMoreUpdate id={artItem.id} />
                    </Grid>
                    <Grid>
                        <ArtistOnlyMoreDelete id={artItem.id} />
                    </Grid>
                </Grid>


            </div>
        )
    );
};
export default ArtistOnlyMore;
