//상세페이지에서 id값을 넘겨주는 것까지함 
//axios연결하는 거 하기.
import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import useStyles from '../../styles/ArtItemMoreIndex';
import axios from 'axios';



const ArtistOnlyMoreUpdate =({match}) => {

    const classes = useStyles.bind();
    console.log(match.params.id);
    const [artItem, setArtItem] = useState(null);

    useEffect(() => {
      const { id } = match.params;

      const get = async () => {
          try {
              const response = await axios.get(`/artSharing/art/detail/${id}`);
              const { status, data } = response;
              if (status === 200) {
                  setArtItem(data);
              }
          } catch (e) {

          }
        };
        get();
    }, []);

      // const handleChange = (e) => {
      //   const nextState = {};
      //   nextState[e.target.name] = e.target.value;
      //   this.setArtItem(nextState);
      // }

      const handleFormSubmit = async (e) => {
        e.preventDefault(); // axios를 통하여 데이터를 넘겨주는 부분 구현해야 함
        console.log(artItem);

        try {
            const response = await axios.put("/artSharing/art", {
                content: artItem,
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

    return (
      artItem && (
            <div className={classes.root}>
              <form onSubmit={handleFormSubmit}>

                <Grid container spacing={8}>
                  <Grid item>
                    <Card className={classes.image}>
                      <img className={classes.img} alt="complex" src={artItem.imageUrl} />
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                      <Grid item xs>
                        <TextField
                                      variant="outlined"
                                      required
                                      fullWidth
                                      label="작품명"
                                      value={artItem.artName}
                                      onChange={({ target: { value } }) => setArtItem(value)} 
                                      name="artName"
                                      autoComplete="explanation"
                                  />
                      <Typography gutterBottom variant="subtitle1">
                        작가명:  {artItem.artistName}
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                      <TextField
                                      variant="outlined"
                                      required
                                      fullWidth
                                      label="작품설명"
                                      value={artItem.explanation}
                                      onChange={({ target: { value } }) => setArtItem(value)} 
                                      name="explanation"
                                      autoComplete="explanation"
                                  />
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                      <TextField
                                      variant="outlined"
                                      required
                                      fullWidth
                                      label="대여가"
                                      value={artItem.price}
                                      onChange={({ target: { value } }) => setArtItem(value)} 
                                      name="price"
                                      autoComplete="price"
                                  />
                      </Typography>
                      <Typography gutterBottom variant="subtitle1">
                        작품 등록일:{artItem.regDate}
                      </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid container xs= {12} direction="row" justify="flex-end" alignItems="flex-start">
                  <Grid>
                    <Button type = "submit" variant="contained" color="secondary" style = {{marginRight: 20,}}>완료</Button>
                  </Grid>
                  <Grid>
                      
                  </Grid>
                </Grid>
               </form>
              
          </div>
        )
      );
    
  }
  export default ArtistOnlyMoreUpdate
