import React from 'react';
import '../../assets/css/CalendrierTablette.css';
// import './style.css';

  
class ParentCalendrier extends React.Component {
  render() {
    return <CalendrierTablette />;
  }
}



  class EcranHeures extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [...props.data]
      };
    }

    handleIncrement = () => {
      if(this.state.data[0] >= 0 && this.state.data[6] < 24) {
        const newHeures = this.state.data.map(item => {
          const incrementedValue = item + 1;
          return incrementedValue
        });
        this.setState({ data: newHeures });
      }
    };
    
    handleDecrement = () => {
      if(this.state.data[0] > 0 && this.state.data[6] <= 24) {
        const newHeures = this.state.data.map(item => {
          const incrementedValue = item -1;
          return incrementedValue
        });
        this.setState({ data: newHeures });
      }
    };

    formatNumber = number => {
      return number.toString().padStart(2, '0');
    };

    render(){
       return(
        <div className="frame-calendrier-barre_nav">
          <button className="fleche-haut" onClick={() => {this.handleDecrement()}}>
            <img className="fleche" alt="Flèche vers le haut" href=""  />
          </button>
          <ul className="frame-heure">
            {this.state.data.map((item, index) => (
            <li className="element-heure" key={index}>{this.formatNumber(item)}h</li> 
           ))}
          </ul>
          <button className="fleche-bas"  onClick={() => {this.handleIncrement()}}>
            <img className="fleche" alt="Flèche vers le bas" href="" />
          </button>
     </div>
      );
    }

  }
  


  class Evenement1 extends React.Component {
    
    constructor(props){
      super(props);
      this.state = {
        heuresEvent : 22,
      };
    }

    get heuresEventValue() {
      return this.state.heuresEvent;
    }

    render(){
      return(
        this.props,
        <div className="frame-event1">
        <img className="element-event1-img" alt="Photo du médecin"/>
        <div className="frame-event1-cadre">
          <div className="element-event1-texte">Rendez-vous Dr Colin (Kiné)</div>
        </div>
      </div>
      ); 
    }
  }

  class Evenement2 extends React.Component {

    constructor(props){
      super(props);
      this.state = {
      heuresEvent : 14
      };
    }
    
    get heuresEventValue() {
      return this.state.heuresEvent;
    }

    render(){
      return(
        <div className="frame-event2">
        <img className="element-event2-img" alt="photo de Pierre"/>
        <div className="frame-event2-cadre">
          <div className="element-event2-texte">Anniversaire de Pierre</div>
        </div>
      </div>
      ); 
    }
  }

  
  class CalendrierTablette extends React.Component {

    constructor(props){
      super(props);
      this.state= {
        calendrier : "calendrier",
        style : "style",
        evenement1Visible: false
      }
    }

    toggleEvenement1 = () => {
      this.setState((prevState) => ({
        evenement1Visible: !prevState.evenement1Visible
      }));
    };

    render() {

      const listHeuresDefault = [6,7,8,9,10,11,12];
      const { evenement1Visible } = this.state;

      return (
        <div className={`calendrier-tablette ${this.calendrier}`} style={this.style}>
          <div className="frame-calendrier-global">
            <div className="frame-calendrier-over">
              <div>
                <button onClick={this.toggleEvenement1}>
                  {evenement1Visible ? "Hide Evenement1" : "Show Evenement1"}
                </button>
                {evenement1Visible && <Evenement1 />}
              </div>
              {/* <Evenement1 displayClass={refreshEvenement1} /> */}
              <Evenement2/>
            </div>
            <div className = "frame-calendrier-calendrier">
              <div className ="frame-calendrier-barre_nav-calendrier_main" >
                <EcranHeures data={listHeuresDefault}/>
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


