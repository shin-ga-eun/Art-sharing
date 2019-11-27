import React from 'react';
import { Header, Body, Footer } from "./components/layout";
import axios from './lib'

class App extends React.Component{

//   state={
//     data: [],
//   }
 
//  async componentDidMount(){
//   this.getContact()
//   }

//    deleteContact = async (id) =>{
//     try{
//     //  await axios.delete(`/contacts/${id}`);  //id 값에 해당하는 것이 삭제
//     //   this.getContact();  // 삭제후에 다시 가져오기

//     const {data}=this.state;
  
//     const newContact=data.contacts.filter(d=> d.id !==id);
//     this.setState({
//       data: {
//         contacts: newContact,
//       },
//     })
     
//      } catch (err){
//        console.log(err);
//      } 
//   }

//   getContact = async  () =>  {
//     try{
//       const response=await axios.get("/contacts/");
//       const resData= response.data;
//       //console.log( data );
  
//       this.setState({
//         data: resData
//       })
  
//      } catch (err){
//        console.log(err);
//      } 
//   }

  render(){
    //const {data}=this.state;
  return (
  <div>
    <Header />
    <Body />  {/*data={data} onDelete={this.deleteContact}*/}
    <Footer />
  </div>  
  )
}
};

export default App


