import axios from 'axios'

export const getAllMovie = async() => {
    const res=await axios.get("http://localhost:3500/movie")
    .catch((err)=> {
    console.log(err)
});
    
    if(res.status!==200){
        return console.log("No Data")
    }
    const data=await res.data;
    return data;
}