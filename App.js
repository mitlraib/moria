import './App.css';
import React from "react";

class App extends React.Component {
  state = {
    value: 0,
      textForButton:"Click Me !",
      textForTitle:"HAPPY BIRTHDAY!!",
      name:"moria",
      love: " ",
      love2: " "



  }



    valueChanged = (event)=>{
          document.body.style.backgroundImage = "url(https://static.vecteezy.com/system/resources/thumbnails/004/267/297/small_2x/cute-cookies-cartoon-character-free-vector.jpg)";
        document.getElementById("button").style.height="0px";
        document.getElementById("button").style.width="0px";
        this.setState({textForButton:" "});
        this.setState({textForTitle:" "});
        this.setState({name:" "});
        this.setState({love:" !אוהבת אותך חיים שלי בלי סוף"});
        this.setState({love2:"!שכל חלומותייך יתגשמו לטובה  "});







    }


  render() {
    return (
        <div className="App">
                <div>
                    <div  id={"headLine"}>{this.state.textForTitle} </div>
                    <div id ={"moria"}>{this.state.name}</div>
                  <br/>   <br/>
                  <button onClick={this.valueChanged} id={"button"}> {this.state.textForButton} </button>
                    <div id={"happendsAfter"}>{this.state.love}</div>
                    <div id={"happendsAfterAfter"}>{this.state.love2}</div>



                </div>

        </div>

    );

  }

}

export default App;

