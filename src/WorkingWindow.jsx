import React, { memo } from 'react'
import { Link } from 'react-router-dom'

let WorkingWindow = memo(() => {
    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card shadow-lg border-0 text-center p-5 custom-card">
                <div className="card-body">
                    <div className="icon-box mb-4">
                        <span className="pulse-ring"></span>
                        <i className="bi bi-code-slash display-4 text-primary"></i>
                    </div>

                    <h2 className="fw-bold mb-3 text-warning">Good things take time</h2>
                    <p className="mb-1">Check back soon to see what we’re building.</p>
                    <p className="mb-4">
                        While we're building this feature, why not explore <a href="https://vishalshukla.vercel.app/" className='text-decoration-none fw-bold text-warning'>My Portfolio</a> or say hi on <a href="https://github.com/CodeWithVishal-18" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none">
                            <i className="bi bi-linkedin me-1"></i>LinkedIn?
                        </a>
                    </p>
                    <div className="progress mb-4" style={{ height: '8px' }}>
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                            role="progressbar"
                            style={{ width: '75%' }}
                        ></div>
                    </div>
                    <Link to="/" className="btn btn-outline-primary rounded-pill px-4">
                        Return to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default WorkingWindow;
