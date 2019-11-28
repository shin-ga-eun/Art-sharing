import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

class ArtistOnlyMoreDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            setOpen: false,
            id: this.props.id,

        };
    }


    handleClickOpen = () => {
        this.setState({
            setOpen: true,
            open: true,
        });
    }

    handleClose = () => {
        this.setState({
            setOpen: false,
            open: false,

        });
    }

    handleRemove = async (e) => {
        e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
        this.setState({
            open: false,
            setOpen: false,
        });
        const { id } = this.state;
        console.log(id);


        try {
            const response = await axios.delete(`/artSharing/art/${id}`);

            console.log(response);
        } catch (error) {
            alert(error);
        }
    }

    // handleRemove = (e) => {
    //     const { id } = this.state;
    //     const url = `/artSharing/art/`;

    //     console.log(id);

    //     e.preventDefault();
    //     axios.delete(url+id)
    //         .then(response => {
    //                 console.log(response.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }


    render() {
        return (


            <div>
                <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                삭제하기
                </Button>

                {/* 다이얼로그 start */}
                <Dialog
                    open={this.state.open}
                    // onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">해당 작품을 영구적으로 삭제하시겠습니까 ?</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                        해당 작품을 영구적으로 삭제하시겠습니까 ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                        취소
                        </Button>
                        <Button onClick={this.handleRemove} color="secondary" variant="contained">
                        삭제하기
                        </Button>
                    </DialogActions>
                </Dialog>
                {/* 다이얼로그 end */}

            </div>
        );
    }
}
export default ArtistOnlyMoreDelete;
