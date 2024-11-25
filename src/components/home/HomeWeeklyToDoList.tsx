import * as React from 'react'
import { TrendingUp } from 'lucide-react'
import { Label, Pie, PieChart } from 'recharts'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'
import { MdAccessTime } from 'react-icons/md'

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import { Link } from 'react-router-dom'

const chartData1 = [
	{ browser: 'Completed', visitors: 565, fill: 'var(--color-chrome)' },
	{ browser: 'Incomplete', visitors: 190, fill: 'var(--color-other)' },
]

const chartData2 = [
	{ category: 'Completed', value: 320, fill: 'var(--color-firefox)' },
	{ category: 'Incomplete', value: 150, fill: 'var(--color-safari)' },
]

const chartData3 = [
	{ category: 'Tasks A', value: 700, fill: 'var(--color-edge)' },
	{ category: 'Tasks B', value: 300, fill: 'var(--color-other)' },
]

const chartData4 = [
	{ category: 'Completed', value: 500, fill: 'var(--color-firefox)' },
	{ category: 'Incomplete', value: 250, fill: 'var(--color-chrome)' },
]

const weekCost = [
  {
    id: 1,
    percentage: 565/(565+190)*100,
    week: "December 2 - December 8"
  },
  {
    id: 2,
    percentage: 320/(320+150)*100,
    week: "Octaber 14 - Octaber 20"
  },
  {
    id: 3,
    percentage: 700/(700+300)*100,
    week: "September 16 - September 23"
  },
  {
    id: 4,
    percentage: 500/(500+250)*100,
    week: "November 18 - November 24"
  },
]

const chartConfig = {
	visitors: {
		label: 'Tasks',
	},
	chrome: {
		label: 'Chrome',
		color: 'hsl(var(--chart-2))',
	},
	safari: {
		label: 'Safari',
		color: 'hsl(var(--chart-2))',
	},
	firefox: {
		label: 'Firefox',
		color: 'hsl(var(--chart-3))',
	},
	edge: {
		label: 'Edge',
		color: 'hsl(var(--chart-4))',
	},
	other: {
		label: 'Other',
		color: 'hsl(var(--chart-5))',
	},
} satisfies ChartConfig

export default function HomeWeeklyToDoList() {
	const totalVisitors1 = React.useMemo(() => {
		return chartData1.reduce((acc, curr) => acc + curr.visitors, 0)
	}, [])

	const totalVisitors2 = React.useMemo(() => {
		return chartData2.reduce((acc, curr) => acc + curr.value, 0)
	}, [])

	const totalVisitors3 = React.useMemo(() => {
		return chartData3.reduce((acc, curr) => acc + curr.value, 0)
	}, [])

	const totalVisitors4 = React.useMemo(() => {
		return chartData4.reduce((acc, curr) => acc + curr.value, 0)
	}, [])

	return (
		<Card className='flex flex-col bg-bgLightBox dark:bg-bgDarkBox'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>
					<Link
						to={'/documents/weekly-to-do-list'}
						className='flex items-center gap-2'
					>
						Weekly To-do List{' '}
						<HiMiniArrowTopRightOnSquare className='text-base' />
					</Link>
				</CardTitle>
				<CardDescription>You have 4 week To-do List</CardDescription>
			</CardHeader>

			<CardContent className='flex-1 grid grid-cols-4'>
				<ChartContainer
					config={chartConfig}
					className='aspect-square max-h-[250px]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData1}
							dataKey='visitors'
							nameKey='browser'
							innerRadius={60}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-3xl font-bold'
												>
													{totalVisitors1.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Visitors
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>

				<ChartContainer
					config={chartConfig}
					className='aspect-square max-h-[250px]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData2}
							dataKey='value'
							nameKey='category'
							innerRadius={60}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-3xl font-bold'
												>
													{totalVisitors2.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Tasks
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>

				<ChartContainer
					config={chartConfig}
					className='aspect-square max-h-[250px]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData3}
							dataKey='value'
							nameKey='category'
							innerRadius={60}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-3xl font-bold'
												>
													{totalVisitors3.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Tasks
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>

				<ChartContainer
					config={chartConfig}
					className='aspect-square max-h-[250px]'
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData4}
							dataKey='value'
							nameKey='category'
							innerRadius={60}
							strokeWidth={5}
						>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor='middle'
												dominantBaseline='middle'
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className='fill-foreground text-3xl font-bold'
												>
													{totalVisitors4.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className='fill-muted-foreground'
												>
													Tasks
												</tspan>
											</text>
										)
									}
								}}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>

			<CardFooter className='gap-2 text-sm flex justify-evenly'>
        {
          weekCost.map(item => <div key={item.id}>
            <div className='flex text-center items-center gap-2 font-medium leading-none mb-2'>
              Completed {item.percentage.toFixed(1)}% tasks <TrendingUp className='h-4 w-4' />
            </div>
            <div className='leading-none text-center text-muted-foreground flex items-center gap-1'>
              <MdAccessTime /> {item.week}
            </div>
          </div>)
        }
			</CardFooter>
		</Card>
	)
}
