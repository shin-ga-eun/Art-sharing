import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import useStyles from "../styles/FrameIndex2";


export default function Blog() {
    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.mainFeaturedPost}>
                {/* Increase the priority of the hero background image */}
                {
                    <img
                        style={{ display: "none" }}
                        src="https://source.unsplash.com/user/erondu"
                        alt="background"
                    />
                }
                <div className={classes.overlay} />
                <Grid container>
                    <Grid item md={6}>
                        <div className={classes.mainFeaturedPostContent}>
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                            </Typography>
                            <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                            </Typography>
                            <Link variant="subtitle1" href="#">
                    Continue reading…
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
