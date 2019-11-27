import React, { Component } from "react";
import Artist from "./Artist";

export default class ArtistList extends Component {
    state={

        Artists: [
            {
                id: 1,
                image: "https://placeimg.com/64/64/1",
                ArtName: "1번작품",
                Customer: "라영지",
                RentalDate: "2019.09.10~2019.09.15",
            },
            {
                id: 2,
                image: "https://placeimg.com/64/64/1",
                ArtName: "2번작품",
                Customer: "신가은",
                RentalDate: "2019.09.15~2019.09.20",
            },
            {
                id: 3,
                image: "https://placeimg.com/64/64/1",
                ArtName: "3번작품",
                Customer: "홍영준",
                RentalDate: "2019.09.21~2019.09.25",
            },
        ],
    }




    render() {
 
        return (

            <Artist artistList={this.state.Artists} />

     
        );
    }
}
