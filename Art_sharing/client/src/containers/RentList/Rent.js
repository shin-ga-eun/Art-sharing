import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import style from "../../styles/RentalIndex";
import Axios from "../../lib";

export default class Rental extends Component {
    render() {
        const { rentList } = this.props;
        const classes = style.bind();

        return (

            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>이미지</TableCell>
                            <TableCell>작품이름</TableCell>
                            <TableCell>대여인아이디</TableCell>
                            <TableCell>대여기간</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rentList.map(c => (
                            <TableRow>
                                <TableCell>{c.id}</TableCell>
                                <TableCell><img src={c.image} alt="profile" /></TableCell>
                                <TableCell>{c.ArtName}</TableCell>
                                <TableCell>{c.Customer}</TableCell>
                                <TableCell>{c.RentalDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
