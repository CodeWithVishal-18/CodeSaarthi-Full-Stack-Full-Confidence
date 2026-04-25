import React, { useState, useEffect, memo } from 'react'
import SideBar from '../SideBar'
import FrontendContent from '../FrontendContent'
import { sqlData } from './sqlData'

let SQL = memo(() => {
    let topics = [
        { key: "intro", label: "Introduction" },
        { key: "database", label: "Database Basics" },
        { key: "ddl", label: "DDL Commands" },
        { key: "dml", label: "DML Commands" },
        { key: "dql", label: "DQL (SELECT)" },
        { key: "constraints", label: "Constraints" },
        { key: "joins", label: "Joins" },
        { key: "functions", label: "SQL Functions" },
        { key: "groupby", label: "GROUP BY & HAVING" },
        { key: "subqueries", label: "Subqueries" },
        { key: "views", label: "Views" },
        { key: "indexes", label: "Indexes" },
        { key: "procedures", label: "Stored Procedures" }
    ]
    let [activeIndex, setActiveIndex] = useState(0)
    let data = sqlData[activeIndex]
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [activeIndex])

    return (
        <div className="row mt-4">
            <div className="col-lg-3 mb-3">
                <div className="position-sticky top-0">
                    <h5 className="mb-3"><i className="bi bi-filetype-sql" style={{ color: "orange" }}></i> SQL Topics</h5>
                    <SideBar topics={topics} active={topics[activeIndex].key} onSelect={(key) => setActiveIndex(topics.findIndex(t => t.key === key))} />
                </div>
            </div>
            <div className="col-lg-9">
                {data && (
                    <>
                        <FrontendContent data={data} />
                        <div className="d-flex justify-content-between border-top pt-4 mt-5 mb-3">
                            <button className="btn btn-outline-secondary" disabled={activeIndex === 0} onClick={() => setActiveIndex(prev => prev - 1)} > <i className="bi bi-chevron-double-left"></i> Previous </button>
                            <span className="text-secondary"> {activeIndex + 1} / {topics.length} </span>
                            <button className="btn btn-success" disabled={activeIndex === topics.length - 1} onClick={() => setActiveIndex(prev => prev + 1)} > Next <i className="bi bi-chevron-double-right"></i> </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
})

export default SQL;