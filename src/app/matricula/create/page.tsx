import MatriculaForm from "@/components/matricula/forms/MatriculaForm";

const MatriculaCreatePage = async () => {

    return (
        <>
            <h1 className="text-lg font-bold mb-5">Criar Matrícula</h1>
            <MatriculaForm />
        </>
    )
}

export default MatriculaCreatePage;