import React, { Component} from 'react'

class Built extends Component {
    state = {
        hour: 12,
        minute: Number('00'),
        hrdawn: "AM",
        hrdusk: "PM",
        PM: false

    }

    incrementHour = () => { 
        if(this.state.hour === 12){
            this.setState({
                hour: 1,
                PM: !this.state.pm
            })
        }
        else if(this.state.hour <= 11 && this.state.hour >= 0) {this.setState(prevState => ({
            hour: prevState.hour + 1
        })
        )
    } 
}

    

        decrementHour = () => {
            if(this.state.hour === 1){
                this.setState({
                    hour: 12
                })
            } else if(this.state.hour <= 12 || this.state.hour > 0){
                this.setState(prevState => ({
                    hour: prevState.hour - 1
                })
                )
            }
        }
            

    incrementMin = () => {
        console.log('hello')
        if(this.state.minute < 59 && this.state.minute >= 0) {
        this.setState(prevState => ({
            minute: prevState.minute + 1
        })
        )
    }
        else if(this.state.minute === 59){
           this.incrementHour()
           this.resetMinutes()
        }
    }

    decrementMin = () => {
        this.setState(prevState => ({
            minute: prevState.minute - 1
        }))
    }

    resetMinutes = () => {
        this.setState(() => ({
            minute: 0
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
                <span style={{fontSize: 20}}>{this.state.PM === false ? this.state.hrdawn : this.state.hrdusk }</span>
            </div>

        )
    }
}

export default Built