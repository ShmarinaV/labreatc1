import React from 'react';


class BackBtn extends React.Component{

  onclick () {
    window.location.assign('.');
  }

  render(){
    return(
    <div>
        <button className = "btn" onClick={(e) => this.onclick(e)}>BACK</button>
		</div>
    )
  }
}

export default BackBtn;