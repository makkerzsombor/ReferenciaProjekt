import type {Technology} from "./TechnologyCard.tsx";
import {useEffect, useState} from "react";

type TechnologyAddAndModifyProps = {
    isOpen: boolean;
    onClose: () => void;
    onSave: (tech: Partial<Technology>) => void;
    editingTech: Technology | null;
};

export const TechnologyAddAndModify = ({ isOpen, onClose, onSave, editingTech }: TechnologyAddAndModifyProps) => {

    const [name, setName] = useState('');
    const [knowledge, setKnowledge] = useState(1);

    useEffect(() => {
        if (editingTech) {
            setName(editingTech.name);
            setKnowledge(editingTech.knowledge);
        } else {
            setName('');
            setKnowledge(1);
        }
    }, [editingTech, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({ name, knowledge });
    };

    return (
        <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-md">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-900">
                        {editingTech ? 'Technológia Szerkesztése' : 'Új Technológia'}
                    </h2>
                    {/* x (bezárás) */}
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl">&times;</button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Megnevezés</label>
                        <input type="text" required value={name}
                               onChange={(e) => setName(e.target.value)}
                               className="w-full border-2 border-gray-100 rounded-xl p-3 focus:border-sky-500 focus:outline-none transition-colors"
                               placeholder="Technológia neve"/>

                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Tudásszint: <span className="text-sky-600">{knowledge} / 10</span>
                        </label>
                        <input type="range" min="1" max="10" value={knowledge}
                               onChange={(e) => setKnowledge(parseInt(e.target.value))}
                               className="w-full h-2 bg-gray-100 rounded-lg cursor-pointer accent-sky-500"/>
                        <div className="flex justify-between text-xs text-gray-400 mt-2 font-bold">
                            <span>1</span>
                            <span>10</span>
                        </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button type="button" onClick={onClose}
                                className="flex-1 py-3 border-2 border-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-50 transition-colors">Mégse</button>

                        <button type="submit"
                                className="flex-1 py-3 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-600 shadow-lg shadow-sky-200 transition-all">Mentés</button>
                    </div>
                </form>
            </div>
        </div>
    );
};