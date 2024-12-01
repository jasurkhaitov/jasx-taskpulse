import { BiMoneyWithdraw } from 'react-icons/bi'
import { BsJournalRichtext } from 'react-icons/bs'
import { FaListUl } from 'react-icons/fa'
import { GoProjectRoadmap } from 'react-icons/go'
import { RiBookMarkedLine } from 'react-icons/ri'

export const styleUI = {
	gradientButton: 'py-[7px] px-3 rounded-sm flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-pink-500 active:scale-95',
}

export const telegramBotAPI = {
	botToken: '8051663659:AAERneYNYca0hOMWAIOyGWp5djnltlfcCDc',
	chatId: 5300534670,
	disableForm: false,
}

export const homeReadingBookData = [
	{
		id: 1,
		img: 'https://images.squarespace-cdn.com/content/v1/5b47a3b9c258b45c395b9f01/1671171549980-ALQH0MGN549AFTD1G600/atomic+habits+book.jpeg',
		title: 'Atomic Habits',
		slug: '/documents/reading-book/1',
		data: '23.09.2024',
	},
	{
		id: 2,
		img: 'https://media.cnn.com/api/v1/images/stellar/prod/111024080409-steve-jobs-book.jpg?q=w_3000,h_2000,x_0,y_0,c_fill',
		title: 'Steve Jobs',
		slug: '/documents/reading-book/2',
		data: '13.08.2024',
	},
	{
		id: 3,
		img: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg',
		title: 'Elon Musk',
		slug: '/documents/reading-book/3',
		data: '13.06.2024',
	},
]

export const searchCommandNav = [
	{
		id: 1,
		icon: <FaListUl />,
		title: 'Weekly To Do List',
		url: '/documents/weekly-to-do-list',
	},
	{
		id: 2,
		icon: <BsJournalRichtext />,
		title: 'Journal',
		url: '/documents/journal',
	},
	{
		id: 3,
		icon: <BiMoneyWithdraw />,
		title: 'Monthly Budget',
		url: '/documents/monthly-budget',
	},
	{
		id: 4,
		icon: <RiBookMarkedLine />,
		title: 'Reading Book',
		url: '/documents/reading-book',
	},
	{
		id: 5,
		icon: <GoProjectRoadmap />,
		title: 'Project',
		url: '/documents/projects',
	},
]

export const projectNav = [
	{
		id: 1,
		title: 'Project One',
		url: '#',
	},
	{
		id: 2,
		title: 'Project Two',
		url: '#',
	},
]

export const week = [
	{
		id: 1,
		date: 'Fri Dec 06 2024 00:00:00 GMT+0500 (Uzbekistan Standard Time)',
		title: 'Week One',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi veniam. Sint incidunt impedit vero ex? Tempore cupiditate assumenda soluta.',
		time: new Date().toISOString()
	},
	{
		id: 2,
		date: 'Sat Dec 14 2024 00:00:00 GMT+0500 (Uzbekistan Standard Time)',
		title: 'Week Two',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi veniam. Sint incidunt impedit vero ex? Tempore cupiditate assumenda soluta.',
		time: new Date().toISOString()
	},
	{
		id: 3,
		date: 'Fri May 09 2025 00:00:00 GMT+0500 (Uzbekistan Standard Time)',
		title: 'Week Three',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, eligendi veniam. Sint incidunt impedit vero ex? Tempore cupiditate assumenda soluta.',
		time: new Date().toISOString()
	}
]