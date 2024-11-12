import { logos } from '@/util/icon'

const AnimatedLogoCloud = () => {
	return (
		<div className='max-w-[1150px] mx-auto py-6 sm:py-10 border-y border-gray-300 dark:border-gray-800 font-mono'>
			<div className='mx-auto'>
				<div
					className='group relative flex gap-6 overflow-hidden p-2'
					style={{
						maskImage:
							'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
					}}
				>
					{Array(5)
						.fill(null)
						.map((itm, index) => (
							<div
								key={`logo-cloud-${index} + ${itm}`}
								className='flex shrink-0 animate-logo-cloud flex-row justify-around'
							>
								{logos.map(logo => (
									<div key={logo.name} className='flex items-center gap-3 px-5 sm:px-10'>
										<img loading='lazy' src={logo.url} className='h-7 sm:h-10 w-auto' alt={logo.name} />

										<p className='text-lg sm:text-xl'>{logo.name}</p>
									</div>
								))}
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default AnimatedLogoCloud;
