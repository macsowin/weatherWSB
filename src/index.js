import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
    state = {lat: null, errorMessage: ''}

    render() {
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Błąd: {this.state.errorMessage}</div>
        }
        return <Spinner />///message="Proszę pozwolić na geolokalizację..."/>
    }

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root')) //wstrzykujemy do roota