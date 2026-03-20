import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import SideBar from '../SideBar'
import CommandCard from './CommandCard'

let apiKeys = {
    ddl: "https://dummyjson.com/c/24a5-b16a-4993-b60b",
    constraints: "https://dummyjson.com/c/cc8b-e839-4666-afb9",
    dml: "https://dummyjson.com/c/57cb-93eb-48d5-9ef4",
    tcl: "https://dummyjson.com/c/2f50-0602-47d4-be92",
    dql: "https://dummyjson.com/c/fe63-2e37-4569-8771",
    dcl: "https://dummyjson.com/c/fab3-7308-4164-a2ba"
}

export default function SQL() {
    let topics = [
        { key: "ddl", label: "DDL" },
        { key: "constraints", label: "Constraints" },
        { key: "dml", label: "DML" },
        { key: "tcl", label: "TCL" },
        { key: "dql", label: "DQL" },
        { key: "dcl", label: "DCL" }
    ]
    let [activeIndex, setActiveIndex] = useState(0)
    let activeTopic = topics[activeIndex].key
    let { data, loading } = useFetch(apiKeys[activeTopic])
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [activeIndex])

    return (
        <div className="row mt-4">
            <div className="col-lg-3 mb-3">
                <div className="position-sticky top-0">
                    <h5 className="mb-3"><i className="bi bi-filetype-sql text-danger"></i> SQL Topics</h5>
                    <SideBar topics={topics} active={activeTopic} onSelect={(key) => setActiveIndex(topics.findIndex(t => t.key === key))} />
                </div>
            </div>
            <div className="col-lg-9">
                {loading && <p>Loading...</p>}
                {data && (
                    <>
                        <h2 className="fw-bold">{data.topic}</h2>
                        <p className="text-secondary">{data.description}</p>
                        <div className="my-4">
                            {data.commands.map((cmd) => (<CommandCard key={cmd.id} {...cmd} />))}
                        </div>
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
}