
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import { Link } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useStyles from "../../styles/ArtItemMoreIndex";
import axios from "../../lib";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const RentArtistItem = ({ match }) => {
    const classes = useStyles.bind();
    console.log(match.params.id);
    const [artItem, setArtItem] = useState(null);


    useEffect(() => {
        const { id } = match.params;

        const get = async () => {
            try {
                const response = await axios.get(`/artSharing/rent/${id}/1`);
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
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>대여인</TableCell>
                                <TableCell>대여일</TableCell>
                                <TableCell>반납일</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {artItem.map(c => (
                                <TableRow>
                                    <TableCell>{c.member}</TableCell>
                                    <TableCell>{c.rentDate}</TableCell>
                                    <TableCell>{c.returnDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    );
};
export default RentArtistItem;
