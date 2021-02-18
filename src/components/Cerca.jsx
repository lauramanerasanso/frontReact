import React, {Component} from 'react';
import foto from  '../imatges/fotoFiltres.jpg';
import '../Cerca.css';
import { Link } from 'react-router-dom';

/*
<Link to={"/cases?dataInici="+this.state.dataInici+"&dataFi="+this.state.dataFi}>
    <button className="btn btn-primary col-md-2"> Cerca </button>
</Link>
*/

class Cerca extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            dataInici: '',
            dataFi: ''
        };
    
        this.handleChangeInput = this.handleChangeInput.bind(this);
    
      }
    
      handleChangeInput(event){
        this.setState({[event.target.name]: event.target.value});
      }

    render() {
      return (
        <div>
            <div id="cercaInici" style={{ backgroundImage: "url("+foto+")", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
            <div className="container cercar">
                <div className="row rwcercar col-8 offset-2">

                        <input type="date" onChange={this.handleChangeInput} id="dataInici" name="dataInici" placeholder="Data Entrada" className="form-control col-md-5" />
                        <input type="date" onChange={this.handleChangeInput} id="dataFi" name="dataFi" placeholder="Data Sortida" className="form-control col-md-5" />
                        <Link to={"/cases?dataInici="+this.state.dataInici+"&dataFi="+this.state.dataFi}>
                            <button className="btn btn-primary"> Cerca </button>
                        </Link>
                        
                </div>
            </div>
            </div>
        </div>
      );
    }
}

export default Cerca;