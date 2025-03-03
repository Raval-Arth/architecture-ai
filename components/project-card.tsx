import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface ProjectCardProps {
  title: string
  description: string
  progress: number
  image: string
}

export default function ProjectCard({ title, description, progress, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-32">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

