import React from 'react'

const Hero = () => {
  return (
		<div className="flex flex-col  p-20  text-[rgb(66,66,66)] items-center gap-4">
			<h1 className='text-5xl font-medium '>Zerodha Products</h1>
			<h3 className='text-2xl'>Sleek, modern, and intuitive trading platforms</h3>
			<p>
				Check out our {" "}
				<a
					href="/products"
					className="font-medium transition text-blue-500 hover:scale-110">
					 investment offerings <i class="fa-solid fa-arrow-right-long"></i>
				</a>
				
			</p>
		</div>
	);
}

export default Hero