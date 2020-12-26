import React, { Component } from 'react'

export class DetailsPage extends Component {
    state = {
        index : 0
    }
    myRef = React.createRef();
    handleThumb = (index)=>{
      this.setState({
        index : index
      })
      const images = this.myRef.current.children;
      for(var i = 0 ; i < images.length ; i++){
        images[i].className = images[i].className.replace("active", "")
      }
      images[index].className = "active"
  
    };
    componentDidMount(){
      const {index} = this.state;
      this.myRef.current.children[index].className= "active";
    }
    render() {
        const {data} = this.props;
        return (
            <>                     
         {
          data.map((item,index) =>(
            <div key={item._id} className="details">
              <div className="big-img">
                <img  src={item.src[this.state.index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                  <div className="color">
                        {
                          item.colors.map((color,index) => (
                            <button key={index}style={{backgroundColor: color}}></button>
                          ))
                        }
                  </div>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className="thumbnail" ref = {this.myRef}>
                  {
                    item.src.map((img,index) => (
                      <img src = {img} alt="" key={index} onClick={()=>this.handleThumb(index)}/>
                    ))
                  }
                </div>
                <button className="cart">Add to Cart</button>
               </div>
             </div>
            )    
           )
          }    
            </>
        )
    }
}

export default DetailsPage
