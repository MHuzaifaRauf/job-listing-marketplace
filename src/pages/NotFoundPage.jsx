import React from 'react'
import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
    <FaExclamationTriangle className=' text-yellow-400 text-6xl mb-4'/ >
      <p className="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        className="text-white bg-violet-700 hover:bg-violet-900 rounded-md px-3 py-2 mt-4"
        >
         Go Back
        </Link>
    </section>
  )
}

export default NotFoundPage