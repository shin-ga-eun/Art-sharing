import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../styles/Frameindex";

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" color="textSecondary" component="p" gutterBottom>
          한이음 뿌셔뿌셔 2019. All right reserved.
                </Typography>
            </footer>
        </React.Fragment>
    );
}
