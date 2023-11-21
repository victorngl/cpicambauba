'use client'

import { Matricula } from "../../../../types/matricula";
import Link from "next/link";
import { SearchField } from "@/components/utils/SearchField";
import { useMemo, useState } from "react";

const MatriculaTable = ({ matriculas }: { matriculas: Matricula[] }) => {

    const [search, setSearch] = useState({
        term: '',
        by: 'name'
    });


    const filteredMatriculas = useMemo(() => {
        const lowerBusca = search.term.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return matriculas
            .filter((matricula: any) => matricula[search.by]
                .toString()
                .toLowerCase()
                .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                .includes(lowerBusca))
    }, [search.term, matriculas, search.by])

    return (
        <div className="relative shadow-md sm:rounded-lg ">
            <div className="flex items-center gap-2 mb-2">
                <SearchField onChange={(e) => { setSearch({ ...search, term: e.target.value }) }} />

                <div>
                    {/* filter by properties on matricula */}
                    <select onChange={(e) => { setSearch({ ...search, by: e.target.value }) }} className="block p-2 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="name">Nome</option>
                        <option value="class">Turma</option>
                        <option value="nextcourse">Série pretendida</option>
                        <option value="alimentation">Alimentação</option>
                        <option value="quota">Cota-Parte</option>
                        <option value="regime">Regime</option>
                        <option value="financy">Financeiro</option>
                    </select>

                </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {/*
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
    */}
                        <th scope="col" className="px-6 py-3 ">
                            Nome do Aluno
                        </th>

                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            Cota-Parte
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Regime
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Alimentação
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Financeiro
                        </th>
                        <th scope="col" className="px-6 py-3 whitespace-nowrap">
                            Série pretendida
                        </th>

                        <th scope="col" className="px-6 py-3 whitespace-nowra">
                            Tipo de Matrícula
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>


                    {filteredMatriculas.map(
                        (matricula) => (
                            <tr key={matricula.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                {/*
                                <td className="w-4 p-4">
                                    <div className="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                    </div>
                                </td>
                        */}
                                <th scope="row" className="p-4 py-2 font-medium text-gray-900  dark:text-white">
                                    {matricula.name}
                                </th>

                                <td className="px-6 py-4">
                                    {matricula.quota}
                                </td>


                                <td className="px-6 py-4">
                                    {matricula.regime}
                                </td>

                                <td className="px-6 py-4">
                                    {matricula.alimentation}
                                </td>

                                <td className="px-6 py-4">
                                    {matricula.financy}
                                </td>

                                <td className="px-6 py-4">
                                    {matricula.nextcourse}
                                </td>

                                <td className="px-6 py-4">
                                    <div className={`text-white text-center p-2 rounded text-sm font-semibold ${matricula.renew?'bg-blue-500':'bg-green-500'}`} >{matricula.renew ? 'Renovação' : 'Matrícula Nova'}</div>
                                </td>

                                <td className="px-6 py-4">
                                    <Link className="font-medium text-blue-600 dark:text-blue-500 hover:underline" href={`matricula/edit/${matricula.id}`}>Editar</Link>
                                </td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>


    )
}

export default MatriculaTable;