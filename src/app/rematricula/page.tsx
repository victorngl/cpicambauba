'use client'

import MatriculaTable from "@/components/rematricula/tables/MatriculaTable";
import useAPIFetch from "@/hooks/useAPIFetch";
const MatriculaPage = () => {

    const { data } = useAPIFetch('https://api.cambauba.org.br/matricula/')

    console.log(data)

    return (
        
        <>
        <MatriculaTable />
        </>

    )
}

export default MatriculaPage;