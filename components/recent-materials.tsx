import { Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function RecentMaterials() {
  const materials = [
    {
      name: "Recycled Composite Panels",
      category: "Exterior",
      sustainable: true,
      costEfficient: true,
      recommended: true,
    },
    {
      name: "Low-E Glass Windows",
      category: "Windows",
      sustainable: true,
      costEfficient: false,
      recommended: true,
    },
    {
      name: "Bamboo Flooring",
      category: "Flooring",
      sustainable: true,
      costEfficient: true,
      recommended: true,
    },
    {
      name: "Structural Steel",
      category: "Structure",
      sustainable: false,
      costEfficient: true,
      recommended: true,
    },
    {
      name: "Traditional Concrete",
      category: "Foundation",
      sustainable: false,
      costEfficient: true,
      recommended: false,
    },
  ]

  return (
    <div className="space-y-4">
      {materials.map((material, index) => (
        <div key={index} className="flex items-center justify-between border-b pb-2">
          <div>
            <div className="font-medium">{material.name}</div>
            <div className="text-sm text-muted-foreground">{material.category}</div>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant={material.sustainable ? "default" : "outline"}
              className={material.sustainable ? "bg-green-500" : ""}
            >
              Eco
            </Badge>
            <Badge
              variant={material.costEfficient ? "default" : "outline"}
              className={material.costEfficient ? "bg-blue-500" : ""}
            >
              Cost
            </Badge>
            {material.recommended ? (
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="h-4 w-4 text-green-600" />
              </div>
            ) : (
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                <X className="h-4 w-4 text-red-600" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
