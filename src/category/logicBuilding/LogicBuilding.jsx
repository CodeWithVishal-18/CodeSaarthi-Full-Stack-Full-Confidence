import React from 'react'
import { logicBuildingData } from '../html/logicBuildingData';
import LogicCard from './LogicCard';

export default function LogicBuilding() {
    return (
        <div className="container py-4">
            <h2 className="fw-bold mb-2">🧠 Logic Building</h2>
            <p className="text-secondary">Practice logical problems and improve your thinking step by step.</p>

            <div className="mt-4">
                {logicBuildingData.map((problem) => (
                    <LogicCard key={problem.id} problem={problem} />
                ))}
            </div>

        </div>
    )
}
