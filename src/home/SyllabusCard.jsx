import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function SyllabusCard(prop) {
    let category = prop.categoryArray
    let navigate = useNavigate();

    return (
        <>
            {
                !category ? "loading" : category.map((category, index) => {
                    return (
                        <div className="col-12 col-md-6 col-lg-3 mb-2" key={index}>
                            <div className="card h-100 shadow-sm" style={{ cursor: "pointer" }} onClick={() => navigate(category.route)}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <h5>{category.title}</h5>
                                        {category.status === "active" ? (
                                            <span className="text-success fw-semibold">Active</span>
                                        ) : (
                                            <span className="text-danger fw-light">Beta</span>
                                        )}
                                    </div>
                                    <p className="text-secondary">{category.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}