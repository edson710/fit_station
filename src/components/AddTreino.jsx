import { useState } from "react";
import { v4 } from "uuid";

function AddTreino({ onAddTreinoSubmit }) {
  const [nome, setNome] = useState("");
  const [exercicios, setExercicios] = useState([]);
  const [exercicio, setExercicio] = useState({ nome: "", imagemUrl: "", cargaKg: "", series: "" });

  function adicionarExercicio() {
    if (!exercicio.nome) return;
    setExercicios([...exercicios, { ...exercicio, id: v4() }]);
    setExercicio({ nome: "", imagemUrl: "", cargaKg: "", series: "" });
  }

  function criarTreino() {
    if (!nome || exercicios.length === 0) return alert("Preencha os dados!");
    onAddTreinoSubmit(nome, exercicios);
    setNome("");
    setExercicios([]);
  }

  return (
    <div className="bg-slate-200 p-4 rounded-md space-y-4">
      <input className="w-full p-2 rounded border" placeholder="Nome do Treino" value={nome} onChange={e => setNome(e.target.value)} />
      <div className="space-y-2">
        <input className="w-full p-2 rounded border" placeholder="Nome do Exercício" value={exercicio.nome} onChange={e => setExercicio({ ...exercicio, nome: e.target.value })} />
        <input className="w-full p-2 rounded border" placeholder="URL da Imagem" value={exercicio.imagemUrl} onChange={e => setExercicio({ ...exercicio, imagemUrl: e.target.value })} />
        <input className="w-full p-2 rounded border" placeholder="Carga (kg)" type="number" value={exercicio.cargaKg} onChange={e => setExercicio({ ...exercicio, cargaKg: e.target.value })} />
        <input className="w-full p-2 rounded border" placeholder="Séries" type="number" value={exercicio.series} onChange={e => setExercicio({ ...exercicio, series: e.target.value })} />
        <button onClick={adicionarExercicio} className="bg-blue-500 text-white w-full py-2 rounded">Adicionar Exercício</button>
      </div>
      <button onClick={criarTreino} className="bg-green-600 text-white w-full py-2 rounded">Criar Treino</button>
    </div>
  );
}

export default AddTreino;
