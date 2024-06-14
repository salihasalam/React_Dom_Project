import React from 'react'
import Layout from '../components/Layout/Layout'
import images from "../image/images.png"
import n from "../image/n.png"
import pros from "../image/pros.png"
import rt from "../image/reactjs-features.png"
import cons from "../image/cons.png"
import ben from "../image/ben.jpg"
import cover from "../image/cover-React.js.png"



const Blogs = () => {
  return (
    <Layout><section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer"  className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
			<img src={images}  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Server Components</h3>
				<span className="text-xs dark:text-gray-600">February 19, 2021</span>
				<p>We announced an experimental demo of React Server Components (RSC) in December 2020. Since then we’ve been finishing up its dependencies in React 18, and working on changes inspired by experimental feedback.
In particular, we’re abandoning the idea of having forked I/O libraries (eg react-fetch), and instead adopting an async/await model for better compatibility.</p>
			</div>
		</a>
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer"  className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img  className="object-cover w-full rounded h-44 dark:bg-gray-500" src={n} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Asset Loading</h3>
					<span className="text-xs dark:text-gray-600">January 21, 2021</span>
					<p>Currently, assets like scripts, external styles, fonts, and images are typically preloaded and loaded using external systems. This can make it tricky to coordinate across new environments like streaming, server components, and more.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img  className="object-cover w-full rounded h-44 dark:bg-gray-500" src={pros} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">React Optimizing Compiler</h3>
					<span className="text-xs dark:text-gray-600">January 22, 2021</span>
					<p>We gave an early preview of React Forget at React Conf 2021. It’s a compiler that automatically generates the equivalent of 
					useMemo and useCallback calls to minimize the cost of re-rendering, while retaining React’s programming model.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img  className="object-cover w-full rounded h-44 dark:bg-gray-500" src={rt} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Offscreen</h3>
					<span className="text-xs dark:text-gray-600">January 23, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cons} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Static Server Rendering Optimizations</h3>
					<span className="text-xs dark:text-gray-600">January 24, 2021</span>
					<p>Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are great ways to get performance
					
					 for cacheable pages, but we think we can add features to improve performance of dynamic Server Side Rendering 
					 (SSR) – especially when most but not all of the content is cacheable. </p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={ben} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Transition Tracing</h3>
					<span className="text-xs dark:text-gray-600">January 25, 2021</span>
					<p>Currently, React has two profiling tools. The original Profiler shows an overview of all the commits in a profiling session. For each commit, it also shows all components that rendered and the amount of time it took for them to render.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover}/>
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">New React Docs</h3>
					<span className="text-xs dark:text-gray-600">January 26, 2021</span>
					<p>Last year, we announced the beta version of the new React documentation website. The new learning materials teach Hooks first and has new diagrams, 
					illustrations, as well as many interactive examples and challenges</p>
				</div>
			</a>
		</div>
		<div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div>
	</div>
</section></Layout>
  )
}

export default Blogs