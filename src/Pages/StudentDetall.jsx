
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
const StudentDetall = () => {
  const { id } = useParams();
  const [stdData, setStdData] = useState({});
  useEffect(() => {
    fetch("http://localhost:8000/students/" + id)
      .then((res) => res.json())
      .then((data) => {
        setStdData(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);
  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <div className="container">
          <div className="card row">
            <div className="card-title">
              <h2>Student Detail</h2>
            </div>
            {stdData && (<div className="card-body">
              <img src={stdData.photo + "&" + stdData.id} alt="student" />
              <div className="card-text">
                <h3>{stdData.name} - ({stdData.id})</h3>
                <h4>Contact Details</h4>
                <h4>Email: {stdData.email}</h4>
                <h4>Phone: {stdData.phone} </h4>
                <h4>Birthday: {stdData.birthday} </h4>
                <h4>Section: {stdData.section} </h4>
                <h4>Major: {stdData.major} </h4>
                <h4>Admission Year: {stdData.admissionYear} </h4>

              </div>
              <Link className="btn btn-danger" to="/">
                Back to Listing
              </Link>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetall
