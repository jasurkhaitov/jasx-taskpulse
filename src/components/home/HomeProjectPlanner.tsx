import { TrendingUp } from "lucide-react"
import { LabelList, RadialBar, RadialBarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData1 = [
  { type: "to-do", tasks: 15, fill: "var(--color-chrome)" },
  { type: "in-progress", tasks: 10, fill: "var(--color-safari)" },
  { type: "produced", tasks: 5, fill: "var(--color-firefox)" },
  { type: "done", tasks: 8, fill: "var(--color-edge)" },
]

const chartData2 = [
  { type: "to-do", tasks: 20, fill: "var(--color-chrome)" },
  { type: "in-progress", tasks: 15, fill: "var(--color-safari)" },
  { type: "produced", tasks: 10, fill: "var(--color-firefox)" },
  { type: "done", tasks: 12, fill: "var(--color-edge)" },
]

const chartData3 = [
  { type: "to-do", tasks: 10, fill: "var(--color-chrome)" },
  { type: "in-progress", tasks: 7, fill: "var(--color-safari)" },
  { type: "produced", tasks: 8, fill: "var(--color-firefox)" },
  { type: "done", tasks: 15, fill: "var(--color-edge)" },
]

const chartData4 = [
  { type: "to-do", tasks: 25, fill: "var(--color-chrome)" },
  { type: "in-progress", tasks: 20, fill: "var(--color-safari)" },
  { type: "produced", tasks: 12, fill: "var(--color-firefox)" },
  { type: "done", tasks: 18, fill: "var(--color-edge)" },
]

const chartConfig = {
  tasks: {
    label: "Tasks",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export default function HomeProjectPlanner() {
  const charts = [chartData1, chartData2, chartData3, chartData4]

  return (
    <div className="grid grid-cols-2 gap-5">
      {charts.map((data, index) => (
        <Card className="flex flex-col bg-bgLightBox dark:bg-bgDarkBox" key={index}>
          <CardHeader className="items-center pb-0">
            <CardTitle>Project - {`${index + 1}`}</CardTitle>
            <CardDescription>Project Task Overview</CardDescription>
          </CardHeader>

          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <RadialBarChart
                data={data}
                startAngle={-90}
                endAngle={380}
                innerRadius={30}
                outerRadius={110}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel nameKey="type" />}
                />
                <RadialBar dataKey="tasks" background>
                  <LabelList
                    position="insideStart"
                    dataKey="type"
                    className="fill-white capitalize mix-blend-luminosity"
                    fontSize={11}
                  />
                </RadialBar>
              </RadialBarChart>
            </ChartContainer>
          </CardContent>

          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by {5 + index}% this week{" "}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Task completion overview for the week
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}