import MatriculaTable from "@/components/matricula/tables/MatriculaTable";
import useAsyncFetch from "@/hooks/useAsyncApiFetch";
import { Matricula } from "../../../types/matricula";
const MatriculaPage = async () => {

    const { getData } = useAsyncFetch()

    const matriculas: Matricula[] = await getData('https://api.cambauba.org.br/matricula')

    return (
        <div>
            <h1 className="text-lg font-bold">Matrículas</h1>
            <MatriculaTable matriculas={matriculas} />
        </div>

    )
}

export default MatriculaPage;