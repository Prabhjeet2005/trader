import React from 'react'

const Hero = () => {
  return (
		<div>
			<div className="text-center mb-14 space-y-2 p-5">
				<h1 className="mt-5 mb-4 text-[rgb(66,66,66)] text-6xl font-medium ">
					Pricing
				</h1>
				<p className="text-sm font-light">
					Free equity investments and flat ₹20 intraday and F&O trades
				</p>
			</div>
			<div className="grid p-5 text-center grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
				<div>
					<img src="/media/images/pricingeq.svg" alt='pricing-hero-img' />
					<h3 className='text-3xl mb-4 text-[rgb(66,66,66)] font-medium'>Free equity delivery</h3>
					<p>
						All equity delivery investments (NSE, BSE), are absolutely free — ₹
						0 brokerage.
					</p>
				</div>
				<div>
					<img src="/media/images/other-trades.svg" alt='pricing-hero-img' />
					<h3 className='text-3xl mb-4 text-[rgb(66,66,66)] font-medium'>Intraday and F&O trades</h3>
					<p>
						Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
						intraday trades across equity, currency, and commodity trades. Flat
						₹20 on all option trades.
					</p>
				</div>
				<div>
					<img src="/media/images/pricingeq.svg" alt='pricing-hero-img' />
					<h3 className='text-3xl mb-4 text-[rgb(66,66,66)] font-medium'>Free direct MF</h3>
					<p>
						All direct mutual fund investments are absolutely free — ₹ 0
						commissions & DP charges.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Hero