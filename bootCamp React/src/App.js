import React, { Component } from "react";



class MeuBtn extends Component{

  render(){

    
    return <button onClick={()=>this.props.change(this.props.text)}>{this.props.text}</button>
  }
}

class MeuTitulo extends Component{
  render(){

    return <h2>  você cliclou no: {this.props.tittle}</h2>
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      btnAtual: ''
    }
  }

  handleChange = (nome) =>{
    
    this.setState({
      btnAtual: nome
    })
  }

  render() {
    
    return(
      <>
  <MeuTitulo  tittle={this.state.btnAtual}/>
  <MeuBtn change={this.handleChange}  text="Salve rapazeada!!!"/>
  <MeuBtn change={this.handleChange} text="Chateado com a situação!!!"/>
  <MeuBtn change={this.handleChange} text="to com uma fome da bichiga!!!"/>
  
      </>
    ); 

  }

}