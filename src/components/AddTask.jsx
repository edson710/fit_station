import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
 <div className="my-4 space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
    <input type="text" placeholder="Digite o titulo da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}/>
    <input type="text" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" value={description} onChange={(event) => setDescription(event.target.value)}/>
    <button onClick={() => {
        if (!title.trim() || !description.trim()) return alert("Preencha todos os campos!");
        if (title.length < 3) return alert("O título deve ter pelo menos 3 caracteres!");
        onAddTaskSubmit(title, description);
        setTitle("");
        setDescription("");
    }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
 </div>
    );
}

export default AddTask;