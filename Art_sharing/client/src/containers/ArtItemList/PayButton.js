import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Checkbox, Paper, DialogContentText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
// 서버로 대여료&반납날짜 보내주기 -> (반납일-현재날짜)*대여료
class PayButton extends Component {
  state={
      date: "",
      price: "",
      returnDate: "",
      open: false, // dialog 창이 열려있는지 유무
  }

handleClickOpen= (e) => {
    this.setState({
        open: true, // Dialog 창을 열어준다
    });
}

  handleValueChange= (e) => {
      this.setState({
          date: e.target.value,
          price: e.target.value,
          returnDate: e.target.value,
      });
  }

  handleClose= () => {
      this.setState({
          date: "",
          price: "",
          returnDate: "",
          open: false, // Dialog 텍스트를 초기화 하고 닫아준다
      });
  }


  handleFormSubmit= (e) => {
      e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
      console.log(this.state.returnDate);
      // const {price, returnDate}=this.state;

      this.setState({
          open: false,
      });
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
                      <TextField name="rentDate" type="date" value={this.state.returnDate} onChange={this.handleValueChange} />
                  </DialogContent>
                  <DialogContent>대여 기간을 적어주세요.(몇일)</DialogContent>
                  <DialogContent>
                      <TextField name="date" type="number" value={this.state.date} onChange={this.handleValueChange} />
                  </DialogContent>
                  <DialogActions>
                      <Button variant="outlined" color="primary" onClick={this.handleFormSubmTeit}>예</Button>
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>아니오</Button>
                  </DialogActions>
              </Dialog>
          </div>
      );
  }
}
export default PayButton;
