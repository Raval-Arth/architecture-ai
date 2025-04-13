import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Building2, FileText, Home, Plus } from "lucide-react"
import ProjectCard from "@/components/project-card"
import RecentMaterials from "@/components/recent-materials"
import CostAnalysisChart from "@/components/cost-analysis-chart"
import SustainabilityMetrics from "@/components/sustainability-metrics"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Link href="/new-project">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </Link>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            {/* <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger> */}
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Material Recommendations</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">145</div>
                  <p className="text-xs text-muted-foreground">+24 from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                  <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$42,500</div>
                  <p className="text-xs text-muted-foreground">+15% from traditional methods</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Carbon Reduction</CardTitle>
                  <Home className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28%</div>
                  <p className="text-xs text-muted-foreground">Compared to industry average</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>Your most recent architectural design projects and their status</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <ProjectCard
                    title="Modern Office Complex"
                    description="Commercial building with sustainable design elements"
                    progress={75}
                    image="https://i.pinimg.com/736x/4c/45/bb/4c45bb709ad7b59f4f4ad095d7e10cc4.jpg?height=100&width=200"
                  />
                  <ProjectCard
                    title="Residential Apartments"
                    description="Multi-family housing with optimized space utilization"
                    progress={45}
                    image="https://i.pinimg.com/736x/0e/18/1b/0e181bd08272dc148793f99a812872e8.jpg?height=100&width=200"
                  />
                  <ProjectCard
                    title="Community Center"
                    description="Public space with energy-efficient design"
                    progress={90}
                    image="https://i.pinimg.com/736x/e4/da/f9/e4daf946f9509d92ab7e7b557a0ce489.jpg?height=100&width=200"
                  />
                  <ProjectCard
                    title="Retail Space Renovation"
                    description="Modernization of existing commercial space"
                    progress={30}
                    image="https://i.pinimg.com/736x/6a/4d/97/6a4d97af2593b3968f0fbbc4d2536143.jpg?height=100&width=200"
                  />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Material Recommendations</CardTitle>
                  <CardDescription>Recently recommended materials for your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentMaterials />
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Cost Analysis</CardTitle>
                  <CardDescription>Comparison of traditional vs. AI-recommended materials</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <CostAnalysisChart />
                </CardContent>
              </Card>
              {/* <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Sustainability Metrics</CardTitle>
                  <CardDescription>Environmental impact of your design choices</CardDescription>
                </CardHeader>
                <CardContent>
                  <SustainabilityMetrics />
                </CardContent>
              </Card> */}
            </div>
          </TabsContent>
          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>All Projects</CardTitle>
                <CardDescription>Manage and view all your architectural design projects</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Projects content will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="materials" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Material Library</CardTitle>
                <CardDescription>Browse and compare different construction materials</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Materials content will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Detailed analysis of your design and material choices</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Analytics content will be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
