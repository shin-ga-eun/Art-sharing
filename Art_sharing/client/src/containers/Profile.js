// 회원정보
import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Card } from "@material-ui/core";
import Axios from "axios";


class Artist extends React.Component {
    state={
        data: {
            name: "", // 이름
            affiliation: "", // 소속
            role: "", // 역할
            sex: "", // 성별
            age: "", // 나이
            id: "", // 아이디
            password: "", // 비밀번호
            phone: "", // 전화번호

        },
        isLoading: true,
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

    handleFormSubmit=async (e) => {
        e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
        console.log("hello");
        console.log(this.state.data);
        const {
            affiliation, age, id, name, password, phone, role, sex,
        } = this.state.data;

        try {
            const response = await Axios.put("/artSharing/sign", {
                affiliation,
                age,
                id,
                name,
                password,
                phone,
                role,
                sex,
            }, {
                headers: {
                    "Content-type": "application/json",
                },
            });
            console.log(response);
        } catch (error) {
            alert(error);
            console.log(error);
        }
    }


    render() {
        const { isLoading, data } = this.state;

        return (
            <React.Fragment>
                {isLoading === false
                && (
                    <React.Fragment>
                        <h1>회원정보</h1>
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="Artist">

                                <FormLabel htmlFor="name">이름</FormLabel>
                                <Input
                                    type="text"
                                    value={data.name}
                                    name="name"
                                    id="name"
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

                                <FormLabel htmlFor="role">역할</FormLabel>
                                <Input
                                    value={data.role}
                                    name="role"
                                    id="role"
                                    placeholder=" "
                                    // onChange={this.handleChange}
                                />

                                <br />

                                <FormLabel htmlFor="id">아이디</FormLabel>
                                <Input
                                    id="id"
                                    value={data.id}
                                    name="id"
                                    // onChange={this.handleChange}
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

                                <Button type="submit" size="small" color="primary">정보수정하기</Button>

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
