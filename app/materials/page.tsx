import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal } from "lucide-react"

export default function MaterialsLibrary() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Materials Library</h1>
          <p className="text-muted-foreground">Browse and compare construction materials with AI-powered insights</p>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search materials" className="pl-8" />
          </div>
          <Button variant="outline">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-8">
        <TabsList className="w-full md:w-auto flex justify-start overflow-auto">
          <TabsTrigger value="all">All Materials</TabsTrigger>
          <TabsTrigger value="structural">Structural</TabsTrigger>
          <TabsTrigger value="exterior">Exterior</TabsTrigger>
          <TabsTrigger value="interior">Interior</TabsTrigger>
          <TabsTrigger value="insulation">Insulation</TabsTrigger>
          <TabsTrigger value="sustainable">Sustainable</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Material Cards */}
            <MaterialCard
              name="Cross-Laminated Timber (CLT)"
              category="Structural"
              description="Engineered wood product with high strength-to-weight ratio, suitable for walls, floors, and roofs."
              sustainability={90}
              cost={70}
              performance={85}
              tags={["Renewable", "Carbon-Negative", "Fire-Resistant"]}
              image="/placeholder.svg?height=150&width=300"
            />

            <MaterialCard
              name="Low-E Glass"
              category="Exterior"
              description="Energy-efficient glass that minimizes the amount of infrared and ultraviolet light without reducing visible light."
              sustainability={85}
              cost={60}
              performance={90}
              tags={["Energy-Efficient", "UV-Blocking", "Insulating"]}
              image="/placeholder.svg?height=150&width=300"
            />

            <MaterialCard
              name="Recycled Steel"
              category="Structural"
              description="Steel made from scrap metal, reducing energy consumption and mining impact while maintaining strength."
              sustainability={80}
              cost={75}
              performance={95}
              tags={["Recycled", "Durable", "High-Strength"]}
              image="/placeholder.svg?height=150&width=300"
            />

            <MaterialCard
              name="Bamboo Flooring"
              category="Interior"
              description="Sustainable alternative to hardwood flooring with rapid renewability and comparable durability."
              sustainability={95}
              cost={80}
              performance={75}
              tags={["Renewable", "Durable", "Low-VOC"]}
              image="/placeholder.svg?height=150&width=300"
            />

            <MaterialCard
              name="Hempcrete"
              category="Insulation"
              description="Biocomposite material made from hemp hurds and lime, providing thermal insulation and moisture regulation."
              sustainability={98}
              cost={65}
              performance={80}
              tags={["Carbon-Negative", "Breathable", "Insulating"]}
              image="/placeholder.svg?height=150&width=300"
            />

            <MaterialCard
              name="Recycled Composite Panels"
              category="Exterior"
              description="Durable panels made from recycled plastics and wood fibers, resistant to moisture and decay."
              sustainability={85}
              cost={85}
              performance={90}
              tags={["Recycled", "Weather-Resistant", "Low-Maintenance"]}
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        <TabsContent value="structural" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaterialCard
              name="Cross-Laminated Timber (CLT)"
              category="Structural"
              description="Engineered wood product with high strength-to-weight ratio, suitable for walls, floors, and roofs."
              sustainability={90}
              cost={70}
              performance={85}
              tags={["Renewable", "Carbon-Negative", "Fire-Resistant"]}
              image="/placeholder.svg?height=150&width=300"
            />

            <MaterialCard
              name="Recycled Steel"
              category="Structural"
              description="Steel made from scrap metal, reducing energy consumption and mining impact while maintaining strength."
              sustainability={80}
              cost={75}
              performance={95}
              tags={["Recycled", "Durable", "High-Strength"]}
              image="/placeholder.svg?height=150&width=300"
            />
          </div>
        </TabsContent>

        {/* Other tab contents would be similar */}
      </Tabs>
    </div>
  )
}

interface MaterialCardProps {
  name: string
  category: string
  description: string
  sustainability: number
  cost: number
  performance: number
  tags: string[]
  image: string
}

function MaterialCard({
  name,
  category,
  description,
  sustainability,
  cost,
  performance,
  tags,
  image,
}: MaterialCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-40">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-full object-cover" />
        <Badge className="absolute top-2 right-2">{category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Sustainability</span>
              <span>{sustainability}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: `${sustainability}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Cost Efficiency</span>
              <span>{cost}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full" style={{ width: `${cost}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Performance</span>
              <span>{performance}%</span>
            </div>
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${performance}%` }}></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

