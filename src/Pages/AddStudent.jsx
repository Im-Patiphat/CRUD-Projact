import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
const AddStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    brithday: "",
    photo: "https://source.unsplash.com/random/200*200/?portrait",
    section: "",
    major: "",
    admissionYear: ""
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const studentData ={
      name: student.name,
      email: student.email,
      phone: student.phone,
      brithday: student.brithday,
      photo: student.photo,
      section: student.section,
      major: student.major,
      admissionYear: student.admissionYear
    };
    fetch("http://localhost:8000/students",{
      method:"POST" ,
      headers:{"content-type":"application/json"},
      body:JSON.stringify(studentData)
    }).then(
      (res) => {
        alert("Save sucessfully")
        navigate("/")
      }
    ).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card">
            <div className="card-title">
              <h2>Add new Student</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" required name="name" id="id" value={student.name} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="text" required name="email" id="email" value={student.email} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="phone">phone</label>
                    <input type="text" required name="phone" id="phone" value={student.phone} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="brithday">brithday</label>
                    <input type="date" required name="brithday" id="brithday" value={student.brithday} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="photo">photo</label>
                    <input type="text" required name="photo" id="photo" value={student.photo} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="section">section</label>
                    <input type="text" required name="section" id="section" value={student.section} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="major">major</label>
                    <input type="text" required name="major" id="major" value={student.major} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label htmlFor="admissionYear">admissionYear</label>
                    <input type="number" placeholder='YYYY' min="2000" max="2023" required name="admissionYear" id="admissionYear" value={student.admissionYear} onChange={handleChange} className='form-control' />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button className="btn btn-success" type='submit'>
                    Save
                  </button>
                  <Link to="/" className='btn btn-danger'>
                    Back
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddStudent
