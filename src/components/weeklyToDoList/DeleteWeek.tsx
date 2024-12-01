import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from '@/hooks/use-toast'

export default function DeleteWeek({ title, onClose }: { title: string; onClose: () => void }) {
  const [projectName, setProjectName] = useState("")
  const [confirmText, setConfirmText] = useState("")
  const { toast } = useToast()
  const expectedProjectName = title
  const expectedConfirmText = "delete my project"

  const handleDelete = () => {
    if (projectName.trim() !== expectedProjectName || confirmText.trim() !== expectedConfirmText) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please check your input and try again.",
      })
      return
    }

    toast({
      title: "Project deleted",
      description: "Your project has been successfully deleted.",
    })

    onClose()
  }

  return (
    <>
      <div className="space-y-4">
        <Alert variant="destructive" className="border-red-900 bg-red-950 text-red-400">
          <AlertDescription>
            Warning: This action is not reversible. Please be certain.
          </AlertDescription>
        </Alert>

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-sm text-gray-400">
              Enter the project name <span className="font-bold text-black dark:text-white italic">{expectedProjectName}</span> to continue:
            </p>
            <Input
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="bg-transparent"
            />
          </div>
          <div>
            <p className="mb-2 text-sm text-gray-400">
              To verify, type <span className="font-bold text-black dark:text-white italic">{expectedConfirmText}</span> below:
            </p>
            <Input
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              className="bg-transparent"
            />
          </div>
        </div>
      </div>

      <div className="justify-between space-x-2 flex items-center">
        <Button
          onClick={handleDelete}
          className="bg-white text-black hover:bg-gray-200"
        >
          Continue
        </Button>
      </div>
    </>
  )
}