// 회원정보
import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Axios from "axios";


class Artist extends React.Component {
    state={
       data: {
            // mno: 0, //회원번호
            affiliation: "", // 소속
            age: "", // 나이
            id: "", // 아이디
            name: "신가은", // 이름
            password: "", // 비밀번호
            phone: "", // 전화번호
            role: "", // 역할
            sex: "", // 성별
        },
        isLoading:  true,
    }

    componentDidMount =async () => {
        try {
            const response = await Axios.get("/artSharing/sign");
            const { data } = response;
            console.log(response);
            this.setState({
                data,
                isLoading: false,
            });
        } catch (error) {
            const { data } = this.state;
            this.setState({
                data,
                isLoading: false,
            });
        }
    }

    handleChange=(e) => {
        const { data, isLoading } = this.state;
        console.log(this.state);
        this.setState({
            data: {
                ...data,
                [e.target.name]: e.target.value,
            },
            isLoading,

        });
    }


    render() {
        const { isLoading, data } = this.state;

        return (
            <React.Fragment>
                {isLoading === false
                &&                (
                    <React.Fragment>
                        <h1>회원정보</h1>
                        <form>
                            <div className="Artist">


                                <FormLabel htmlFor="affiliation">소속</FormLabel>
                                <Input
                                    type="text"
                                    value={data.affiliation}
                                    name="affiliation"
                                    id="affiliation"
                                    placeholder=""
                                    onChange={this.handleChange}
                                />
                                <br />

                                <FormLabel htmlFor="age">나이</FormLabel>
                                <Input
                                    type="text"
                                    value={data.age}
                                    name="age"
                                    id="age"
                                    placeholder=""
                                    onChange={this.handleChange}
                                />
                                <br />

                                <FormLabel htmlFor="id">아이디</FormLabel>
                                <Input
                                    id="id"
                                    value={data.id}
                                    name="id"
                                    onChange={this.handleChange}
                                />

                                <br />


                                <FormLabel htmlFor="password">비밀번호</FormLabel>
                                <Input
                                    value={data.password}
                                    name="password"
                                    id="password"
                                    placeholder=" "
                                    onChange={this.handleChange}
                                />

                                <br />
                                <FormLabel htmlFor="phone">전화번호</FormLabel>
                                <Input
                                    value={data.phone}
                                    name="phone"
                                    id="phone"
                                    placeholder=" "
                                    onChange={this.handleChange}
                                />

                                <br />
                                <FormLabel htmlFor="role">역할</FormLabel>
                                <Input
                                    value={data.role}
                                    name="role"
                                    id="role"
                                    placeholder=" "
                                    onChange={this.handleChange}
                                />

                                <br />
                                <FormLabel htmlFor="sex">성별</FormLabel>
                                <Input
                                    value={data.sex}
                                    name="sex"
                                    id="sex"
                                    placeholder=" "
                                    onChange={this.handleChange}
                                />

                                <br />

                                <Button type="submit" variant="contained" color="secondary">등록</Button>


                            </div>
                        </form>
                    </React.Fragment>
                )
                }
                {isLoading === true && <div>Loading</div>}
            </React.Fragment>
        );
    }
}
export default Artist;
