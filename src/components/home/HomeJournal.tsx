import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

import {
	Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Link } from 'react-router-dom'

export default function HomeJournal() {

	const journalData = [
		{
			id: 1,
			date: "March 4, 2024",
			title: 'Forest Walk',
			link: '/documents/journal/1'
		},
		{
			id: 2,
			date: "September 14, 2023",
			title: 'Peaceful Place',
			link: '/documents/journal/2'
		},
		{
			id: 3,
			date: "February 5, 2020",
			title: 'School',
			link: '/documents/journal/3'
		},
		{
			id: 4,
			date: "March 4, 2024",
			title: 'University Life',
			link: '/documents/journal/4'
		},
		{
			id: 5,
			date: "May 4, 2023",
			title: 'Top Clubs',
			link: '/documents/journal/5'
		},
		{
			id: 6,
			date: "March 24, 2020",
			title: 'Subjects',
			link: '/documents/journal/6'
		},
	]

  return (
    <Card className="flex flex-col w-full border bg-card rounded-xl bg-bgLightBox dark:bg-bgDarkBox">
      <CardHeader className="items-center pb-0">
        <CardTitle>
					<Link to={'/documents/journal'} className='flex items-center gap-2'>Journal <HiMiniArrowTopRightOnSquare className='text-base'/></Link>
				</CardTitle>
        <CardDescription>You have {journalData.length} journal</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-0 flex flex-col items-start justify-start gap-6 mt-5">
				{
					journalData.map(items => <Link to={items.link} key={items.id}><span className='text-blue-600 dark:text-blue-200 font-semibold text-xs'>@{items.date}</span> - <span className='text-red-500 text-sm'>{items.title}</span></Link>)
				}
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        
      </CardFooter>
    </Card>
  )
}