"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Building, Building2, Home, Landmark, Store } from "lucide-react"

export default function NewProject() {
  const [currentStep, setCurrentStep] = useState(1)
  const [projectType, setProjectType] = useState("")
  const [budget, setBudget] = useState([500000])
  const [sustainabilityFocus, setSustainabilityFocus] = useState(false)

  const nextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Create New Project</h1>

      <div className="mb-8">
        <div className="flex justify-between items-center relative">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                  ${currentStep >= step ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-gray-300 text-gray-500"}`}
              >
                {step}
              </div>
              <span className="text-sm mt-2">
                {step === 1 && "Basic Info"}
                {step === 2 && "Requirements"}
                {step === 3 && "Preferences"}
                {step === 4 && "Review"}
              </span>
            </div>
          ))}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200 -z-0">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(currentStep - 1) * 33.33}%` }}
            ></div>
          </div>
        </div>
      </div>

      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
            <CardDescription>Enter the basic details about your architectural project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="project-name">Project Name</Label>
              <Input id="project-name" placeholder="Enter project name" />
            </div>
            <div className="space-y-2">
              <Label>Project Type</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <Button
                  variant={projectType === "residential" ? "default" : "outline"}
                  className="h-24 flex flex-col gap-2"
                  onClick={() => setProjectType("residential")}
                >
                  <Home className="h-8 w-8" />
                  <span>Residential</span>
                </Button>
                <Button
                  variant={projectType === "commercial" ? "default" : "outline"}
                  className="h-24 flex flex-col gap-2"
                  onClick={() => setProjectType("commercial")}
                >
                  <Building2 className="h-8 w-8" />
                  <span>Commercial</span>
                </Button>
                <Button
                  variant={projectType === "institutional" ? "default" : "outline"}
                  className="h-24 flex flex-col gap-2"
                  onClick={() => setProjectType("institutional")}
                >
                  <Landmark className="h-8 w-8" />
                  <span>Institutional</span>
                </Button>
                <Button
                  variant={projectType === "industrial" ? "default" : "outline"}
                  className="h-24 flex flex-col gap-2"
                  onClick={() => setProjectType("industrial")}
                >
                  <Building className="h-8 w-8" />
                  <span>Industrial</span>
                </Button>
                <Button
                  variant={projectType === "retail" ? "default" : "outline"}
                  className="h-24 flex flex-col gap-2"
                  onClick={() => setProjectType("retail")}
                >
                  <Store className="h-8 w-8" />
                  <span>Retail</span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="City, Country" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="project-description">Project Description</Label>
              <Textarea id="project-description" placeholder="Brief description of your project" rows={4} />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" disabled>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {currentStep === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Project Requirements</CardTitle>
            <CardDescription>Specify the technical requirements for your project</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="total-area">Total Area (sq ft/m²)</Label>
              <Input id="total-area" type="number" placeholder="Enter total area" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="floors">Number of Floors</Label>
              <Select>
                <SelectTrigger id="floors">
                  <SelectValue placeholder="Select number of floors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="6-10">6-10</SelectItem>
                  <SelectItem value="11+">11+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="occupancy">Occupancy</Label>
              <Input id="occupancy" type="number" placeholder="Expected number of occupants" />
            </div>
            <div className="space-y-2">
              <Label>Budget Range ($)</Label>
              <div className="pt-6">
                <Slider value={budget} min={100000} max={10000000} step={50000} onValueChange={setBudget} />
                <div className="flex justify-between mt-2">
                  <span className="text-sm text-gray-500">$100K</span>
                  <span className="text-sm font-medium">${budget[0].toLocaleString()}</span>
                  <span className="text-sm text-gray-500">$10M+</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select>
                <SelectTrigger id="timeline">
                  <SelectValue placeholder="Select expected timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="6-12months">6-12 months</SelectItem>
                  <SelectItem value="1-2years">1-2 years</SelectItem>
                  <SelectItem value="2+years">2+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {currentStep === 3 && (
        <Card>
          <CardHeader>
            <CardTitle>Design Preferences</CardTitle>
            <CardDescription>Tell us about your design preferences and priorities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="architectural-style">Preferred Architectural Style</Label>
              <Select>
                <SelectTrigger id="architectural-style">
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="modern">Modern</SelectItem>
                  <SelectItem value="contemporary">Contemporary</SelectItem>
                  <SelectItem value="traditional">Traditional</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="minimalist">Minimalist</SelectItem>
                  <SelectItem value="classical">Classical</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Design Priorities</Label>
              <Tabs defaultValue="aesthetics">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="aesthetics">Aesthetics</TabsTrigger>
                  <TabsTrigger value="functionality">Functionality</TabsTrigger>
                  <TabsTrigger value="cost">Cost Efficiency</TabsTrigger>
                </TabsList>
                <TabsContent value="aesthetics" className="p-4 border rounded-md mt-2">
                  <p className="text-sm text-gray-500">
                    Focus on visual appeal and design excellence, with premium materials and finishes.
                  </p>
                </TabsContent>
                <TabsContent value="functionality" className="p-4 border rounded-md mt-2">
                  <p className="text-sm text-gray-500">
                    Prioritize practical use of space, efficient layouts, and user experience.
                  </p>
                </TabsContent>
                <TabsContent value="cost" className="p-4 border rounded-md mt-2">
                  <p className="text-sm text-gray-500">
                    Optimize for budget constraints while maintaining quality standards.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="sustainability-focus">Sustainability Focus</Label>
                <Switch
                  id="sustainability-focus"
                  checked={sustainabilityFocus}
                  onCheckedChange={setSustainabilityFocus}
                />
              </div>
              {sustainabilityFocus && (
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-md mt-2">
                  <p className="text-sm text-green-600 dark:text-green-400">
                    Our AI will prioritize eco-friendly materials and energy-efficient design solutions.
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="material-preferences">Material Preferences</Label>
              <Textarea
                id="material-preferences"
                placeholder="Any specific materials you prefer or want to avoid"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="special-requirements">Special Requirements</Label>
              <Textarea
                id="special-requirements"
                placeholder="Any special features or requirements for your project"
                rows={3}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button onClick={nextStep}>
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      )}

      {currentStep === 4 && (
        <Card>
          <CardHeader>
            <CardTitle>Review & Generate</CardTitle>
            <CardDescription>Review your project details and generate AI recommendations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Project Type</h3>
                  <p className="capitalize">{projectType || "Not specified"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Budget</h3>
                  <p>${budget[0].toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Sustainability Focus</h3>
                  <p>{sustainabilityFocus ? "Yes" : "No"}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Timeline</h3>
                  <p>Not specified</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Design Priorities</h3>
                <p>Aesthetics, Functionality, Cost Efficiency</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Special Requirements</h3>
                <p className="text-gray-400 italic">None specified</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <h3 className="font-medium mb-2">What happens next?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Our AI system will analyze your requirements and generate:
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside mt-2 space-y-1">
                <li>Multiple architectural design concepts</li>
                <li>Optimized material recommendations</li>
                <li>Cost estimates and budget allocation</li>
                <li>Sustainability metrics and environmental impact analysis</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={prevStep}>
              Back
            </Button>
            <Button>Generate Recommendations</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

