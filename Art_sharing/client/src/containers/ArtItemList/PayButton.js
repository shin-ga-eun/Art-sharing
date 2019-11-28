import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Checkbox, Paper, DialogContentText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Axios from "../../lib";
// 서버로 대여료&반납날짜 보내주기 -> (반납일-현재날짜)*대여료
class PayButton extends Component {
  state={
      id: this.props.id,
      price: "",
      returnDate: "",
      open: false, // dialog 창이 열려있는지 유무
  }

handleClickOpen= (e) => {
    console.log(this.state.id);
    this.setState({
        open: true, // Dialog 창을 열어준다
    });
}

handleValueChange= (e) => {
    const nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
}


  handleClose= () => {
      this.setState({
          price: "",
          returnDate: "",
          open: false, // Dialog 텍스트를 초기화 하고 닫아준다
      });
  }


  handleFormSubmit=async (e) => {
      e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
      const { price, returnDate } = this.state;
      const { id } = this.state;
      console.log(this.state);
      // const { history, handleLogin } = this.props;


      try {
          const response = await Axios.post(`/artSharing/rent/${id}`, {
              price, // 똑같아서 생략 가능
              returnDate,
          });
          console.log(response);
          this.handleClose();
      } catch (error) {
          alert(error);
          console.log(error);
      }
  }


  render() {
      return (

          <div>
              <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                 결제하기
              </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>결제창</DialogTitle>
                  <DialogContent>
          결제를 진행하시겠습니까?
                  </DialogContent>
                  <DialogContent>
       카카오페이<Checkbox />
       휴대폰결제<Checkbox />
       무통장입금<Checkbox />
                  </DialogContent>
                  <DialogContent>반납날짜를 입력하세요.</DialogContent>
                  <DialogContent>
                      <TextField name="returnDate" type="date" value={this.state.returnDate} onChange={this.handleValueChange} />
                  </DialogContent>
                  <DialogContent>대여료를 입력하세요</DialogContent>
                  <DialogContent>
                      <TextField name="price" type="text" value={this.state.price} onChange={this.handleValueChange} />
                  </DialogContent>
                  <DialogActions>
                      <Button variant="outlined" color="primary" onClick={this.handleFormSubmit}>예</Button>
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>아니오</Button>
                  </DialogActions>
              </Dialog>
          </div>
      );
  }
}
export default PayButton;
