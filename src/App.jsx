import Treinos from "./components/Treinos";
import AddTreino from "./components/AddTreino";
import './index.css';
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  const [treinos, setTreinos] = useState(JSON.parse(localStorage.getItem("treinos")) || []);

  useEffect(() => {
    localStorage.setItem("treinos", JSON.stringify(treinos));
  }, [treinos]);

  function onTreinoClick(treinoId) {
    const atualizados = treinos.map(t => {
      if (t.id === treinoId) {
        return { ...t, iniciado: !t.iniciado };
      }
      return t;
    });
    setTreinos(atualizados);
  }

  function onTreinoDelete(treinoId) {
    setTreinos(treinos.filter(t => t.id !== treinoId));
  }

  function onAddTreinoSubmit(nome, exercicios) {
    const novoTreino = {
      id: v4(),
      nome,
      exercicios,
      iniciado: false,
    };
    setTreinos([...treinos, novoTreino]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex flex-col items-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white font-bold text-center">Meus Treinos</h1>
        <AddTreino onAddTreinoSubmit={onAddTreinoSubmit} />
        <Treinos treinos={treinos} onTreinoClick={onTreinoClick} onDeleteTreinoClick={onTreinoDelete} />
      </div>
    </div>
  );
}

export default App;
