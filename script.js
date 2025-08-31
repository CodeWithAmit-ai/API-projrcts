// const URL="https://dogapi.dog/api/v2/facts";
// const getData= async ()=>{
//     console.log("fetching data....");
//    let response= await fetch(URL);
//    console.log(response);//json format
//    let data=await response.json();
//    console.log(data);
// }
const URL = "https://dogapi.dog/api/v2/facts";

const getData = async () => {
    console.log("fetching data....");
    let response = await fetch(URL);
    let result = await response.json();
    let facts=result.data[0].attributes.body;
    document.getElementById("fact").textContent=facts;
}
const URL1="https://v2.jokeapi.dev/joke/Any";
const getJoke= async()=>{
    let response= await fetch(URL1);
    let data= await response.json();
    let jokeText="";
    if(data.type=="single"){
        jokeText=data.joke;
    }
    else{
        jokeText=`${data.setup}.....${data.delivery}`;
    }
    document.getElementById("joke").textContent=jokeText;
}
