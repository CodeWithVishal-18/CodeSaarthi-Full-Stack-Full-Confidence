import React from 'react'
import useFetch from '../../hooks/useFetch';


export default function SQLCheatsheat() {
    let { data } = useFetch("https://dummyjson.com/c/3110-b46a-48c3-9f05")
    if (!data) {
        return <p className="text-center">Loading cheatsheet ...</p>;
    }
    let copyCode = (text) => {
        navigator.clipboard.writeText(text)
        alert("Command copied!")
    }
    return (
        <div className="container py-4">
            <h1 className="mb-2">{data.topic}</h1>
            <p className="text-secondary mb-5">{data.description}</p>
            {data.sections.map((section, sectionIndex) => (
                <section key={sectionIndex} className="mb-5">

                    <h3 className="mb-4 border-bottom pb-2">{section.section}</h3>

                    <div className="row">
                        {section.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="col-12 col-md-6 col-lg-12 mb-4">
                                <h6 className="fw-semibold">{item.title}</h6>

                                {item.description && (<p className="text-secondary mb-2"> {item.description} </p>)}
                                {item.syntax && (
                                    <div className="d-flex justify-content-between align-items-start bg-black rounded-4 p-2">
                                        <pre className="text-warning mb-0 mt-1 ms-3">
                                            <code>{item.syntax}</code>
                                        </pre>
                                        <button className="btn btn-outline-light border-0 me-3" onClick={()=> copyCode(item.syntax)}><i className="bi bi-clipboard"></i></button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </section>
            ))}

        </div>
    )
}
