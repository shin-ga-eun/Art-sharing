import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { BrowserRouter, Route } from "react-router-dom";
import useStyles from "../../styles/FrameIndex2";
import ArtistList from "../../containers/ArtistList/ArtistList";
import RentList from "../../containers/RentList/RentList";
import Profile from "../../containers/Profile";
import SignUp from "../../containers/SignUp";
import ArtItemList from "../../containers/ArtItemList/ArtItemLIst";
import ArtistOnly from "../../containers/ArtistOnly/ArtistOnly";
import ArtItemMore from "../../containers/ArtItemList/ArtItemMore";
import Main from "../../containers/Main";
import ArtistOnlyMore from "../../containers/ArtistOnly/ArtistOnlyMore";

export default function Blog() {
    const classes = useStyles();

    return (

        <React.Fragment>
         
            <CssBaseline />
            <Container maxWidth="lg">

                <div className={classes.heroContent}>
                    <Container>

                        <Route exact path="/" component={Main} /> {/* 메인화면 */}
                        <Route exact path="/artItemList" component={ArtItemList} /> {/* 작품리스트 */}
                        <Route exact path="/artist" component={ArtistList} />{/* 작가리스트 */}
                        <Route exact path="/artistOnly" component={ArtistOnly} />{/* 작품관리 */}
                        <Route exact path="/rentList" component={RentList} />{/* 작품대여 */}
                        <Route exact path="/profile" component={Profile} />{/* 회원정보란 */}
                        <Route exact path="/signup" component={SignUp} />{/* 회원가입 */}
                        <Route exact path="/ArtItemMore/:id" component={ArtItemMore} />{/* 작품상세화면 */}
                        <Route exact path="/ArtistOnlyMore/:id" component={ArtistOnlyMore} />{/* 작가-작품상세화면 */}


                    </Container>
                </div>
            </Container>
        </React.Fragment>

    );
}
