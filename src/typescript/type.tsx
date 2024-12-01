export interface Task {
  id: string
  text: string
  completed: boolean
}

export interface DayColumn {
  day: string
  tasks: Task[]
}

export interface WeekProps {
	date: string
	title: string
	desc: string
	id: number
	time: string
}