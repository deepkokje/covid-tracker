import React, { Component } from 'react'
import Cards from './components/cards/cards'
import Chart from './components/chart/chart'
import CountryPicker from './components/countrypicker/countrypicker'
import {fetchData} from './components/api/index'
import styles from './App.module.css'
import Corona from  './images/image.png'

export default class App extends Component {

    state={
        data:{},
        country:''
    }
    async componentDidMount(){
        const Data = await fetchData()
        this.setState({data:Data})

    }

    handleCountryChange =async (country)=>{
        const Data = await fetchData(country )
       this.setState({data:Data, country:country})
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={Corona} alt="Covid-19"/>
                <Cards data={this.state.data}/>
                <CountryPicker  handleCountryChange={this. handleCountryChange}/>
                <Chart data={this.state.data} country={this.state.country}/>
            
            </div>
        )
    }
}
