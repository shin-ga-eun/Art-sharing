import React, { Component } from "react";
import RentClient from "./RentClient";
import axios from "../../lib";

export default class RentListClient extends Component {
    state={
        artItems: [],

        // Artworks: [
        //     {
        //         id: 1,
        //         image: "https://placeimg.com/64/64/1",
        //         ArtName: "1번작품",
        //         Customer: "라영지",
        //         RentalDate: "2019.09.10~2019.09.15",
        //     },
        //     {
        //         id: 2,
        //         image: "https://placeimg.com/64/64/1",
        //         ArtName: "2번작품",
        //         Customer: "신가은",
        //         RentalDate: "2019.09.15~2019.09.20",
        //     },
        //     {
        //         id: 3,
        //         image: "https://placeimg.com/64/64/1",
        //         ArtName: "3번작품",
        //         Customer: "홍영준",
        //         RentalDate: "2019.09.21~2019.09.25",
        //     },
        // ],
    }

    componentDidMount = async () => {
        // GET /artSharing/art/artsList/{pageNum}
        try {
            const response = await axios.get("/artSharing/rent/1");
            const { status, data } = response;
            if (status === 200) {
                console.log(data);
                const { state } = this;
                this.setState({
                    ...state,
                    artItems: data.content,
                });
            }
        } catch (e) {

        }
    }


    render() {
        return (

            <RentClient rentList={this.state.artItems} />

        );
    }
}
