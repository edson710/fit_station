import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TreinoDetalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const treinos = JSON.parse(localStorage.getItem("treinos")) || [];
  const treino = treinos.find(t => t.id === id);

  if (!treino) return <div className="text-white p-6">Treino não encontrado</div>;

  return (
    <div className="h-screen w-screen bg-slate-500 flex p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            {treino.nome}
          </h1>
        </div>
        {treino.exercicios.map(ex => (
          <div key={ex.id} className="bg-slate-200 p-4 rounded space-y-1">
            <h2 className="text-lg font-bold text-slate-700">{ex.nome}</h2>
            <img src={ex.imagemUrl} alt={ex.nome} className="w-full h-40 object-cover rounded" />
            <p className="text-slate-600">Carga: {ex.cargaKg} kg</p>
            <p className="text-slate-600">Séries: {ex.series}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TreinoDetalhes;
