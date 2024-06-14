import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <Layout>
<div className="flex flex-col justify-center items-center rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
  <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
    <p className="text-sm dark:text-gray-600">Please fill in this form to create an account.</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
    <div>
				<label htmlFor="" className="block mb-2 text-sm">User Name</label>
				<input type="name" name="username" id="username" placeholder="enter your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="0yx06" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm">Email address</label>
				<input type="email" name="email" id="email" placeholder="enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="0yx06" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm">Enter Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="enter password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="m9iit6" />
			</div>
			<div className="flex ">
					<label htmlFor="password" className="text-sm">Confirm Password</label>
				</div>
				<input type="password" name="password" id="password" placeholder="confirm password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" fdprocessedid="m9iit6" />
			
		</div>
   
		<div className="space-y-2">
			<div>
				<button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-blue-800 dark:text-gray-50" fdprocessedid="zon0m">Sign up</button>
			</div>
		
		</div>
	
			<p className="px-6 text-sm text-center dark:text-gray-600">Already have an account? <Link to="/signin" className="hover:underline dark:text-violet-600">Login</Link>
			</p>
	
	</form>
</div>

    </Layout>
  )
}

export default Signup