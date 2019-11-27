import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "../styles/SignupIndex";
import Axios from "../lib";

class SignUp extends React.Component {
    state={
        affiliation: "",
        age: "",
        id: "",
        name: "",
        password: "",
        phone: "",
        role: "",
        sex: "",
    }

    handleChange = (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit=async (e) => {
        e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
        console.log("1");
        console.log(this.state);
        const {
            affiliation, age, id, name, password, phone, role, sex,
        } = this.state;

        try {
            const response = await Axios.post("/artSharing/sign/signUp", {
                affiliation,
                age,
                id,
                name,
                password,
                phone,
                role,
                sex,
            }, {
                headers: {
                    "Content-type": "application/json",
                },
            });
            console.log("2");
            console.log(response);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    render() {
        const classes = styles.bind();
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
      Sign up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.handleFormSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid>
                                    <FormControl variant="outlined" className={classes.formControl} style={{ marginTop: 20, minWidth: 130 }}>
                                        <InputLabel htmlFor="outlined-age-native-simple">
                            가입 유형
                                        </InputLabel>
                                        <Select
                                            value={this.state.role}
                                            onChange={this.handleChange}
                                            inputProps={{
                                                name: "role",
                                            }}
                                        >
                                            <MenuItem value="ARTIST">작가</MenuItem>
                                            <MenuItem value="CLIENT">개인/기업</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="소속"
                                    value={this.state.affiliation}
                                    onChange={this.handleChange}
                                    name="affiliation"
                                    autoComplete="affiliation"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="이름"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    name="name"
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="sex"
                                    name="sex"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="성별"
                                    value={this.state.sex}
                                    onChange={this.handleChange}
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="age"
                                    name="age"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    label="나이"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="전화번호"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    name="phone"
                                    autoComplete="phone"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="id"
                                    value={this.state.id}
                                    onChange={this.handleChange}
                                    name="id"
                                    autoComplete="id"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
        Sign Up
                            </Button>
                            <Grid container justify="flex-end" />
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
export default SignUp;
