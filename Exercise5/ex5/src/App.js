import './App.css';
import { Component } from 'react';

class ButtonMain extends Component{
  count_keep = Number(this.props.Cvalue);
  onPress = () =>{
    this.props.buttonCallback(this.count_keep);
  };
  render(){
    return(
      <button onClick={this.onPress} className='main-button'>{this.props.value}</button>
    );
  }
}
/**/
class Box_count extends Component{
  state = {
    mainCount: "MIN"
  }
  handleButton = (bData) => {
    if(bData === 1){
      if(this.state.mainCount === "MAX"){
        alert("Cannot Vote more")
      }else{

        if(this.state.mainCount+1 === 10){
          this.setState({mainCount: "MAX"})
        }else{
          if(this.state.mainCount === "MIN"){
            this.setState({mainCount: 1})
          }else{
            this.setState({mainCount: this.state.mainCount+bData})
          }
        }
      }
    }else{
      if(this.state.mainCount === "MIN"){
        alert("Cannot unvote")
      }else{
        if(this.state.mainCount-1 === 0){
          this.setState({mainCount: "MIN"})
        }else{
          if(this.state.mainCount === "MAX"){
            this.setState({mainCount: 9})
          }else{
            this.setState({mainCount: this.state.mainCount+bData})
          }
        }
      }
    }
  }
  render(){
    const {mainCount} = this.state;
    return(
      <div className='voteAndButton'>
        <ButtonMain value="Click to Vote" Cvalue = "1" buttonCallback = {this.handleButton} />
        <span className='mCount'>{mainCount}</span>
        <ButtonMain value="Click to Unvote" Cvalue = "-1" buttonCallback = {this.handleButton} />
      </div>
    );
  }
}
class MainBox extends Component{
  render(){
    return(
      <div className='mainBox'>
        <div className='flex_inMainBox'>
          <div>
          <h2>{this.props.h2_set}</h2>
          <h4>{this.props.h4_set}</h4>
          <p>{this.props.p_set}</p>
          </div>
          <img src={this.props.imp_set}></img>
        </div>
        <Box_count></Box_count>
      </div>
    );
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>โหวตอาหาร</h1>
        <MainBox h2_set="อาหารคาว" h4_set="ข้าวมันไก่" imp_set="https://sv1.picz.in.th/images/2023/02/22/LyYfQI.png" 
        p_set="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Donec ullamcorper suscipit eleifend. Proin non risus non odio 
         tempus dapibus vitae id diam. Integer et dapibus turpis, id 
         suscipit tellus. Morbi ultricies lacus eros, at feugiat orci 
         consectetur et. Nullam ut nibh pellentesque, mattis enim at, 
         ornare augue. Aliquam risus ante, dictum eget ipsum vitae, 
         viverra pulvinar augue. Aliquam erat volutpat. Praesent suscipit
          placerat lacus, eu sollicitudin ante placerat eu."></MainBox>
        <MainBox h2_set="อาหารหวาน" h4_set="เค้ก" imp_set="https://sv1.picz.in.th/images/2023/02/22/LyBuYu.jpg"
        p_set="Duis hendrerit vestibulum ex, eget vehicula lorem convallis
         sit amet. Duis posuere magna ipsum, ac pulvinar odio cursus at. 
         Morbi nec commodo magna, eu euismod augue. Mauris lacus libero, 
         feugiat vitae interdum sed, eleifend eu tellus. Duis pharetra, 
         metus at feugiat varius, dolor est vehicula lacus, sit amet malesuada 
         lacus quam ut eros. Etiam malesuada mauris in orci faucibus, ac mollis 
         justo gravida. Fusce vitae lacinia sapien, a maximus nisi. Pellentesque 
         sollicitudin varius accumsan. Vivamus efficitur turpis a quam porttitor, 
         id laoreet ligula viverra. Morbi et luctus nisl."></MainBox>
      </header>
    </div>
  );
}

export default App;