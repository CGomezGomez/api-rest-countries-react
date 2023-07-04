import { useEffect, useState } from "react";
import {  StyledCard, StyledCardContainer, StyledImg, StyledForm, StyledInput, StyledName, StyledSelect, StyledSpan, StyledP } from "./styles";
import { v4 } from "uuid";


export const Main = ({ darkMode }) => {

    const [data, setData] = useState([])
    const [dataCountry, setDataCountry] = useState([])
    const [urlData , setUrlData] = useState('https://restcountries.com/v3.1/all')

    useEffect(() => {
        fetchData (urlData, setData, setDataCountry)
    }, [urlData]);

    
  return (

    <>
       
            <StyledForm onChange={(e) => {filterBySearch(e.target.value, data, setDataCountry)}}>
                <StyledInput darkMode={darkMode} type="text" placeholder="Search for a country…" />

                <StyledSelect darkMode={darkMode} onChange={(e)=>{filterByRegion(e.target.value, setUrlData)}}>
                    <option value="0">Filter by Region</option>
                    <option value="1">Africa</option>
                    <option value="2">America</option>
                    <option value="3">Asia</option>
                    <option value="4">Europe</option>
                    <option value="5">Oceania</option>
                </StyledSelect>
            </StyledForm>

            <StyledCardContainer>{dataCountry.map(country => (
                <StyledCard key={v4()} darkMode={darkMode} >
                    <StyledImg src={country.flags.svg} alt="" />
                    <StyledName>{country.name.common}</StyledName>
                    <StyledP>Population: <StyledSpan>{country.population}</StyledSpan></StyledP>
                    <StyledP>Region: <StyledSpan>{country.region}</StyledSpan></StyledP>
                    <StyledP>Capital: <StyledSpan>{country.capital}</StyledSpan></StyledP>
                </StyledCard>
        ))}</StyledCardContainer>
   
    </>

  )
}
const filterByRegion = (value, setUrlData) => {
    if(Number(value) === 0) setUrlData('https://restcountries.com/v3.1/all')
    if(Number(value) === 1) setUrlData('https://restcountries.com/v3.1/region/africa')
    if(Number(value) === 2) setUrlData('https://restcountries.com/v3.1/region/america')
    if(Number(value) === 3) setUrlData('https://restcountries.com/v3.1/region/asia')
    if(Number(value) === 4) setUrlData('https://restcountries.com/v3.1/region/europe')
    if(Number(value) === 5) setUrlData('https://restcountries.com/v3.1/region/oceania')
    
}

const filterBySearch = (value, data, setDataCountry) => {
    const filteredData = [...data]
    if(!value) setDataCountry(data)
    else setDataCountry(filteredData.filter(country => country.name.common.toLowerCase().includes(value.toLowerCase())))
}

const fetchData = async (url, setData, setDataCountry) =>{
    const request = await fetch(url);
    const data = await request.json()
    setData(data)
    setDataCountry(data)
}

export default Main;