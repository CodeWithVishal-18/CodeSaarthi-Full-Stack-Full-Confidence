import React from 'react'
import SyllabusCard from './SyllabusCard'
import { useNavigate } from 'react-router-dom'
import { SyllabusData } from './SyllabusData';

export default function Home() {
  let navigate = useNavigate();
  return (
    <div className="container py-5">

      <h2 className="mb-4"><i className="bi bi-stack text-danger"></i> Full Stack Syllabus</h2>
      <div className="row"><SyllabusCard categoryArray={SyllabusData.categories} /></div>

      <h2 className="mt-5 mb-4"><i className="bi bi-lightning-charge-fill text-warning"></i> Cheatsheets & Interview Preparation</h2>
      <div className='d-flex g-2'>
        <div className="col-12 col-md-6 col-lg-3 mb-2 me-4">
          <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }} onClick={() => navigate("/sqlcheatsheet")}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5>SQL Cheatsheet</h5>
                <span className="text-success fw-semibold">Active</span>
              </div>
              <p className="text-secondary">An easy SQL cheatsheet with core commands and examples for beginners.</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mb-2">
          <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }} onClick={() => navigate("/sqlcheatsheet")}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5>Logic Building</h5>
                <span className="text-success fw-semibold">Active</span>
              </div>
              <p className="text-secondary">Practice logical problems, patterns, and output-based questions to strengthen your problem-solving skills and prepare for interviews.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}