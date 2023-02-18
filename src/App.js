import React from 'react';
//This js contains all the stuff to render

class MyApp extends React.Component{
  constructor(props){
    super(props)

    this.state={
      input: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
handleChange(event){
  this.setState({
    input: event.target.value
  });
}
  render(){
    return(
      <div>
        <Editor input={this.state.input} handleChange={this.handleChange}/>
        <Preview input={this.state.input}/>
      </div>
    )
  }
}

class Editor extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <h1>Editor</h1>
      
      <textarea id="editor" value={this.props.input} onChange={this.props.handleChange}></textarea>
     
      </div>
  )
  
  };
}

class Preview extends React.Component {
  constructor(props){
    super(props)
  }
render(){
  return(
    <div>
    <h1>Previewer</h1>
    <p id="preview">{this.props.input}</p>
    </div>
  )
}
}

export default MyApp;

