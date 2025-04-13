import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl">ArchitectAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="/dashboard" className="text-sm font-medium hover:underline underline-offset-4">
            Dashboard
          </Link>
          {/* <Link href="/projects" className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </Link> */}
          {/* <Link href="/materials" className="text-sm font-medium hover:underline underline-offset-4">
            Materials
          </Link> */}
          <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-12 lg:py-24 xl:py-24 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Intelligent Architectural Design & Material Selection
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Our AI-powered platform generates optimized architectural designs and material recommendations to
                    improve cost efficiency, sustainability, and project outcomes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/new-project">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                    >
                      Start New Project <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                src="https://i.pinimg.com/736x/38/e8/0b/38e80b8cdff31ba7f28c86e0f3cc2c27.jpg?height=550&width=800"
                alt="AI-generated architectural design visualization"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our AI-driven platform offers comprehensive solutions for architectural design and material selection
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>AI Design Generation</CardTitle>
                  <CardDescription>
                    Generate multiple architectural design options based on your requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="AI design generation"
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Material Recommendations</CardTitle>
                  <CardDescription>
                    Get intelligent material suggestions optimized for cost, sustainability, and performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Material recommendations"
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Cost Analysis</CardTitle>
                  <CardDescription>Real-time cost estimation and budget optimization for your projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Cost analysis"
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>
                    Assess the environmental footprint of different design and material choices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Environmental impact assessment"
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Customization</CardTitle>
                  <CardDescription>
                    Tailor recommendations to your specific project requirements and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Customization options"
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Collaboration</CardTitle>
                  <CardDescription>
                    Share designs and recommendations with team members and stakeholders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Collaboration features"
                    className="w-full rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ArchitectAI. All rights reserved.</p>
        {/* <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav> */}
      </footer>
    </div>
  )
}
