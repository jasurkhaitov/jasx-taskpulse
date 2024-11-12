import Product from '../../assets/tabs/product.webp'
import Service from '../../assets/tabs/service.webp'
import Playground from '../../assets/tabs/playground.webp'
import Content from '../../assets/tabs/content.webp'
import { Tabs } from '../ui/tabs'

export function TabsDemo() {
	const tabs = [
		{
			title: 'Product',
			value: 'product',
			content: (
				<div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
					<p>Product Tab</p>
					<DummyContent src={Product} alt='Product Tab' />
				</div>
			),
		},
		{
			title: 'Services',
			value: 'services',
			content: (
				<div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
					<p>Services Tab</p>
					<DummyContent src={Service} alt='Services Tab' />
				</div>
			),
		},
		{
			title: 'Playground',
			value: 'playground',
			content: (
				<div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
					<p>Playground Tab</p>
					<DummyContent src={Playground} alt='Playground Tab' />
				</div>
			),
		},
		{
			title: 'Content',
			value: 'content',
			content: (
				<div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
					<p>Content Tab</p>
					<DummyContent src={Content} alt='Content Tab' />
				</div>
			),
		},
	]

	return (
		<div className='h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-[1150px] mx-auto w-full items-start justify-start px-[15px] my-20 mb-[130px]'>
			<Tabs tabs={tabs} />
		</div>
	)
}

type DummyContentProps = {
	src: string
	alt: string
}

const DummyContent: React.FC<DummyContentProps> = ({ src, alt }) => {
	return (
		<img
			loading='lazy'
			src={src}
			alt={alt}
			className='object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
		/>
	)
}