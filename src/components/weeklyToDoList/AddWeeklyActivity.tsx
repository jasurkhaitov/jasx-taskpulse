import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function AddWeeklyActivity({day} :{day :string}) {
  const [newTask, setNewTask] = useState('')

	const {toast} = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      setNewTask('')
      toast({
        description: `New "${newTask}" task has been added to ${day}.`,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-3">
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder={`Enter new task for ${day}`}
        className="flex-grow"
      />
      <Button type="submit">Add Task</Button>
    </form>
  )
}