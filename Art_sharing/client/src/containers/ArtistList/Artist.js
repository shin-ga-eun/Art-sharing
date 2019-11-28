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

export default class Artist extends Component {
    render() {
        const { artistList } = this.props;
        const classes = style.bind();

        return (

            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>작가이름</TableCell>
                            <TableCell>작가나이</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>작품조회하기</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {artistList.map(c => (
                            <TableRow>
                                <TableCell>{c.name}</TableCell>
                                <TableCell>{c.age}</TableCell>
                                <TableCell>{c.sex}</TableCell>
                                <TableCell><Link to={`/ArtistItem/${c.id}`} size="small" color="primary">작품보기</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}
