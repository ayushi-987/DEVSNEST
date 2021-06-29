
// SELECT ALL ELEMENTS
const country_name_element = document.querySelector(".country .name");
const total_cases_element = document.querySelector(".total-cases .value");
const new_cases_element = document.querySelector(".total-cases .new-value");
const recovered_element = document.querySelector(".recovered .value");
const new_recovered_element = document.querySelector(".recovered .new-value");
const deaths_element = document.querySelector(".deaths .value");
const new_deaths_element = document.querySelector(".deaths .new-value");

const ctx = document.getElementById("axes_line_chart").getContext("2d");


// APP VARIABLES
let app_data = [],
  cases_list = [],
  recovered_list = [],
  deaths_list = [],
  deaths = [],
  formatedDates = [];

  const API_URL = "https://disease.sh/v3/covid-19/countries" ;

  async function covid()
  {
    const res = await fetch(API_URL);
    console.log(res)
    const data= await res.json();
    console.log(data)

    if(res.status===4|| res.status ===200){
      const{cases,recovered,deaths}=data.data;
      console.log(cases);
    }
  }
  covid();
