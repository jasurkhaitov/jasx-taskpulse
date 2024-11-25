import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Link } from 'react-router-dom'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'

const chartData = [
  { date: "2024-04-01", income: 222, outcome: 75 },
  { date: "2024-04-02", income: 97, outcome: 90 },
  { date: "2024-04-03", income: 167, outcome: 60 },
  { date: "2024-04-04", income: 242, outcome: 130 },
  { date: "2024-04-05", income: 373, outcome: 145 },
  { date: "2024-04-06", income: 301, outcome: 170 },
  { date: "2024-04-07", income: 245, outcome: 90 },
  { date: "2024-04-08", income: 409, outcome: 160 },
  { date: "2024-04-09", income: 59, outcome: 55 },
  { date: "2024-04-10", income: 261, outcome: 95 },
  { date: "2024-04-11", income: 327, outcome: 175 },
  { date: "2024-04-12", income: 292, outcome: 105 },
  { date: "2024-04-13", income: 342, outcome: 190 },
  { date: "2024-04-14", income: 137, outcome: 110 },
  { date: "2024-04-15", income: 120, outcome: 85 },
  { date: "2024-04-16", income: 138, outcome: 95 },
  { date: "2024-04-17", income: 446, outcome: 180 },
  { date: "2024-04-18", income: 364, outcome: 205 },
  { date: "2024-04-19", income: 243, outcome: 90 },
  { date: "2024-04-20", income: 89, outcome: 75 },
  { date: "2024-04-21", income: 137, outcome: 100 },
  { date: "2024-04-22", income: 224, outcome: 85 },
  { date: "2024-04-23", income: 138, outcome: 115 },
  { date: "2024-04-24", income: 387, outcome: 145 },
  { date: "2024-04-25", income: 215, outcome: 125 },
  { date: "2024-04-26", income: 75, outcome: 65 },
  { date: "2024-04-27", income: 383, outcome: 210 },
  { date: "2024-04-28", income: 122, outcome: 90 },
  { date: "2024-04-29", income: 315, outcome: 120 },
  { date: "2024-04-30", income: 454, outcome: 190 },
  { date: "2024-05-01", income: 165, outcome: 110 },
  { date: "2024-05-02", income: 293, outcome: 155 },
  { date: "2024-05-03", income: 247, outcome: 95 },
  { date: "2024-05-04", income: 385, outcome: 210 },
  { date: "2024-05-05", income: 481, outcome: 195 },
  { date: "2024-05-06", income: 498, outcome: 260 },
  { date: "2024-05-07", income: 388, outcome: 150 },
  { date: "2024-05-08", income: 149, outcome: 105 },
  { date: "2024-05-09", income: 227, outcome: 90 },
  { date: "2024-05-10", income: 293, outcome: 165 },
  { date: "2024-05-11", income: 335, outcome: 135 },
  { date: "2024-05-12", income: 197, outcome: 120 },
  { date: "2024-05-13", income: 197, outcome: 80 },
  { date: "2024-05-14", income: 448, outcome: 245 },
  { date: "2024-05-15", income: 473, outcome: 190 },
  { date: "2024-05-16", income: 338, outcome: 200 },
  { date: "2024-05-17", income: 499, outcome: 210 },
  { date: "2024-05-18", income: 315, outcome: 175 },
  { date: "2024-05-19", income: 235, outcome: 90 },
  { date: "2024-05-20", income: 177, outcome: 115 },
  { date: "2024-05-21", income: 82, outcome: 70 },
  { date: "2024-05-22", income: 81, outcome: 60 },
  { date: "2024-05-23", income: 252, outcome: 145 },
  { date: "2024-05-24", income: 294, outcome: 110 },
  { date: "2024-05-25", income: 201, outcome: 125 },
  { date: "2024-05-26", income: 213, outcome: 85 },
  { date: "2024-05-27", income: 420, outcome: 230 },
  { date: "2024-05-28", income: 233, outcome: 95 },
  { date: "2024-05-29", income: 78, outcome: 65 },
  { date: "2024-05-30", income: 340, outcome: 140 },
  { date: "2024-05-31", income: 178, outcome: 115 },
  { date: "2024-06-01", income: 178, outcome: 100 },
  { date: "2024-06-02", income: 470, outcome: 205 },
  { date: "2024-06-03", income: 103, outcome: 80 },
  { date: "2024-06-04", income: 439, outcome: 190 },
  { date: "2024-06-05", income: 88, outcome: 70 },
  { date: "2024-06-06", income: 294, outcome: 125 },
  { date: "2024-06-07", income: 323, outcome: 185 },
  { date: "2024-06-08", income: 385, outcome: 160 },
  { date: "2024-06-09", income: 438, outcome: 240 },
  { date: "2024-06-10", income: 155, outcome: 100 },
  { date: "2024-06-11", income: 92, outcome: 75 },
  { date: "2024-06-12", income: 492, outcome: 210 },
  { date: "2024-06-13", income: 81, outcome: 65 },
  { date: "2024-06-14", income: 426, outcome: 190 },
  { date: "2024-06-15", income: 307, outcome: 175 },
  { date: "2024-06-16", income: 371, outcome: 155 },
  { date: "2024-06-17", income: 475, outcome: 260 },
  { date: "2024-06-18", income: 107, outcome: 85 },
  { date: "2024-06-19", income: 341, outcome: 145 },
  { date: "2024-06-20", income: 408, outcome: 225 },
  { date: "2024-06-21", income: 169, outcome: 105 },
  { date: "2024-06-22", income: 317, outcome: 135 },
  { date: "2024-06-23", income: 480, outcome: 265 },
  { date: "2024-06-24", income: 132, outcome: 90 },
  { date: "2024-06-25", income: 141, outcome: 95 },
  { date: "2024-06-26", income: 434, outcome: 190 },
  { date: "2024-06-27", income: 448, outcome: 245 },
  { date: "2024-06-28", income: 149, outcome: 100 },
  { date: "2024-06-29", income: 103, outcome: 80 },
  { date: "2024-06-30", income: 446, outcome: 200 },
]


const chartConfig = {
  views: {
    label: "Flow of money",
  },
  income: {
    label: "income",
    color: "hsl(var(--chart-1))",
  },
  outcome: {
    label: "outcome",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function HomeMonthlyBudget() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("income")

  const total = React.useMemo(
    () => ({
      income: chartData.reduce((acc, curr) => acc + curr.income, 0),
      outcome: chartData.reduce((acc, curr) => acc + curr.outcome, 0),
    }),
    []
  )

  return (
    <Card className='bg-bgLightBox dark:bg-bgDarkBox'>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-3 sm:py-3">
          <CardTitle>
						<Link to={'/documents/weekly-to-do-list'} className='flex items-center gap-2'>Monthly Budget <HiMiniArrowTopRightOnSquare className='text-base'/></Link>
					</CardTitle>
					
          <CardDescription>
            Showing total income and outcome
          </CardDescription>
        </div>

        <div className="flex">
          {["income", "outcome"].map((key) => {
            const chart = key as keyof typeof chartConfig
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-3 text-left even:border-l data-[active=true]:bg-background sm:border-l sm:border-t-0 sm:px-8 sm:py-5"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()} $
                </span>
              </button>
            )
          })}
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
