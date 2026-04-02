import React, { useState } from "react";

export default function SideBar({ topics, active, onSelect }) {
    let [open, setOpen] = useState(false);

    let currentLabel = topics.find(t => t.key === active)?.label;
    return (
        <>
            <div
                className="d-block d-lg-none px-2">
                <div className="dropdown-toggle-box shadow-sm" onClick={() => setOpen(!open)} >
                    <span>{currentLabel}</span>
                    <i className={`bi ${open ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
                </div>

                {open && (
                    <div className="dropdown-menu-box shadow">
                        {topics.map((topic) => (
                            <div key={topic.key} className={`dropdown-item-box ${active === topic.key ? "active" : ""}`} onClick={() => { onSelect(topic.key); setOpen(false); }} >
                                {topic.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="list-group shadow-sm rounded-3 d-none d-lg-block">
                {topics.map((topic) => (
                    <button key={topic.key} onClick={() => onSelect(topic.key)} className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${active === topic.key ? "active fw-bold" : ""}`} >
                        {topic.label}
                        {active === topic.key && <i className="bi bi-chevron-right"></i>}
                    </button>
                ))}
            </div>
        </>
    )
}