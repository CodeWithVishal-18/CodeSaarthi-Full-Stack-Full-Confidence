import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar'
import FrontendContent from '../FrontendContent'
import { javaScript } from './javaScript'

export default function JavaScript() {
  let topics = [
    { key: "intro", label: "Introduction" },
    { key: "variables", label: "Variables & Data Types" },
    { key: "operators", label: "Operators" },
    { key: "typeConversion", label: "Type Conversion" },
    { key: "conditionals", label: "Conditional Statements" },
    { key: "loops", label: "Loops" },
    { key: "functions", label: "Functions" },
    { key: "scope", label: "Scope & Hoisting" },
    { key: "arrays", label: "Arrays" },
    { key: "objects", label: "Objects" },
    { key: "dom", label: "DOM Manipulation" },
    { key: "events", label: "Events" },
    { key: "es6", label: "ES6+ Features" },
    { key: "errorHandling", label: "Error Handling" },
    { key: "async", label: "Async JavaScript" },
    { key: "storage", label: "Local Storage" },
    { key: "browserAPI", label: "Browser APIs" }
  ]
  let [activeIndex, setActiveIndex] = useState(0)
  let data = javaScript[activeIndex]
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeIndex])

  return (
    <div className="row mt-4">
      <div className="col-lg-3 mb-3">
        <div className="position-sticky top-0">
          <h5 className="mb-3"><i className="bi bi-javascript text-warning"></i> JavaScript Topics</h5>
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
}
