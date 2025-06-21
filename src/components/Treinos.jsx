import { useNavigate } from "react-router-dom";
import { TrashIcon, ChevronRightIcon } from "lucide-react";

function Treinos({ treinos, onTreinoClick, onDeleteTreinoClick }) {
  const navigate = useNavigate();

  return (
    <ul className="space-y-4 bg-slate-200 p-4 rounded-md">
      {treinos.map((treino) => (
        <li key={treino.id} className="flex items-center gap-2">
          <button onClick={() => onTreinoClick(treino.id)} className="bg-slate-400 w-full text-white p-2 rounded text-left">
            {treino.nome} {treino.iniciado ? "(Iniciado)" : ""}
          </button>
          <button onClick={() => navigate(`/treino/${treino.id}`)} className="bg-slate-400 p-2 rounded text-white">
            <ChevronRightIcon />
          </button>
          <button onClick={() => onDeleteTreinoClick(treino.id)} className="bg-slate-400 p-2 rounded text-white">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Treinos;
