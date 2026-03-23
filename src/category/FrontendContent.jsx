import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../hooks/ThemeContext";

export default function FrontendContent({ data }) {
    let { theme } = useContext(ThemeContext);
    let [selected, setSelected] = useState({});
    let [submitted, setSubmitted] = useState(false);
    useEffect(() => {
        setSelected({});
        setSubmitted(false);
    }, [data]);

    let [copiedIndex, setCopiedIndex] = useState(null);
    let copyCode = (code, index) => {
        navigator.clipboard.writeText(code);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 800);
    }

    return (
        <>
            <h2 className="fw-bold">{data.title}</h2>
            <p className="text-secondary">{data.description}</p>
            <div className="my-4">
                {data.topics.map((item, index) => (
                    <div key={item.id} className={`card mb-4 shadow-sm border-0 ${theme === "dark" ? "bg-dark text-light" : "bg-white text-dark"}`}>
                        <div className="card-body">
                            <h5 className="fw-bold">{item.title}</h5>
                            <p className="text-secondary">{item.description}</p>

                            {item.example && (
                                <div className={`rounded-3 p-3 d-flex justify-content-between align-items-start ${theme === "dark" ? "bg-black" : "bg-light border"}`}>
                                    <pre className="mb-0 overflow-auto w-100">
                                        <code className="text-warning">{item.example}</code>
                                    </pre>
                                    <button className="btn btn-sm btn-outline-light border-0 ms-3" onClick={() => copyCode(item.example, index)}>
                                        {copiedIndex === index ? <i className="bi bi-clipboard-check"></i> : <i className="bi bi-clipboard"></i>}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {data.quiz && (
                <div className="mt-5">
                    <h4 className="mb-3"><i className="bi bi-question-octagon-fill" style={{ color: "lightGreen" }}></i> Quiz</h4>
                    {data.quiz.map((q, index) => (
                        <div key={index} className="mb-4">
                            <p className="fw-semibold">{index + 1}. {q.question}</p>
                            {q.options.map((opt, i) => (
                                <div key={i}>
                                    <input type="radio" name={`q${index}`} value={opt} checked={selected[index] === opt} onChange={() => setSelected({ ...selected, [index]: opt })} />
                                    {opt}
                                </div>
                            ))}

                            {submitted && (
                                <p className={selected[index] === q.answer ? "text-success" : "text-danger"}>{selected[index] === q.answer ? "Correct!" : `Correct: ${q.answer}`}</p>
                            )}
                        </div>
                    ))}
                    <button className="btn btn-success" onClick={() => setSubmitted(true)} > Submit Quiz</button>
                </div>
            )}
            {data.practice && (
                <div className="mt-5">
                    <h4 className="mb-3"><i className="bi bi-pencil-square" style={{ color: "lightGreen" }}></i> Practice</h4>

                    {data.practice.map((item, index) => (
                        <div key={index} className="card mb-3 p-3 shadow-sm">
                            <p className="fw-semibold">{item.task}</p>
                            <small className="text-secondary"><i className="bi bi-lightbulb-fill text-warning"></i> {item.hint}</small>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}