import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import useStyles from "../../styles/ArtListFormIndex";

class ArtItemListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(e) {
        this.setState({ [e.target.name]: e.target.value });

        this.props.onData(this.state.searchKeyword);
    }


    render() {
        const classes = useStyles.bind();

        return (
            <Paper className={classes.root}>
                <Grid container spacing={3}>

                    <Grid className={classes.root} item xs />
                    <Grid className={classes.root} item xs />
                    <Grid className={classes.root} item xs>
                        <Paper>
                            <IconButton className={classes.iconButton} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <InputBase
                                className={classes.input}
                                placeholder="검색어를 입력하세요.."
                                name="searchKeyword"
                                value={this.state.searchKeyword}
                                onChange={this.handleValueChange}
                            />

                        </Paper>
                    </Grid>

                </Grid>

            </Paper>
        );
    }
}
export default ArtItemListForm;
