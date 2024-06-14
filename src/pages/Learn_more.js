import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'


const Learn_more = () => {
  return (
    <Layout>
    <section>
   <div className="dark:bg-black h-[450px]">
       <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-50">
           <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-50 font-crimsontext ">React Dom Project</h1>
           <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 font-lora">A JavaScript library for building user interfaces</p>
           <div className="flex flex-wrap justify-center">
               <Link to="/get_start" className="font-crimsontext px-8 py-3 m-2 text-xl font-semibold hover:text-blue-800 rounded dark:bg-gray-100 dark:text-gray-900" 
               fdprocessedid="lb4ui">Get started</Link>
           </div>
       </div>
   </div>
   <br/>
   <br/>
   <br/>
 <div className="flex lg:flex-row hidden sm:flex gap-4">

 <div className="px-4 ">
<h1 className="text-4xl font-bold text-blue-800 font-crimsontext"> Declarative</h1>
<p className="text-xl py-6 font-lora">React makes it painless to create interactive UIs. Design simple views 
for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.
</p>
</div>
<div className="px-4">
<h1 className="text-4xl font-bold text-blue-800 font-crimsontext">Component-Based</h1>
<p className="text-xl py-6 font-lora">Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
</p>
</div>
<div className="px-4">
<h1 className="text-4xl font-bold text-blue-800 font-crimsontext">Write Anywhere</h1>
<p className="text-xl py-6 font-lora">We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.</p>
</div>

 </div>
 <div>
<div>

</div>
<div className='bg-white flex pt-28 justify-center mt-6 items-center h-30 w-full px-6  gap-8 flex-row flex-col lg:flex-row'>
  <div className='px-10 mt-6'>
  <h1 className='text-4xl font-bold text-blue-800 font-crimsontext'>A Simple Component</h1>
  <p className='text-xl py-6 font-lora'>React components implement a render() method that takes  input data and returns what to display.
  This example uses an XML-like syntax called JSX.Input data that is passed into the component can be accessed by render() via this.props.
  </p>
  </div>

</div>

<div className='bg-white flex pt-28 justify-center mt-6 items-center h-30 w-full px-6  gap-8 flex-row flex-col lg:flex-row'>
  <div className='px-10 mt-6'>
  <h1 className='text-4xl font-bold text-blue-800 font-crimsontext'>A Stateful Component</h1>
  <p className='text-xl py-6 font-lora'>In addition to taking input data (accessed via this.props), a component can maintain
  internal state data (accessed via this.state). When a component’s state data changes, the
 rendered markup will be updated by re-invoking render().
  </p>
  </div>

</div>

<div className='bg-white flex pt-28 justify-center mt-6 items-center h-30 w-full px-6  gap-8 flex-row flex-col lg:flex-row'>
  <div className='px-10 mt-6'>
  <h1 className='text-4xl font-bold text-blue-800 font-crimsontext'>An Application</h1>
  <p className='text-xl py-6 font-lora'>Using props and state, we can put together a small Todo application. 
  This example uses state to track the current list of items as well as the text that the user has entered.
   Although event handlers appear to be rendered inline,
   they will be collected and implemented using event delegation
  </p>
  </div>

</div>


<div className='bg-white flex pt-28 justify-center mt-6 items-center h-30 w-full px-6  gap-8 flex-row flex-col lg:flex-row'>
  <div className='px-10 mt-6'>
  <h1 className='text-4xl font-bold text-blue-800 font-crimsontext'>A Component Using External Plugins</h1>
  <p className='text-xl py-6 font-lora'>React allows you to interface with other libraries and frameworks.
   This example uses remarkable, an external Markdown library, to convert the 
  textarea’s value in real time.
  </p>
  </div>

</div>


 </div>
</section>
  </Layout>
  )
}

export default Learn_more