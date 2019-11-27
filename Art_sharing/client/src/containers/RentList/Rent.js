import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { Link } from "react-router-dom";
import style from "../../styles/RentalIndex";
import Axios from "../../lib";

export default class Rental extends Component {
    render() {
        const { rentList } = this.props;
        const classes = style.bind();
        console.log(rentList);
        return (

            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>이미지</TableCell>
                            <TableCell>작품이름</TableCell>
                            <TableCell>대여상황</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rentList.map(c => (
                            <TableRow>
                                <TableCell><img src={c.image} alt="profile" /></TableCell>
                                <TableCell>{c.artName}</TableCell>
                                <TableCell><Link to={`/RentArtistItem/${c.id}`} size="small" color="primary">대여현황</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}