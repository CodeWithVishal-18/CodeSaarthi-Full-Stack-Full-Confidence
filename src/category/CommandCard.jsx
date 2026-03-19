import React, { useContext, useState } from 'react'
import { ThemeContext } from '../hooks/ThemeContext'

export default function CommandCard({ title, description, mysql }) {
    let { theme } = useContext(ThemeContext)
    let [copied, setCopied] = useState(false)

    let copyCode = () => {
        navigator.clipboard.writeText(mysql)
        setCopied(true)
        setTimeout(() => setCopied(false), 800)
    }

    return (
        <div className={`card mb-4 shadow-sm border-0 ${theme === "dark" ? "bg-dark text-light" : "bg-white text-dark"}`}>
            <div className="card-body">
                <h5 className="fw-bold">{title}</h5>
                <p className="text-secondary">{description}</p>
                <div className={`rounded-3 p-3 d-flex justify-content-between align-items-start bg-black`}>    
                    <pre className="mb-0 overflow-auto w-100">
                        <code className="text-warning">{mysql}</code>
                    </pre>
                    <button className="btn btn-sm btn-outline-light border-0 ms-3"onClick={copyCode}>{copied ? <i className="bi bi-clipboard-check"></i> : <i className="bi bi-clipboard"></i>}</button>
                </div>
            </div>
        </div>
    )
}