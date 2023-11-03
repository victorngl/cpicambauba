'use client'

import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Rematricula } from '../../../../types/rematricula'

const schema = z.object({
  name: z.number(),
  age: z.string().optional(),
  datebirth: z.string(),
  unity: z.string(),
  dependecy: z.string().optional(),
  course: z.string(),
  class: z.string().optional(),
  regime: z.string().optional(),
  financial: z.string(),
  quota: z.number(),
  alimentation: z.string().optional(),
  nextcourse: z.string().optional()
});

interface MatriculaFormProps {
    student?: Rematricula
}

const MatriculaForm: FC<MatriculaFormProps> = ({ student }) => {
 

  const { register, getValues, handleSubmit, setValue, reset, formState: { errors } } = useForm<Rematricula>({
    defaultValues: student,
    resolver: zodResolver(schema),
});

  const onSubmit: SubmitHandler<Rematricula> = (data) => {
    console.log(data);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Nome">Nome</label>
        <input
          {...register('name')}
          type="text"
          id="Nome"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Seu nome"
          required
        />
        {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Idade">Idade</label>
        <input
          {...register('age')}
          type="text"
          id="Idade"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Sua idade"
        />
        {errors.age && <p className="text-red-500 text-xs mt-2">{errors.age.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Data de Nascimento">Data de Nascimento</label>
        <input
          {...register('datebirth')}
          type="text"
          id="Data de Nascimento"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Data de Nascimento"
          required
        />
        {errors.datebirth && <p className="text-red-500 text-xs mt-2">{errors.datebirth.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Unidade">Unidade</label>
        <input
          {...register('unity')}
          type="text"
          id="Unidade"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Unidade"
          required
        />
        {errors.unity && <p className="text-red-500 text-xs mt-2">{errors.unity.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Grau de Dependencia">Grau de Dependencia</label>
        <input
          {...register('dependency')}
          type="text"
          id="Grau de Dependencia"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Grau de Dependencia"
        />
        {errors.dependency && <p className="text-red-500 text-xs mt-2">{errors.dependency.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Curso">Curso</label>
        <input
          {...register('course')}
          type="text"
          id="Curso"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Curso"
          required
        />
        {errors.course && <p className="text-red-500 text-xs mt-2">{errors.course.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Turma">Turma</label>
        <input
          {...register('class')}
          type="text"
          id="Turma"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Turma"
        />
        {errors.class && <p className="text-red-500 text-xs mt-2">{errors.class.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Regime">Regime</label>
        <input
          {...register('regime')}
          type="text"
          id="Regime"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Regime"
        />
        {errors.regime && <p className="text-red-500 text-xs mt-2">{errors.regime.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Financeiro">Financeiro</label>
        <input
          {...register('financy')}
          type="text"
          id="Financeiro"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Financeiro"
          required
        />
        {errors.financy && <p className="text-red-500 text-xs mt-2">{errors.financy.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Financeiro">Parcelamento Cota-parte</label>
        <input
          {...register('quota')}
          type="number"
          id="Cotaparte"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Cota Parte"
          required
        />
        {errors.quota && <p className="text-red-500 text-xs mt-2">{errors.quota.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Alimentacao">Alimentação</label>
        <input
          {...register('alimentation')}
          type="text"
          id="Alimentacao"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Alimentação"
        />
        {errors.alimentation && <p className="text-red-500 text-xs mt-2">{errors.alimentation.message}</p>}
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="Alimentacao">Série pretendida</label>
        <input
          {...register('nextcourse')}
          type="text"
          id="nextcourse"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Série pretendida"
        />
        {errors.nextcourse && <p className="text-red-500 text-xs mt-2">{errors.nextcourse.message}</p>}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover-bg-blue-700 dark:focus:ring-blue-800"
      >
        Enviar
      </button>
    </form>
  );
};

export default MatriculaForm;