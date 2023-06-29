import React from "react";
import "./Evenement_style.css";

class ParentContainer extends React.Component{
  render(){
    return <Evenement/>
  }
}

class Evenement extends React.Component{

    render(){
      return (
        <div className="box">
          <div className= "column1">
            <div className="group-1">
                <h1 className="text-wrapper">Titre</h1>
                <div className="rectangle-1" />
            </div>
            <div className="group-4">
              <div className="text-wrapper-2">Lieu</div>
              <div className="rectangle-2" />
            </div>
            <div className="group-2">
              <div className="text-wrapper-2">Proches Concernés</div>
              <div className="rectangle-2" />
            </div>
            <div className="photo">
              <div className="overlap-wrapper">
                <div className="overlap">
                  <img className="line" alt="photo proche1" src="" />
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap">
                  <img className="line" alt="photo proche2" src="" />
                </div>
              </div>
              <div className="div-wrapper">
                <div className="overlap">
                  <img className="line" alt="photo proche3" src="" />
                </div>
              </div>
            </div>
          </div>
          <div className= "column2">
            <div className="group-5">
              <div className="text-wrapper-2">Date</div>
              <div className="text-wrapper-4">Heure</div>
              <div className="rectangle-4" />
              <div className="rectangle-5" />
            </div>
            <div className="group-6">
              <div className="text-wrapper-2">Rappel</div>
              <div className="rectangle-2" />
            </div>           
          </div>
          <div className= "column3">
            <div className="group-3">
                <div className="text-wrapper-3">Description</div>
                <div className="rectangle-3" />
            </div>
            <div className="btnRetour">
              <img className="img" alt="Group" src="/img/group-104.png" />
            </div>
          </div>
        </div>
      );
    }

}

export default ParentContainer;


