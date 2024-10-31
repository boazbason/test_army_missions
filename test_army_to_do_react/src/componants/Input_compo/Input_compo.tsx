import React, { useState } from "react";
import { Mission } from "../typs";
import "./Input_compo.css"


interface MissionFormProps {
    AddMission: (mission: Mission) => void;
}
const Input_compo: React.FC<MissionFormProps> = ({ AddMission }) => {
    const [formData, setFormData] = useState<Mission>({
        name: "",
        status: "Pending",
        priority: "Low",
        description: "",
    });
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (
            !formData.name ||
            !formData.description ||
            !formData.status ||
            !formData.priority
        ) {
            return;
        }
        AddMission(formData);
        setFormData({
            name: "",
            status: "",
            priority: "",
            description: "",
        });
    };
    return (
        <div className="Input_compo">

            <form onSubmit={handleSubmit}>
                <label className="input">
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                    />
                </label >
                <label className="input">
                    <select className="input"
                        name="status"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </label>
                <label className="input">
                    <select className="input"
                        name="priority"
                        onChange={(e) => handleChange(e)}
                    >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </label>
                <label className="input">
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Add</button>
            </form>

        </div>
    );
};
export default Input_compo;
