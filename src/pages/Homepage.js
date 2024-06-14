import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import n from "../image/n.png"

const Homepage = () => {
  return ( 
   <Layout>
     <section>
	<div className="dark:bg-black">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 font-crimsontext">React Dom Project</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 font-lora">A JavaScript library for building user interfaces</p>
			<div className="flex flex-wrap justify-center">
				<Link to="/get_start" className="px-8 py-3 m-2 text-xl font-semibold font-crimsontext hover:text-blue-800 rounded dark:bg-gray-100 dark:text-gray-900" fdprocessedid="lb4ui">Get started</Link>
				<Link to="/learn_more" className="px-8 py-3 m-2 text-xl border font-crimsontext hover:text-blue-800 rounded dark:border-gray-300 dark:text-gray-50" fdprocessedid="w9p8sa">Learn more</Link>
			</div>
		</div>
	</div>
	<img src={n} alt="" className="w-5/6 mx-auto mb-12 -mt-20 dark:bg-gray-500 rounded-lg shadow-md lg:-mt-40" />

	<div className="hidden md:flex px-[25%]">

<p className="text-3xl py-6 font-lora">React makes it painless to create interactive UIs. Design simple views 
for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.
</p>
</div>
</section>

   </Layout>
  )
}

export default Homepage