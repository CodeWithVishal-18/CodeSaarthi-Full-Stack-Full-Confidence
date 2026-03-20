import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import SideBar from '../SideBar'
import HTMLContent from './HTMLContent'
let apiKeys = {
    intro: "https://dummyjson.com/c/d5c8-939c-4870-b288"
}

export default function HTML() {
    let topics = [
        { key: "intro", label: "Introduction" },
        { key: "structure", label: "Basic Structure" },
        { key: "tags", label: "Tags & Elements" },
        { key: "lists", label: "Lists & Links" },
        { key: "forms", label: "Forms" },
        { key: "tables", label: "Tables" },
        { key: "semantic", label: "Semantic HTML" }
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
                    <h5 className="mb-3"><i className="bi bi-filetype-html text-danger"></i> HTML Topics</h5>
                    <SideBar topics={topics} active={activeTopic} onSelect={(key) => setActiveIndex(topics.findIndex(t => t.key === key))} />
                </div>
            </div>
            <div className="col-lg-9">
                {loading && <p>Loading...</p>}
                {data && (
                    <>
                        <HTMLContent data={data} />
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
