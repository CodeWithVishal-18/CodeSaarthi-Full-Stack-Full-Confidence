import React, { memo, useContext, useState } from 'react'
import { ThemeContext } from '../../hooks/ThemeContext';

let LogicCard = memo(({ problem }) => {
    let { theme } = useContext(ThemeContext);
    let [open, setOpen] = useState(false);
    let [showUnlock, setShowUnlock] = useState(false);
    let [selected, setSelected] = useState("");
    let [showSolution, setShowSolution] = useState(false);

    let handleUnlock = () => {
        if (selected === problem?.unlockQuestion?.answer) {
            setShowSolution(true);
            setShowUnlock(false);
        } else {
            alert("Wrong answer! Try again.")
        }
    }
    let copyCode = (code) => {
        navigator.clipboard.writeText(code)
        alert("Command copied!")
    }

    return (
        <div className={`card mb-4 shadow-sm border-0 ${theme === "dark" ? "bg-dark text-light" : "bg-white text-dark"}`}>
            <div className="card-body">
                <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
                    <div className="d-flex justify-content-between align-items-center" >
                        <h5 className="fw-bold mb-0">Q. {problem?.title}</h5>
                        <div>
                            {problem?.difficulty && (
                                <span className={`badge me-2 ${problem.difficulty === "Easy" ? "bg-success" : problem.difficulty === "Medium" ? "bg-warning text-dark" : "bg-danger"}`}> {problem.difficulty} </span>
                            )}
                            {problem?.category && (
                                <span className="badge bg-primary">{problem.category}</span>
                            )}
                        </div>
                    </div>
                    <p className="text-secondary mt-2">{problem?.description}</p>
                </div>
                {open && (
                    <>
                        <div className="mb-3">
                            <p><strong>Input:</strong> {problem?.input}</p>
                            <p><strong>Output:</strong> {problem?.output}</p>
                        </div>
                        <div className="mb-3">
                            <h6 className="fw-semibold">Examples:</h6>
                            {problem?.examples?.length > 0 ? (
                                problem.examples.map((ex, i) => (
                                    <div key={i} className={`p-2 rounded mb-2 ${theme === "dark" ? "bg-black" : "bg-light border"}`} >
                                        <p className="mb-1"><strong>Input:</strong> {ex.input}</p>
                                        <div><strong>Output:</strong> <pre><code>{ex.output}</code></pre></div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-muted">No examples available</p>
                            )}
                        </div>

                        <div className="mb-3">
                            <h6 className="fw-semibold">Constraints:</h6>
                            {problem?.constraints?.length > 0 ? (
                                <ul>
                                    {problem.constraints.map((c, i) => (
                                        <li key={i}>{c}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-muted">No constraints provided</p>
                            )}
                        </div>

                        {!showSolution && !showUnlock && (
                            <button className="btn btn-outline-primary mt-2" onClick={() => setShowUnlock(true)} > View Solution <i className="bi bi-shield-lock-fill text-warning"></i> </button>
                        )}

                        {showUnlock && problem?.unlockQuestion && (
                            <div className="mt-3">

                                <p className="fw-semibold">{problem.unlockQuestion.question}</p>

                                {problem.unlockQuestion.options?.map((opt, i) => (
                                    <div key={i}>
                                        <input type="radio" name={`unlock-${problem.id}`} value={opt} checked={selected === opt} onChange={() => setSelected(opt)} />{" "} {opt}
                                    </div>
                                ))}

                                <button className="btn btn-success mt-2" disabled={!selected} onClick={handleUnlock} > Submit Answer </button>
                            </div>
                        )}
                        {showSolution && (
                            <>
                                <div className={`mt-3 p-3 rounded ${theme === "dark" ? "bg-black" : "bg-light border"}`}>
                                    <h6 className="fw-semibold"><i className="bi bi-star-fill text-info"></i> Solution</h6>
                                    <div className={`d-flex justify-content-between align-items-start ${theme === "dark" ? "bg-black" : "bg-light"}`}>
                                        <pre className={`mb-0 overflow-auto ${theme === "dark" ? "text-warning" : "fw-semibold text-danger"}`}>
                                            <code>{problem?.solution}</code>
                                        </pre>
                                        <button className={`btn btn-sm ${theme === "dark" ? "btn-outline-light" : "btn-outline-dark"} border-0 ms-3`} onClick={() => copyCode(problem.solution)}>
                                            <i className="bi bi-clipboard"></i>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}

            </div>
        </div>
    )
})

export default LogicCard;
