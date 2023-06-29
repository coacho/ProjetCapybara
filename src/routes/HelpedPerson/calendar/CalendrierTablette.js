import React from 'react';
import './CalendrierTablette.css';
import './style.css';
import EcranEvenement from './EcranEvenement';
  
class ParentCalendrier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evenementClicked: false,
    };
  }

  handleEventClick = () => {
    this.setState((prevState) => ({
      evenementClicked: !prevState.evenementClicked,
    }));
  };

  render() {
    const { evenementClicked } = this.state;

    if (evenementClicked) {
      return <EcranEvenement />;
    } else {
      return <CalendrierTablette onEventClick={this.handleEventClick} />;
    }
  }
}


  class BarreNav extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [...props.data],
      };
    }
  
    handleIncrement = () => {
      if (this.state.data[0] >= 0 && this.state.data[6] < 24) {
        const newHeures = this.state.data.map((item) => {
          const incrementedValue = item + 1;
          return incrementedValue;
        });
        this.setState({ data: newHeures });
      }
    };
  
    handleDecrement = () => {
      if (this.state.data[0] > 0 && this.state.data[6] <= 24) {
        const newHeures = this.state.data.map((item) => {
          const incrementedValue = item - 1;
          return incrementedValue;
        });
        this.setState({ data: newHeures });
      }
    };
  
    formatNumber = (number) => {
      return number.toString().padStart(2, '0');
    };
  
    checkEvent = (evenement) => {
      const { idEvent, heuresEvent, displayEvent } = evenement;
      const heuresEventValue = heuresEvent;
      
      const hasEvent = this.state.data.some((el) => {
        return el === heuresEventValue;
      });
  
      return hasEvent ? displayEvent : false;
    };
  
    render() {
      const { evenement1, evenement2 } = this.props;
  
      const isEvenement1Visible = this.checkEvent(evenement1);
      const isEvenement2Visible = this.checkEvent(evenement2);
  
      return (
        <div className="frame-calendrier-barre_nav">
          <button className="fleche-haut" onClick={this.handleDecrement}>
            <img className="fleche" alt="Flèche vers le haut" href="" />
          </button>
          <ul className="frame-heure">
            {this.state.data.map((item, index) => (
              <li className="element-heure" key={index}>
                {this.formatNumber(item)}h
              </li>
            ))}
          </ul>
          <button className="fleche-bas" onClick={this.handleIncrement}>
            <img className="fleche" alt="Flèche vers le bas" href="" />
          </button>
          <div className="frame-calendrier-over">
            {isEvenement1Visible && (
                <div className="frame-event1">
                  <img className="element-event1-img" alt="Photo du médecin" />
                  <div className="frame-event1-cadre">
                    <div className="element-event1-texte">{evenement1.displayEvent}</div>
                  </div>
                </div>
            )}
            {isEvenement2Visible && (
                <div className="frame-event2">
                  <img className="element-event2-img" alt="photo de Pierre" />
                  <div className="frame-event2-cadre">
                    <div className="element-event2-texte">{evenement2.displayEvent}</div>
                  </div>
                </div>
            
            )}
          </div>
        </div>
      );
    }
  }
  
  

  class Evenement {
    
    constructor(idEvent,heuresEvent,displayEvent){
      this.idEvent = idEvent;
      this.heuresEvent = heuresEvent;
      this.displayEvent = displayEvent;
    }
    
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     idEvent : this.idEvent,
    //     heuresEvent : this.heuresEvent,
    //     displayEvent :  this.displayEvent
    //   }
    // }
    
    // handleClick = () => {
    //   this.props.onClick(); 
    // };

    render() {
      if (this.idEvent === 1) {
        return (
          <div className="frame-event1">
            <img className="element-event1-img" alt="Photo du médecin" />
            <div className="frame-event1-cadre">
              <div className="element-event1-texte">Rendez-vous Dr Colin (Kiné)</div>
            </div>
          </div>
        );
      } else if (this.idEvent === 2) {
        return (
          <div className="frame-event2">
            <img className="element-event2-img" alt="photo de Pierre" />
            <div className="frame-event2-cadre">
              <div className="element-event2-texte">Anniversaire de Pierre</div>
            </div>
          </div>
        );
      } else {
        return null;
      }
    }
  }

  class CalendrierTablette extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        listHeuresDefault: [6, 7, 8, 9, 10, 11, 12],
        evenementVisible: false, 
        evenement1: new Evenement(1, 11, true),
        evenement2: new Evenement(2, 15, true)
      };
    }
  
   handleEvenementClick = () => {
    this.setState((prevState) => ({
      evenementVisible: !prevState.evenementVisible,
    }));
  };
  
    render() {
      const { evenementVisible,evenement1,evenement2 } = this.state;
      return (
        <div className={"calendrier-tablette"}>
          <div className="frame-calendrier-global">
          <div className="frame-calendrier-over">
              {evenementVisible &&
               <Evenement 
                idEvent={evenement1.idEvent} 
                heuresEvent={evenement1.heuresEvent} 
                displayEvent={evenement1.displayEvent} 
                onClick={this.handleEvenementClick}
                />}
              {evenementVisible && 
              <Evenement 
              idEvent={evenement2.idEvent} 
              heuresEvent={evenement2.heuresEvent} 
              displayEvent={evenement2.displayEvent} 
              onClick={this.handleEvenementClick}
              />}
          </div> 
            <div className = "frame-calendrier-calendrier">
              <div className ="frame-calendrier-barre_nav-calendrier_main" >
                <BarreNav
                  data={this.state.listHeuresDefault}
                  evenement1={evenement1}
                  evenement2={evenement2}
                />
                <div>
                  <div className="frame-mois-en-cours">
                    <p className="element-mois-en-cours-texte">19 Juin - 24 Juin</p>
                  </div>
                  <div className="frame-calendrier-main">
                    <div className="frame-calendrier-semaine">
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Lundi 19</div>
                        </div>
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Mardi 20</div>
                        </div>
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Mercredi 21</div>
                        </div>
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Jeudi 22</div>
                        </div>
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Vendredi 23</div>
                        </div>
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Samedi 24</div>
                        </div>
                        <div className="frame-semaine">
                          <div className="element-semaine-jour">Dimanche 25</div>
                        </div>
                    </div>
                    <div className="frame-calendrier-heures">
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                      <div className="element-ligne">
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                        <div className="element-case" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }



export default ParentCalendrier;


