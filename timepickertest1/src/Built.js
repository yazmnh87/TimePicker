import React, { Component} from 'react'

class Built extends Component {
    state = {
        hour: 12,
        minute: Number('00'),

    }

    incrementHour = () => {
        this.setState(prevState => ({
            hour: prevState.hour + 1
        }))}

        decrementHour = () => {
            this.setState(prevState => ({
                hour: prevState.hour - 1
            }))}

    incrementMin = () => {
        this.setState(prevState => ({
            minute: prevState.minute + 1
        }))
    }

    decrementMin = () => {
        this.setState(prevState => ({
            minute: prevState.minute - 1
        }))
    }

    render (){

        return (
            <div>
                <button onClick={this.incrementHour}>
                    <img src={require('./img/uparrow1.png')} alt="upHour"/>
                </button>
                <span>{this.state.hour}</span>
                <button onClick={this.decrementHour}>
                    <img src={require('./img/downarrow.png')} alt="downHour"/>
                </button>
                <span>:</span>
                <button onClick={this.incrementMin}>
                    <img src={require('./img/uparrow1.png')} alt="upMin"/>
                </button>
                {this.state.minute < 10 ? <span>0{this.state.minute}</span> : <span>{this.state.minute}</span>}
                <button onClick={this.decrementMin}>
                    <img src={require('./img/downarrow.png')} alt="downMin"/>
                </button>
            </div>

        )
    }

}

export default Built