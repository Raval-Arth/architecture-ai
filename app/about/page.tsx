import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, BarChart, Building2, Clock, Lightbulb, Recycle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">About ArchitectAI</h1>
          <p className="text-xl text-muted-foreground">
            Revolutionizing architectural design and material selection with artificial intelligence
          </p>
        </div>

        <div className="grid gap-8 mb-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                ArchitectAI was founded with a clear mission: to transform the construction industry by leveraging the
                power of artificial intelligence to create more efficient, sustainable, and cost-effective architectural
                designs and material selections.
              </p>
              <p className="text-muted-foreground">
                We believe that by combining human creativity with AI-driven insights, we can help architects, builders,
                and property developers make better decisions, reduce waste, and create buildings that are not only
                beautiful but also environmentally responsible and economically viable.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="ArchitectAI mission"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">The Problem We're Solving</h2>
              <p className="text-muted-foreground mb-4">
                The construction industry faces significant challenges: increasing project complexity, tight budgets,
                sustainability requirements, and the need for greater efficiency. Traditional approaches often lead to:
              </p>
              <ul className="list-disc pl-5 text-muted-foreground mb-4 space-y-2">
                <li>Suboptimal design choices due to limited exploration of alternatives</li>
                <li>Inefficient material selection based on habit rather than data</li>
                <li>Cost overruns from poor planning and material waste</li>
                <li>Environmental impact that could be reduced with better choices</li>
              </ul>
              <p className="text-muted-foreground">
                ArchitectAI addresses these challenges head-on with our innovative AI-powered platform.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="Construction industry challenges"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <Lightbulb className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Intelligent Design</CardTitle>
                <CardDescription>AI-generated architectural designs tailored to your requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes thousands of successful architectural projects to generate optimal design solutions
                  that meet your specific needs, constraints, and aesthetic preferences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <BarChart className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Cost Optimization</CardTitle>
                <CardDescription>Reduce expenses without compromising on quality</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ArchitectAI identifies cost-saving opportunities through intelligent material selection and design
                  efficiency, helping you maximize your budget while maintaining high standards.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Recycle className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Sustainability Focus</CardTitle>
                <CardDescription>Environmentally responsible design and material choices</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our platform prioritizes eco-friendly materials and energy-efficient designs, helping you reduce the
                  environmental footprint of your construction projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Clock className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Time Efficiency</CardTitle>
                <CardDescription>Accelerate the design and planning process</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generate multiple design options and material recommendations in minutes instead of days, allowing you
                  to make decisions faster and move your projects forward more efficiently.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Building2 className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>Buildings that function better and last longer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ArchitectAI recommends materials and design approaches that enhance building performance, durability,
                  and user comfort based on data-driven insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <Award className="h-8 w-8 text-blue-500 mb-2" />
                <CardTitle>Competitive Advantage</CardTitle>
                <CardDescription>Stand out with innovative, optimized designs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Leverage cutting-edge AI technology to differentiate your architectural practice or construction
                  business, delivering superior results that impress clients and win more projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Technology</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            ArchitectAI combines advanced machine learning algorithms, computer vision, and natural language processing
            to analyze project requirements and generate optimal architectural solutions. Our AI has been trained on
            thousands of successful building projects, material specifications, and sustainability metrics to provide
            recommendations that are both innovative and practical.
          </p>
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="ArchitectAI technology"
            className="rounded-lg shadow-lg w-full max-w-3xl mx-auto"
          />
        </div>

        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Architectural Process?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the growing number of architects, builders, and developers who are using ArchitectAI to create better
            buildings more efficiently.
          </p>
          <Link href="/new-project">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              Start Your First Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid gap-4 max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How accurate are the AI-generated recommendations?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI recommendations are based on extensive data analysis and have been validated by industry
                  experts. While the system continues to learn and improve, we've found that our recommendations achieve
                  over 90% accuracy when compared to expert human decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can ArchitectAI replace human architects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  No, and that's not our goal. ArchitectAI is designed to be a powerful tool that enhances human
                  creativity and expertise, not replace it. Our system provides data-driven insights and recommendations
                  that architects can use to make better decisions and explore more possibilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How does the material recommendation system work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our system analyzes your project requirements, budget constraints, and sustainability goals, then
                  compares thousands of material options to identify the optimal choices. We consider factors like cost,
                  performance, availability, environmental impact, and compatibility with your design.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my project data secure?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolutely. We implement industry-leading security measures to protect your data. All information is
                  encrypted both in transit and at rest, and we never share your project details with third parties
                  without your explicit permission.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
