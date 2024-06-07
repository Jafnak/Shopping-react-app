import React from 'react'
import { Nav } from './Nav'

const Add = () => {
  return (
    <div>

<Nav/>

<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <label htmlFor="" className="form-label">Id</label>
            <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Title</label>
        <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Price</label>
        <input type="text" className="form-control" />
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">Description</label>
        <textarea name="" id="" className="form-control"></textarea>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-label">category</label>
        <select name="" id="" className="form-control">
            <options>Men's clothing</options>
            <options>Women's clothing</options>
        </select>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <label htmlFor="" className="form-control">Image</label>
        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <button className="btn btn-warning">Add</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default Add