import React from 'react'
import Header from './Header'

const Addstudent = () => {
  return (
    <div>
        <Header />

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="from-label">Name</label>
                    <input placeholder='Enter Name' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="from-label">RollNo</label>

                    <input placeholder='Rollno' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="from-label">Adm No</label>
                    <input placeholder='Admno' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="from-label">University RegNo</label>
                    <input placeholder='University Regno' type="text" className="form-control"/>


                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                    <label for="" className="from-label">College</label>
                    <input placeholder='College' type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <button className="btn-success">Register</button>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Addstudent