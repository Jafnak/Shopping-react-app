import React, { useEffect, useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

const View = () => {
    const [shopData, setData] = useState([] )

    const getDataFromNet=()=>
        [
        
            axios.get("https://fakestoreapi.com/products").then(
                (response)=>{
                    setData(response.data)
                }
            ).catch().finally()
        
    ]

    useEffect(()=>{getDataFromNet()},[])

    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {shopData.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                                        <div class="card" >
                                            <img src={value.image} class="card-img-top" height="350px"alt="..."></img>
                                            <div class="card-body">
                                                <h5 class="card-title">{value.id}</h5>
                                                <h5 class="card-title">{value.title}</h5>
                                                <p class="card-text">{value.category}</p>
                                                <p class="card-text">{value.description}</p>
                                                

                                                
                                                <a href="#" class="btn btn-primary">{value.price}</a>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View