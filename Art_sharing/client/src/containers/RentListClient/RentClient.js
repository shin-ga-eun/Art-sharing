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

export default class RentaClient extends Component {
    render() {
        const { rentList } = this.props;
        const classes = style.bind();
        console.log(rentList);
        return (

            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>작품명</TableCell>
                            <TableCell>대여일</TableCell>
                            <TableCell>반납일</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rentList.map(c => (
                            <TableRow>
                               
                                <TableCell>{c.artName}</TableCell>
                                <TableCell>{c.rentDate}</TableCell>
                                <TableCell>{c.returnDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
