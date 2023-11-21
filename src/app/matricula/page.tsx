import MatriculaTable from "@/components/matricula/tables/MatriculaTable";
import useAsyncFetch from "@/hooks/useAsyncApiFetch";
import { Matricula } from "../../../types/matricula";
import { useMemo } from "react";
const MatriculaPage = async () => {

    const { getData } = useAsyncFetch()

    const matriculas: Matricula[] = await getData('https://api.cambauba.org.br/matricula')


    let missQuota: Matricula[] = [];
    let missAlimentation: Matricula[] = [];

    const matriculaStats = matriculas.filter((matricula: Matricula) => {

        if ((matricula.quota === 0 && (matricula.nextcourse === '6º Ano' || matricula.nextcourse === "1ª Série" || matricula.nextcourse === "1º Ano" || matricula.nextcourse === "Berçário II"))) {
            missQuota.push(matricula);
        }

        if (matricula.unity === "Cambaubinha" && matricula.regime === "Integral" && matricula.alimentation === "NULL") {
            missAlimentation.push(matricula);
        }
    })


    return (
        <>
            <div className="grid grid-cols-3 gap-4">

                <div className="flex justify-center h-auto rounded bg-gray-50 dark:bg-gray-800">
                    <div className="p-5 text-justify text-lg text-gray-500">
                        <p className="font-semibold">{missQuota.length} alunos entrantes de segmento que estão sem cota-parte.</p>
                        <ul>
                            {missQuota.map((matricula: Matricula) => (
                                <li className="text-sm" key={matricula.id}>{matricula.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center h-auto rounded bg-gray-50 dark:bg-gray-800">
                    <div className="p-5 text-justify text-lg text-gray-500">
                        <p className="font-semibold">{missAlimentation.length} alunos do regime Integral sem alimentação preenchida.</p>
                        <ul>
                            {missAlimentation.map((matricula: Matricula) => (
                                <li className="text-sm" key={matricula.id}>{matricula.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>



            </div>
            <div>
                <h1 className="text-lg font-bold my-5">Alunos matrículados em 2024</h1>
                <MatriculaTable matriculas={matriculas} />
            </div>
        </>
    )
}

export default MatriculaPage;