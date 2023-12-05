import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from 'axios'
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_APP_API_KEY}`
// console.log(import.meta.env.VITE_APP_API_KEY);
console.log(import.meta.env.VITE_APP_API_KEY);

const Gallery = () => {


      const {searchTerm} = useGlobalContext();
      // access query client
      const queryClient = useQueryClient();
    
      // fetching data
      const response = useQuery({
        queryKey:['images',searchTerm],
        queryFn: async ()=>{
          const result = await axios.get(`${url}&query=${searchTerm}`);
          // console.log(result)
          return result.data;
          
        }
      })
      // console.log(response)

      if(response.isLoading){
        return(
          <section className="image-container">
            <h4>Loading...</h4>
          </section>
        )
      }
      if(response.isError){
        return(
          <section className="image-container">
            <h4>Error...</h4>
          </section>
        )
      }
      const results = response.data.results;
      if(results.length<1){
        return(
          <section className="image-container">
            <h4>No Result Found</h4>
          </section>
        )
      }
  return (
    <section className="image-container">
      {
        results.map(item=>{
          const url = item?.urls?.small;
          return(
            <img src={url} alt={item.alt_description} key={item.id}/>
          )
        })
      }
    </section>
  )
}

export default Gallery
