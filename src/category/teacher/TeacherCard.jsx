import React from "react";
import "./Teacher.css"

export default function TeacherCard() {
  let teachers = [
    {
      name: "Tejas Kasare",
      role: "Senior Technical Instructor",
      institute: "IT Vedant Education Pvt. Ltd.",
      linkedin: "https://www.linkedin.com/in/tejaskasare/",
      notesUrl: "https://medium.com/@tejaskasare14/full-stack-java-interview-questions-4c948c9bb59f",
      urlCompo: "/teachers/tejas_kasare",
      image: "/teachers/tejas_kasare.jpg",
    },
  ]

  return (
    <>
      <div className="container py-4 mt-2">
        <div className="row g-4">
          {teachers.map((t, i) => (
            <a href={t.notesUrl} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none", cursor:"pointer"}}>
              <div key={i} className="col-12 col-md-6 col-lg-3">
                <div className="teacher-card">
                  <div className="teacher-inner border border-1">
                    <div className="teacher-img">
                      <img src={t.image} alt={t.name} />
                      <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon" onClick={(e) => e.stopPropagation()}  > <i className="bi bi-linkedin"></i></a>
                    </div>
                    <div className="teacher-info">
                      <h6 className="mb-1 text-light">{t.name}</h6>
                      <p className="mb-0">{t.role}</p>
                      <p className="fs">{t.institute}</p>
                    </div>
                  </div>
                </div>
              </div></a>
          ))}
        </div>
      </div>
    </>
  )
}