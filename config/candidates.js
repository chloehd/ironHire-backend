import React, { Component } from 'react'
import candidatesData from "../bin/candidatesData";

class Candidates extends Component {
  render() {
    return (
      <div>
         <h1>Candidates!</h1>
         {candidatesData.map((candidateDetail, index) => {
             return <h1>{candidateDetail.title}</h1>

                 })}
                 </div>

    )
  }
}


export default Candidates; 
