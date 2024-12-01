import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Link } from "react-router-dom";

const chartData = [
  { browser: "Completed", visitors: 565, fill: "var(--color-chrome)" },
  { browser: "Incomplete", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Tasks",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-2))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export default function HomeWeeklyToDoList() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  const week = "December 2 - December 8";
  const percentage = (565 / (565 + 190)) * 100;

  return (
    <Card className="flex flex-col bg-bgLightBox dark:bg-bgDarkBox">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <Link to={"/documents/weekly-to-do-list"} className="flex items-center gap-2">
            Weekly To-do List <HiMiniArrowTopRightOnSquare className="text-base" />
          </Link>
        </CardTitle>
        <CardDescription>Track your weekly progress</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <ChartContainer config={chartConfig} className="aspect-square max-h-[250px] m-auto">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Tasks
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="gap-2 text-sm text-center w-full mx-auto">
        <div>
          <div className="flex items-center justify-center gap-2 font-medium leading-none mb-2">
            Completed {percentage.toFixed(1)}% tasks <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground flex items-center justify-center gap-1">
            <MdAccessTime /> {week}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
