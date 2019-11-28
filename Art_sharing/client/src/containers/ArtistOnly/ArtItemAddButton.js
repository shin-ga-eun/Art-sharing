// 작품등록

import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { post } from "axios";
import Axios from "../../lib";

class ArtItemAdd extends Component {
    // 서버로 데이터 보내주기 -> handleSubmit에서 구현
  /*
  [데이터형식]
  file 작품이미지 image
  title 작품명
  member 작가
  price 1일대여가 number
  explanation 작품설명
  regdate 작품등록날짜 date : 사용자가 설정하는것 x
  */
  state={
      artName: "",
      explanation: "",
      // memeber:"",
      price: "",
      // regdate: Date(),
      file: null,

      open: false, // dialog 창이 열려있는지 유무

  }

  // 버튼클릭시
  handleClickOpen= () => {
      this.setState({
          open: true, // Dialog 창을 열어준다
      });
  }

  handleClose= () => {
      this.setState({
          open: false, // Dialog 텍스트를 초기화 하고 닫아준다
      });
  }

  handleValueChange = (e) => {
      const nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
  }

  handleFileInput = (e) => {
      this.setState({
          file: e.target.files[0],
      });
  }


  addArt() {
      const url = "/artSharing/art";

      const formData = new FormData();
      const { artName, explanation, price } = this.state;

      formData.append("imageFile", this.state.file);

      const config = {
          headers: {
              "Content-type": "multipart/form-data",
          },
      };

      const json = `{ "artName": "${artName}", "explanation": "${explanation}", "price": "${price}"}`;
      console.log(json);

      formData.append("json", json);
      return post(url, formData, config);
  }


  //  AddArt2 = async () => {
  // const url = "/artSharing/art";

  // const formData = new FormData();
  // const { artName, explanation, price } = this.state;

  // formData.append("imageFile", this.state.file);
  // // formData.append('artName', this.state.artName)
  // formData.append('explanation', this.state.explanation)
  // formData.append('price', this.state.price)

  //     const config = {
  //         headers: {
  //             "Content-type": "multipart/form-data",
  //         },
  //     };


  //     const json = `{ "artName": "${artName}", "explanation": "${explanation}", "price": "${price}"}`;
  //     console.log(json);

  //     try {
  //         const response = await post(url, { formData, json }, config);

  //         return response
  //     } catch(err) {

  //         return null;

  //     }
  // }


  handleFormSubmit = (e) => {
      e.preventDefault();


      console.log("handleFormSubmit 들어옴.");

      this.addArt()
          .then((response) => {
              console.log(response.data);
          })
          .catch((error) => {
              console.log(error);
          });
  }


  render() {
      return (
          <div>
              <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.handleClickOpen}
                  style={{
                      paddingLeft: 15, paddingRight: 15, fontSize: 17, margin: 15,
                  }}
              >
             작품등록
              </Button>

              <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  fullWidth
                  maxWidth="sm"
              >
                  <DialogTitle>작품등록</DialogTitle>

                  <form onSubmit={this.handleFormSubmit}>
                      <DialogContent>
                사진을 등록해주세요 .. <br />
                          <input type="file" name="file" file={this.state.file} onChange={e => this.handleFileInput(e)} /><br />

                      </DialogContent>
                      <DialogContent>

                          <TextField
                              style={{ marginBottom: 15 }}
                              variant="outlined"
                              autoFocus
                              fullWidth
                              // helperText="작품명"
                              label="작품명"
                              type="text"
                              name="artName"
                              value={this.state.artName}
                              onChange={this.handleValueChange}
                          /><br />

                          <TextField
                              id="outlined-adornment-weight"
                              variant="outlined"
                              label="대여가"
                              type="number"
                              name="price"
                              onChange={this.handleValueChange}
                              helperText="대여가 (1일기준)"
                              InputProps={{
                                  endAdornment: <InputAdornment position="end">₩(원)</InputAdornment>,
                              }}
                          />

                          <TextField
                              style={{ marginBottom: 15 }}
                              fullWidth
                              label="작품설명"
                              rows="6"
                              multiline
                              margin="normal"
                              variant="filled"
                              name="explanation"
                              value={this.state.explanation}
                              onChange={this.handleValueChange}
                          /><br />
                      </DialogContent>

                      <DialogActions>
                          <Button variant="outlined" color="primary" onClick={this.handleClose}>취소</Button>
                          <Button type="submit" variant="contained" color="secondary" onClick={this.handleClose}>등록</Button>
                      </DialogActions>
                  </form>
              </Dialog>
          </div>
      );
  }
}

export default ArtItemAdd;
