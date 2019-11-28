import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import axios from "axios";
import ArtItemAddButton from "./ArtItemAddButton";
import ArtistOnlyItem from "./ArtistOnlyItem";


// 작가로 로그인 시, 작품관리(삭제,수정) 하는 컴포넌트
// 서버에서 작가에 대한 작품리스트를 받아서 리스트로 출력 ** 일단은 임시로 state값 지정
// 수정 삭제 후 다시 저장
class ArtistOnly extends Component {
    // 서버와 연결
    /*
    [데이터형식]
    id  작품아이디번호 number
    title   작품명
    artist  작가명
    image   작품이미지
    rentalToggle 대여상태 boolean
    descript   작품설명
    price   1일대여가 number
    */


    state = {

        artItems: [],
    }

    componentDidMount = async () => {
        // GET /artSharing/art/artsList/{pageNum}
        try {
            const response = await axios.get("/artSharing/art/1");
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
            <div>
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="flex-end"
                    style={{ marginBottom: 20 }}
                >
                    <ArtItemAddButton />
                </Grid>
                <Grid>
                    <ArtistOnlyItem artItems={this.state.artItems} />
                </Grid>
            </div>
        );
    }
}
export default ArtistOnly;
