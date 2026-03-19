import React from 'react'

export default function SideBar({ topics, active, onSelect }) {
    return (
        <div className="list-group shadow-sm rounded-3">
            {topics.map((topic) => (
                <button key={topic.key} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center  ${active === topic.key ? "active fw-bold" : ""}`} onClick={() => onSelect(topic.key)} >
                    {topic.label}
                    {active === topic.key && (
                        <i className="bi bi-chevron-right"></i>
                    )}
                </button>
            ))}
        </div>
    )
}