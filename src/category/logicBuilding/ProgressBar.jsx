import React, { memo }  from 'react'

let ProgressBar=memo(({ steps, activeStep, setActiveStep }) => {
    return (
        <div className="d-flex align-items-center justify-content-between mb-4 flex-wrap">
            <span className="text-light"><i className="bi bi-align-start"></i></span>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex-grow-1 mx-2" style={{ height: "2px", background: "#ccc" }}></div>
                    <div 
                        onClick={() => setActiveStep(step.key)} 
                        className={`px-3 py-1 rounded-pill ${activeStep === step.key ? "bg-success text-white" : "border border-2 border-danger {theme=== dark?text-light:text-dark}"}`} 
                        style={{ cursor: "pointer", whiteSpace: "nowrap" }}>
                        {step.label}
                    </div>
                </React.Fragment>
            ))}
            <div className="flex-grow-1 mx-2" style={{ height: "2px", background: "#ccc" }}></div>
            <span className="text-light"><i className="bi bi-align-end"></i></span>
        </div>
    )
})

export default ProgressBar;
