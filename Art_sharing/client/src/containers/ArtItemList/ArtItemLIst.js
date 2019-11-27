import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import Axios from "axios";
import ArtItemListForm from "./ArtItemListForm";
import ArtItem from "./ArtItem";
import axios from "../../lib";

class ArtItemList extends Component {
  state = {
      keyword: "",

      artItems: [],

    }

  handleChange = (data) => {
      this.setState({
          keyword: data,
      });
      console.log(this.state.keyword);
  }

   mapToComponents = (data) => {
       data.sort();
       data = data.filter(contact => contact.artName.toLowerCase().indexOf(this.state.keyword) > -1);
       return <ArtItem artItems={data} />;
   }

    componentDidMount = async () => {
        // GET /artSharing/art/artsList/{pageNum}
        try {
            const response = await axios.get("/artSharing/art/artsList/1");
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
                <CssBaseline />
                <Container maxWidth="md">
                    <ArtItemListForm onData={this.handleChange} />
                    {this.mapToComponents(this.state.artItems)}
                </Container>
            </div>
        );
    }
}

export default ArtItemList;
