import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Axios from "axios";
import Login from "../../containers/Login";
import useStyles from "../../styles/FrameIndex2";

class Blog extends React.Component {
   state={
       isLogin: false,
   }

   handleLogin=(isLogin) => {
       this.setState({
           isLogin,
       });
   }

   handleLogout=async () => {
       try {
           await Axios.get("/artSharing/sign/logout");
           this.setState({
               isLogin: false,
           });
       } catch (error) {
           alert(error);
           console.log(error);
       }
   }

   render() {
       const classes = useStyles.bind();
       const { isLogin } = this.state;

       return (
           <React.Fragment>
               <CssBaseline />
               <Container maxWidth="lg">
                   <Toolbar className={classes.toolbar}>
                       <Grid container sm="6">
                           <Button href="/">
                               <Typography
                                   component="h2"
                                   variant="h5"
                                   color="inherit"
                                   align="center"
                                   noWrap
                                   className={classes.toolbarTitle}
                               >
          SK-Art-sharing
                               </Typography>
                           </Button>
                       </Grid>
                       <Grid container sm="4" />
                       <Grid container sm="2">
                           <Button color="inherit" href="/SignUp">회원가입</Button>
                           {isLogin === false && <Login handleLogin={this.handleLogin} />}
                           {isLogin === true && <Button onClick={this.handleLogout}>Logout</Button>}
                       </Grid>
                   </Toolbar>
                   <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                       <Button color="inherit" noWrap variant="body2" className={classes.toolbarLink} href="/artItemList">작품보기</Button>
                       <Link to="/artist"> <Button color="inherit">작가보기</Button></Link>
                       <Button color="inherit" href="/artistOnly">작품관리</Button>
                       <Button color="inherit" href="/rentList">대여관리</Button>
                       {isLogin === true && 
                        <Link to="/profile"><Button color="inherit">회원정보</Button></Link>
                       }


                   </Toolbar>
               </Container>
           </React.Fragment>
       );
   }
}
export default Blog;