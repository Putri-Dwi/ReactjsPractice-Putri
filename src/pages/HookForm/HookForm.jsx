import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
const { register, handleSubmit, reset, formState: { errors }, } = useForm()
const [tableData, setTableData] = useState ([])

const onSubmit = (data) => {
    console.log(`Data ketika submit: ${data}`)
    setTableData((prevData) => [...prevData, data])
    reset()
}

    return (
        <>
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-700 m-6">Form with React Hook Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <div className="m-4">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                    <input type="text" id='name' {...register('name', {required: 'Name is required!'}) } 
                    className="mt-2 p-3 w-full border border-gray-300 rounded-md"/>
                    {errors.name && <span className="block text-red-500">Name is Required!</span>}
                </div>

                <div className="m-4">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                    <input type="email" id='email' {...register('email', {required: 'Email is required!'}) } 
                    className="mt-2 p-3 w-full border border-gray-300 rounded-md"/>
                    {errors.email && <span className="block text-red-500">E-mail is Required!</span>}
                </div>

                <div className="m-4">
                    <label htmlFor="age" className="block text-sm font-semibold text-gray-700">Age</label>
                    <input type="number" id='age' {...register('age', {required: 'Age is required!'}) } 
                    className="mt-2 p-3 w-full border border-gray-300 rounded-md"/>
                    {errors.age && <span className="block text-red-500">Age is Required!</span>}
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md
                hover:bg-blue-600">Submit</button>

                <button type="submit" className="w-full mt-4 bg-red-500 text-white p-3 rounded-md
                hover:bg-red-600">Reset</button>
            </form>
            <div className="mt-8 w-full max-w-4xl overflow-x-auto">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Submitted Data</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Age</th>
            </tr>
          </thead>
          <tbody>
            {tableData.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-3 text-center text-sm text-gray-500">No data submitted yet</td>
              </tr>
            ) : (
              tableData.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="px-6 py-3 text-sm text-gray-700">{row.name}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{row.email}</td>
                  <td className="px-6 py-3 text-sm text-gray-700">{row.age}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
        </div>
        </>
    )
}