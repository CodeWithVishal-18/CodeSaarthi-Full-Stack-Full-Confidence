import { useContext } from "react";
import { ThemeContext } from "./hooks/ThemeContext";

export default function Footer() {
    let { theme } = useContext(ThemeContext);
    let footerTheme = theme === "dark" ? "bg-dark text-light border-top border-secondary" : "bg-light text-dark border-top";
    return (
        <footer className={`py-3 text-center small ${footerTheme}`}>
            © 2026 DevSaarthi <i className="bi bi-dash-lg"></i> Built with <i className="bi bi-heart-fill text-danger"></i> by {" "}
            <a href="https://github.com/CodeWithVishal-18" target="_blank" rel="noopener noreferrer" className="fw-semibold text-decoration-none">
                <i className="bi bi-github me-1"></i>Vishal
            </a>
        </footer>
    )
}
