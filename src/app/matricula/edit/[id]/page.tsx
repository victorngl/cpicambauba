import MatriculaForm from "@/components/matricula/forms/MatriculaForm";
import useAsyncFetch from "@/hooks/useAsyncApiFetch";

const MatriculaEditPage = async ({ params }: { params: { id: number } }) => {

    const { getData } = useAsyncFetch();

    const matricula = await getData(`https://api.cambauba.org.br/matricula/${params.id}`)
    
    return (
        <>
            <h1 className="text-lg font-bold mb-5">Editar Matrícula #{params.id}</h1>
            <MatriculaForm matricula={matricula} />
        </>
    )
}

export default MatriculaEditPage;