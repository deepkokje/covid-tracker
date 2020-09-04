import React,{useState,useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core'
import styles from './countrypicker.module.css'
import { fetchCountries} from '../api/index'




function CountryPicker({handleCountryChange}) {
    const[fetchedCountries,setFetchCountries] = useState([])

useEffect(()=>{
    const fetchAPI = async ()=>{
        setFetchCountries(await fetchCountries())
    }

    fetchAPI()
},[setFetchCountries])


    return (
      <FormControl>
          <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
              <option value =''>Global</option>
              {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)} 
          </NativeSelect>
      </FormControl>
    )
}

export default  CountryPicker