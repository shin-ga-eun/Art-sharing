import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter } from "react-router-dom";
import Axios from "../lib";

class Login extends Component {
  state={
      id: "",
      password: "",
      role: "",
      open: false, // dialog 창이 열려있는지 유무
  }

    handleClickOpen= () => {
        this.setState({
            open: true, // Dialog 창을 열어준다
        });
    }

    handleClose= () => {
        this.setState({
            id: "",
            password: "",
            open: false, // Dialog 텍스트를 초기화 하고 닫아준다
        });
    }

    handleValueChange= (e) => {
        const nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit= async (e) => {
        e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
        console.log(this.state);
        const { id, password, role } = this.state;
        const { history, handleLogin } = this.props;


        try {
            const response = await Axios.post("/artSharing/sign", {
                id, // 똑같아서 생략 가능
                pw: password,
            });

            const { status, data } = response;

            if (status === 200) {
                console.log(`ss${data}`);

                this.setState({
                    role: response.data,
                });
                console.log(`dd${this.state.role}`);
            }

            this.handleClose();
            handleLogin(true, this.state.role);
            console.log(response);
            history.push("/");
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }


    render() {
        return (
            <div>
                <Button color="inherit" onClick={this.handleClickOpen}>
                    로그인
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Login</DialogTitle>
                    <DialogContent>
                        <TextField label="id" type="text" name="id" value={this.state.id} onChange={this.handleValueChange} /><br />
                        <TextField label="pw" type="password" name="password" value={this.state.password} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={this.handleFormSubmit}>ok</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default withRouter(Login);
