"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import { generateRecommendations } from "@/lib/actions"

interface Recommendation {
  id: string
  title: string
  description: string
  image: string
  materials: {
    name: string
    category: string
    sustainability: number
    cost: number
    performance: number
  }[]
  costSavings: number
  sustainabilityScore: number
  constructionTime: string
}

export default function RecommendationsPage() {
  const params = useParams()
  const searchParams = useSearchParams()
  const projectId = params.id as string

  // Get project type and sustainability focus from URL params if available
  const projectType = searchParams.get("type") || "commercial"
  const sustainabilityFocus = searchParams.get("eco") === "true"

  const [recommendations, setRecommendations] = useState<Recommendation[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedRecommendation, setSelectedRecommendation] = useState<string | null>(null)

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        setLoading(true)
        // Pass project type and sustainability focus to the recommendations generator
        const data = await generateRecommendations(projectId, projectType, sustainabilityFocus)
        setRecommendations(data)
        if (data.length > 0) {
          setSelectedRecommendation(data[0].id)
        }
      } catch (err) {
        console.error("Error fetching recommendations:", err)
        setError("Failed to generate recommendations. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchRecommendations()
  }, [projectId, projectType, sustainabilityFocus])

  const selectedDesign = recommendations.find((r) => r.id === selectedRecommendation)

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">Recommendations</h1>
          <p className="text-muted-foreground">
            Based on {projectType} project type with{" "}
            {sustainabilityFocus ? "sustainability focus" : "standard materials"}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3">
              <Skeleton className="w-full h-[400px] rounded-lg" />
            </div>
            <div className="md:w-1/3 space-y-4">
              <Skeleton className="w-full h-12" />
              <Skeleton className="w-full h-24" />
              <Skeleton className="w-full h-40" />
            </div>
          </div>
        </div>
      ) : error ? (
        <Card>
          <CardHeader>
            <CardTitle>Error</CardTitle>
            <CardDescription>We encountered a problem while generating recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => window.location.reload()}>Try Again</Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="">
          {/* <div className="flex flex-col md:flex-row gap-6"> */}
          {/* <div className="md:w-2/3">
              {selectedDesign ? (
                <>
                  <div className="relative rounded-lg overflow-hidden bg-gray-100 h-[400px]">
                    <img
                      src={selectedDesign.image || "/placeholder.svg?height=400&width=800"}
                      alt={selectedDesign.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="secondary">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button size="sm" variant="secondary">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {recommendations.map((rec) => (
                      <div
                        key={rec.id}
                        className={`relative cursor-pointer rounded-md overflow-hidden h-20 
                          ${rec.id === selectedRecommendation ? "ring-2 ring-blue-600" : "opacity-70"}`}
                        onClick={() => setSelectedRecommendation(rec.id)}
                      >
                        <img
                          src={rec.image || "/placeholder.svg?height=80&width=120"}
                          alt={rec.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-[400px] bg-gray-100 rounded-lg">
                  <p className="text-muted-foreground">No design selected</p>
                </div>
              )}
            </div>
             */}
          <div className=''>
            {selectedDesign ? (
              <Card>
                <CardHeader>
                  <CardTitle>{selectedDesign.title}</CardTitle>
                  <CardDescription>{selectedDesign.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Cost Savings</p>
                      <p className="text-xl font-semibold">{selectedDesign.costSavings}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Sustainability</p>
                      <p className="text-xl font-semibold">{selectedDesign.sustainabilityScore}/100</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Construction Time</p>
                      <p className="text-xl font-semibold">{selectedDesign.constructionTime}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Key Materials</h3>
                    <div className="space-y-2">
                      {selectedDesign.materials.map((material, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-md"
                        >
                          <div>
                            <p className="font-medium">{material.name}</p>
                            <p className="text-xs text-muted-foreground">{material.category}</p>
                          </div>
                          <Badge
                            variant="outline"
                            className={
                              material.sustainability > 80
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            }
                          >
                            {material.sustainability > 80 ? "Eco" : "Standard"}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Select This Design</Button>
                </CardFooter>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>No Design Selected</CardTitle>
                  <CardDescription>Please select a design to view details</CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
          {/* </div> */}

          {selectedDesign && (
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analysis</CardTitle>
                <CardDescription>Comprehensive breakdown of the selected design</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="materials">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="materials">Materials</TabsTrigger>
                    {/* <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
                    <TabsTrigger value="cost">Cost Analysis</TabsTrigger>
                    <TabsTrigger value="timeline">Timeline</TabsTrigger> */}
                  </TabsList>
                  <TabsContent value="materials" className="space-y-4">
                    <p className="text-muted-foreground">
                      The AI has selected these materials based on your project requirements, budget constraints, and
                      sustainability goals. Each material has been evaluated for performance, cost-efficiency, and
                      environmental impact.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedDesign.materials.map((material, index) => (
                        <Card key={index}>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg">{material.name}</CardTitle>
                            <CardDescription>{material.category}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Sustainability</span>
                                <span>{material.sustainability}%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-green-500 rounded-full"
                                  style={{ width: `${material.sustainability}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Cost Efficiency</span>
                                <span>{material.cost}%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-blue-500 rounded-full"
                                  style={{ width: `${material.cost}%` }}
                                ></div>
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between text-sm mb-1">
                                <span>Performance</span>
                                <span>{material.performance}%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-purple-500 rounded-full"
                                  style={{ width: `${material.performance}%` }}
                                ></div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="sustainability">
                    <p>Sustainability analysis content will be displayed here</p>
                  </TabsContent>
                  <TabsContent value="cost">
                    <p>Cost analysis content will be displayed here</p>
                  </TabsContent>
                  <TabsContent value="timeline">
                    <p>Project timeline content will be displayed here</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
