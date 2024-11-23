export default function Home({title}: {title: string}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
    </div>
  )
}