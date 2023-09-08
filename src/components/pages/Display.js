import React ,{useState , useEffect, useContext} from 'react'
import axios from 'axios'
import Info from './Info'
import { Globalcontext } from '../Hooks/Globalcontext'
import { useSelector } from 'react-redux'

const Display = () => {
    const[posts,setPost] = useState([])
    const[limit,setLimit] = useState(20)


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>{
            if(data.error){
                //console.log(data.error)
            }
            else{
                setPost(data.data)
               // console.log(data.data)
            }
        })
        .catch(()=>console.log("Failed to connect"))
    },[])


    const item_store = useSelector(store=>store)
    console.log(item_store)
    //globalcontext variable
    //const value = useContext(Globalcontext)



  return (
    <>
    {/*<h1>{value}</h1>*/}

    <h1>No. of items in the store: {item_store.no_of_items}</h1>
    <div class="row row-cols-1 row-cols-md-2 g-4">
    
    {
        posts.map((item,i)=>{
          return  <Info key = {i} props={item} />
        })
    }
    </div>
    
    </>
  )
}

export default Display