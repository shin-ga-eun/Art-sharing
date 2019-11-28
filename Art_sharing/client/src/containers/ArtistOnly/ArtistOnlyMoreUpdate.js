// 상세페이지에서 id값을 넘겨주는 것까지함
// axios연결하는 거 하기.
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Input from "@material-ui/core/Input";

import axios, { put } from "axios";
import useStyles from "../../styles/ArtItemMoreIndex";

class ArtistOnlyMoreUpdate extends Component {
    state = {
        artItem: [],


        open: false,
    }


    // 버튼클릭시
    handleClickOpen = async () => {
        const { id } = this.props;

        this.setState({
            open: true, // Dialog 창을 열어준다
        });

        console.log(`here${id}`);
        try {
            const response = await axios.get(`/artSharing/art/detail/${id}`);
            const { status, data } = response;
            console.log(response);
            if (status === 200) {
                this.setState({
                    artItem: data,
                });
                console.log(`아이템${this.state.artItem.price}`);
            }
        } catch (e) {

        }
    }

    handleClose= () => {
        this.setState({
            open: false, // Dialog 텍스트를 초기화 하고 닫아준다
        });
    }

    handleValueChange = (e) => {
        const { artItem } = this.state;

        this.setState({
            artItem: {
                ...artItem,
                [e.target.name]: e.target.value,
            },

        });
    }

    updateArt() {
        const url = "/artSharing/art";

        const formData = new FormData();

        const {
            artName, explanation, id, price, imageUrl,
        } = this.state.artItem;

        formData.append("imageFile", imageUrl);

        const config = {
            headers: {
                "Content-type": "multipart/form-data",
            },
        };

        const json = `{ "artName": "${artName}", "explanation": "${explanation}",  "id": "${id}", "price": "${price}"}`;
        console.log(json);

        formData.append("json", json);
        return put(url, formData, config);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();


        console.log(`submit: ${this.state.artItem.artName}`);

        this.updateArt()
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        const { id } = this.props;
        const { artName, explanation, price } = this.state.artItem;
        console.log(id);

        return (
            <div>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                  수정하기
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle>작품 정보수정</DialogTitle>

                    <form onSubmit={this.handleFormSubmit}>

                        <DialogContent>

                        작품명
                            <Input
                                type="text"
                                fullWidth

                                value={artName}
                                name="artName"
                                id="artName"
                                onChange={this.handleValueChange}
                            /><br />

                        대여가
                            <Input
                                type="number"
                                fullWidth

                                value={price}
                                name="price"
                                id="price"
                                onChange={this.handleValueChange}
                            /><br />

                         작품설명
                            <Input
                                type="text"
                                fullWidth
                                value={explanation}
                                name="explanation"
                                id="explanation"
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
export default ArtistOnlyMoreUpdate;
