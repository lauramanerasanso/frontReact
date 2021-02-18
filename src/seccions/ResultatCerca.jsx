import React, {Component} from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import '../AppCerca.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js/dist/popper.js';
import CardCasa from '../components/CardCasa';
import Header from '../components/Header';
import Footer from '../components/Footer';



class ResultatCerca extends Component {

  state = {
    cases: []
  }

  constructor(props){
    super();
  }

  componentDidMount() {

    var bodyFormData = new FormData();

    bodyFormData.append('dataInici', '2021-03-01');

    bodyFormData.append('dataFi', '2021-03-02'); 

    axios({
      method: 'post',
      url: 'http://api.home:8080/cases',
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
      })
      .then(res => {
        const cases = res.data;
        console.log(cases[0].traduccioNom);
        this.setState({ cases });
        console.log(this.state.cases);
    })
    
  }
  
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row cards">
            {this.state.cases.map( function (casa, index){
                return (
                  <div className="col-sm-6 col-md-4 oneCard">
                      <CardCasa key={casa.id} img={casa.img_principal} nom={casa.traduccioNom} descripcio={casa.tradDescripcio} habitacions={casa.nHabitacions} banys={casa.nBanys}/>
                  </div>
                );
            })}
          </div>
        </div>
        <Footer /> 
                                
      </div>
    );
  }
}

export default ResultatCerca;