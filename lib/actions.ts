"use server"

interface Material {
  name: string
  category: string
  sustainability: number
  cost: number
  performance: number
}

interface Recommendation {
  id: string
  title: string
  description: string
  image: string
  materials: Material[]
  costSavings: number
  sustainabilityScore: number
  constructionTime: string
}

export async function generateRecommendations(
  projectId: string,
  projectType?: string,
  sustainabilityFocus?: boolean,
): Promise<Recommendation[]> {
  try {
    // Instead of using Gemini API, we'll generate recommendations based on project type and sustainability focus
    let recommendations: Recommendation[] = []

    // Default to commercial if no type is provided
    const type = projectType || "commercial"
    const ecoFocus = sustainabilityFocus !== undefined ? sustainabilityFocus : true

    if (type === "commercial" || type === "office") {
      recommendations = getCommercialRecommendations(ecoFocus)
    } else if (type === "residential") {
      recommendations = getResidentialRecommendations(ecoFocus)
    } else if (type === "industrial") {
      recommendations = getIndustrialRecommendations(ecoFocus)
    } else {
      // Default recommendations
      recommendations = getCommercialRecommendations(ecoFocus)
    }

    // Add IDs and placeholder images to recommendations
    return recommendations.map((rec, index) => ({
      ...rec,
      id: `rec-${index + 1}`,
      image: `/placeholder.svg?height=400&width=800&text=Design+${index + 1}`,
    }))
  } catch (error) {
    console.error("Error generating recommendations:", error)
    // Return default recommendations as fallback
    return getCommercialRecommendations(true).map((rec, index) => ({
      ...rec,
      id: `rec-${index + 1}`,
      image: `/placeholder.svg?height=400&width=800&text=Design+${index + 1}`,
    }))
  }
}

function getCommercialRecommendations(sustainabilityFocus: boolean): Recommendation[] {
  if (sustainabilityFocus) {
    return [
      {
        id: "rec-1",
        title: "Eco-Modern Office Tower",
        description:
          "A sleek, energy-efficient design with abundant natural light and green spaces integrated throughout the structure.",
        image: "",
        materials: [
          {
            name: "Low-E Double Glazing",
            category: "Exterior",
            sustainability: 85,
            cost: 75,
            performance: 90,
          },
          {
            name: "Cross-Laminated Timber",
            category: "Structural",
            sustainability: 95,
            cost: 80,
            performance: 85,
          },
          {
            name: "Recycled Steel Reinforcement",
            category: "Structural",
            sustainability: 80,
            cost: 85,
            performance: 95,
          },
          {
            name: "Bamboo Flooring",
            category: "Interior",
            sustainability: 90,
            cost: 70,
            performance: 80,
          },
        ],
        costSavings: 18,
        sustainabilityScore: 88,
        constructionTime: "14 months",
      },
      {
        id: "rec-2",
        title: "Biophilic Business Center",
        description:
          "A nature-inspired design that maximizes occupant wellbeing through integrated greenery, natural materials, and optimal air quality.",
        image: "",
        materials: [
          {
            name: "Living Green Walls",
            category: "Interior/Exterior",
            sustainability: 95,
            cost: 65,
            performance: 85,
          },
          {
            name: "Rammed Earth Walls",
            category: "Structural",
            sustainability: 90,
            cost: 75,
            performance: 80,
          },
          {
            name: "Cork Insulation",
            category: "Insulation",
            sustainability: 95,
            cost: 70,
            performance: 85,
          },
        ],
        costSavings: 12,
        sustainabilityScore: 92,
        constructionTime: "16 months",
      },
      {
        id: "rec-3",
        title: "Smart Tech Office Hub",
        description:
          "A highly automated building with integrated IoT systems for optimal energy management, space utilization, and occupant comfort.",
        image: "",
        materials: [
          {
            name: "Electrochromic Glass",
            category: "Exterior",
            sustainability: 85,
            cost: 60,
            performance: 95,
          },
          {
            name: "Recycled Aluminum Cladding",
            category: "Exterior",
            sustainability: 80,
            cost: 85,
            performance: 90,
          },
          {
            name: "Modular Raised Flooring",
            category: "Interior",
            sustainability: 75,
            cost: 90,
            performance: 95,
          },
        ],
        costSavings: 22,
        sustainabilityScore: 80,
        constructionTime: "12 months",
      },
      {
        id: "rec-4",
        title: "Adaptive Reuse Complex",
        description:
          "A design that incorporates existing structural elements with modern additions, preserving embodied carbon while creating contemporary spaces.",
        image: "",
        materials: [
          {
            name: "Reclaimed Brick",
            category: "Exterior",
            sustainability: 95,
            cost: 85,
            performance: 85,
          },
          {
            name: "Hempcrete",
            category: "Insulation",
            sustainability: 95,
            cost: 70,
            performance: 80,
          },
          {
            name: "Recycled Glass Countertops",
            category: "Interior",
            sustainability: 90,
            cost: 75,
            performance: 85,
          },
        ],
        costSavings: 25,
        sustainabilityScore: 90,
        constructionTime: "10 months",
      },
    ]
  } else {
    // Non-sustainability focused commercial recommendations
    return [
      {
        id: "rec-1",
        title: "Modern Office Complex",
        description:
          "A contemporary office design with efficient space utilization and premium finishes for a professional environment.",
        image: "",
        materials: [
          {
            name: "Structural Steel",
            category: "Structural",
            sustainability: 60,
            cost: 85,
            performance: 95,
          },
          {
            name: "Glass Curtain Wall",
            category: "Exterior",
            sustainability: 65,
            cost: 70,
            performance: 85,
          },
          {
            name: "Porcelain Tile Flooring",
            category: "Interior",
            sustainability: 70,
            cost: 80,
            performance: 90,
          },
        ],
        costSavings: 15,
        sustainabilityScore: 65,
        constructionTime: "12 months",
      },
      {
        id: "rec-2",
        title: "Corporate Headquarters",
        description:
          "An impressive corporate headquarters with grand entrance and flexible office spaces designed for productivity.",
        image: "",
        materials: [
          {
            name: "Precast Concrete Panels",
            category: "Exterior",
            sustainability: 55,
            cost: 90,
            performance: 90,
          },
          {
            name: "Aluminum Composite Panels",
            category: "Exterior",
            sustainability: 60,
            cost: 85,
            performance: 85,
          },
          {
            name: "Luxury Vinyl Tile",
            category: "Interior",
            sustainability: 65,
            cost: 90,
            performance: 85,
          },
        ],
        costSavings: 20,
        sustainabilityScore: 60,
        constructionTime: "14 months",
      },
      {
        id: "rec-3",
        title: "Tech Campus Building",
        description:
          "A modern tech campus building with open floor plans and collaborative spaces designed for innovation.",
        image: "",
        materials: [
          {
            name: "Reinforced Concrete",
            category: "Structural",
            sustainability: 50,
            cost: 95,
            performance: 95,
          },
          {
            name: "Insulated Metal Panels",
            category: "Exterior",
            sustainability: 65,
            cost: 85,
            performance: 90,
          },
          {
            name: "Carpet Tile",
            category: "Interior",
            sustainability: 70,
            cost: 85,
            performance: 80,
          },
        ],
        costSavings: 18,
        sustainabilityScore: 62,
        constructionTime: "13 months",
      },
      {
        id: "rec-4",
        title: "Mixed-Use Office Building",
        description:
          "A versatile building with retail on the ground floor and office spaces above, maximizing revenue potential.",
        image: "",
        materials: [
          {
            name: "Steel Frame",
            category: "Structural",
            sustainability: 60,
            cost: 85,
            performance: 95,
          },
          {
            name: "Brick Veneer",
            category: "Exterior",
            sustainability: 75,
            cost: 80,
            performance: 90,
          },
          {
            name: "Polished Concrete Floors",
            category: "Interior",
            sustainability: 70,
            cost: 95,
            performance: 85,
          },
        ],
        costSavings: 22,
        sustainabilityScore: 68,
        constructionTime: "11 months",
      },
    ]
  }
}

function getResidentialRecommendations(sustainabilityFocus: boolean): Recommendation[] {
  if (sustainabilityFocus) {
    return [
      {
        id: "rec-1",
        title: "Eco-Friendly Apartment Complex",
        description:
          "A sustainable multi-family housing development with passive solar design and community garden spaces.",
        image: "",
        materials: [
          {
            name: "Structural Insulated Panels",
            category: "Structural/Insulation",
            sustainability: 90,
            cost: 80,
            performance: 85,
          },
          {
            name: "Triple-Glazed Windows",
            category: "Exterior",
            sustainability: 95,
            cost: 70,
            performance: 90,
          },
          {
            name: "Reclaimed Wood Flooring",
            category: "Interior",
            sustainability: 95,
            cost: 75,
            performance: 85,
          },
        ],
        costSavings: 15,
        sustainabilityScore: 92,
        constructionTime: "16 months",
      },
      {
        id: "rec-2",
        title: "Net-Zero Housing Development",
        description:
          "A residential community designed to produce as much energy as it consumes through renewable sources.",
        image: "",
        materials: [
          {
            name: "Hempcrete Walls",
            category: "Structural/Insulation",
            sustainability: 98,
            cost: 65,
            performance: 80,
          },
          {
            name: "Solar Roof Tiles",
            category: "Exterior/Energy",
            sustainability: 95,
            cost: 60,
            performance: 85,
          },
          {
            name: "Bamboo Flooring",
            category: "Interior",
            sustainability: 90,
            cost: 80,
            performance: 85,
          },
        ],
        costSavings: 10,
        sustainabilityScore: 95,
        constructionTime: "18 months",
      },
      {
        id: "rec-3",
        title: "Biophilic Townhouses",
        description:
          "A row of townhouses designed with natural materials and abundant connections to nature for healthier living.",
        image: "",
        materials: [
          {
            name: "Cross-Laminated Timber",
            category: "Structural",
            sustainability: 90,
            cost: 75,
            performance: 85,
          },
          {
            name: "Green Roof System",
            category: "Exterior",
            sustainability: 95,
            cost: 65,
            performance: 80,
          },
          {
            name: "Cork Flooring",
            category: "Interior",
            sustainability: 90,
            cost: 80,
            performance: 85,
          },
        ],
        costSavings: 12,
        sustainabilityScore: 90,
        constructionTime: "14 months",
      },
      {
        id: "rec-4",
        title: "Passive House Condominiums",
        description:
          "Ultra-energy efficient condominiums built to Passive House standards with minimal heating and cooling needs.",
        image: "",
        materials: [
          {
            name: "Cellulose Insulation",
            category: "Insulation",
            sustainability: 95,
            cost: 85,
            performance: 90,
          },
          {
            name: "Fiberglass-Framed Windows",
            category: "Exterior",
            sustainability: 85,
            cost: 75,
            performance: 95,
          },
          {
            name: "Marmoleum Flooring",
            category: "Interior",
            sustainability: 90,
            cost: 80,
            performance: 85,
          },
        ],
        costSavings: 20,
        sustainabilityScore: 88,
        constructionTime: "15 months",
      },
    ]
  } else {
    // Non-sustainability focused residential recommendations
    return [
      {
        id: "rec-1",
        title: "Luxury Apartment Complex",
        description:
          "An upscale residential development with premium finishes and amenities designed for comfort and style.",
        image: "",
        materials: [
          {
            name: "Reinforced Concrete",
            category: "Structural",
            sustainability: 50,
            cost: 90,
            performance: 95,
          },
          {
            name: "Stone Veneer",
            category: "Exterior",
            sustainability: 60,
            cost: 70,
            performance: 90,
          },
          {
            name: "Engineered Hardwood",
            category: "Interior",
            sustainability: 65,
            cost: 75,
            performance: 85,
          },
        ],
        costSavings: 12,
        sustainabilityScore: 58,
        constructionTime: "18 months",
      },
      {
        id: "rec-2",
        title: "Modern Townhouse Development",
        description: "Contemporary townhouses with open floor plans and rooftop terraces for urban living.",
        image: "",
        materials: [
          {
            name: "Steel Frame",
            category: "Structural",
            sustainability: 60,
            cost: 85,
            performance: 95,
          },
          {
            name: "Fiber Cement Siding",
            category: "Exterior",
            sustainability: 70,
            cost: 85,
            performance: 90,
          },
          {
            name: "Porcelain Tile",
            category: "Interior",
            sustainability: 65,
            cost: 80,
            performance: 90,
          },
        ],
        costSavings: 15,
        sustainabilityScore: 65,
        constructionTime: "14 months",
      },
      {
        id: "rec-3",
        title: "Traditional Condominium Building",
        description: "A classic residential building with timeless design elements and durable construction.",
        image: "",
        materials: [
          {
            name: "Concrete Block",
            category: "Structural",
            sustainability: 55,
            cost: 95,
            performance: 90,
          },
          {
            name: "Brick Exterior",
            category: "Exterior",
            sustainability: 70,
            cost: 80,
            performance: 95,
          },
          {
            name: "Carpet and Laminate",
            category: "Interior",
            sustainability: 60,
            cost: 90,
            performance: 80,
          },
        ],
        costSavings: 18,
        sustainabilityScore: 62,
        constructionTime: "16 months",
      },
      {
        id: "rec-4",
        title: "Mixed-Income Housing",
        description:
          "A residential development designed to accommodate various income levels with efficient use of space.",
        image: "",
        materials: [
          {
            name: "Wood Frame",
            category: "Structural",
            sustainability: 75,
            cost: 90,
            performance: 85,
          },
          {
            name: "Vinyl Siding",
            category: "Exterior",
            sustainability: 55,
            cost: 95,
            performance: 85,
          },
          {
            name: "Vinyl Plank Flooring",
            category: "Interior",
            sustainability: 60,
            cost: 95,
            performance: 80,
          },
        ],
        costSavings: 25,
        sustainabilityScore: 63,
        constructionTime: "12 months",
      },
    ]
  }
}

function getIndustrialRecommendations(sustainabilityFocus: boolean): Recommendation[] {
  if (sustainabilityFocus) {
    return [
      {
        id: "rec-1",
        title: "Sustainable Manufacturing Facility",
        description:
          "An eco-friendly industrial building designed for efficient production with minimal environmental impact.",
        image: "",
        materials: [
          {
            name: "Recycled Steel Structure",
            category: "Structural",
            sustainability: 85,
            cost: 80,
            performance: 95,
          },
          {
            name: "Insulated Metal Panels",
            category: "Exterior",
            sustainability: 80,
            cost: 85,
            performance: 90,
          },
          {
            name: "Polished Concrete",
            category: "Interior",
            sustainability: 85,
            cost: 95,
            performance: 90,
          },
        ],
        costSavings: 15,
        sustainabilityScore: 85,
        constructionTime: "10 months",
      },
      {
        id: "rec-2",
        title: "Green Logistics Center",
        description:
          "A distribution facility with energy-efficient systems and sustainable materials for reduced operational costs.",
        image: "",
        materials: [
          {
            name: "Glulam Beams",
            category: "Structural",
            sustainability: 90,
            cost: 75,
            performance: 85,
          },
          {
            name: "Cool Roof System",
            category: "Exterior",
            sustainability: 85,
            cost: 80,
            performance: 90,
          },
          {
            name: "Recycled Rubber Flooring",
            category: "Interior",
            sustainability: 90,
            cost: 85,
            performance: 85,
          },
        ],
        costSavings: 18,
        sustainabilityScore: 88,
        constructionTime: "12 months",
      },
      {
        id: "rec-3",
        title: "Solar-Powered Warehouse",
        description:
          "A warehouse facility with integrated solar panels and daylighting systems for energy independence.",
        image: "",
        materials: [
          {
            name: "Recycled Steel Frame",
            category: "Structural",
            sustainability: 85,
            cost: 80,
            performance: 95,
          },
          {
            name: "Photovoltaic Roof Panels",
            category: "Exterior/Energy",
            sustainability: 95,
            cost: 60,
            performance: 85,
          },
          {
            name: "Epoxy Flooring",
            category: "Interior",
            sustainability: 75,
            cost: 90,
            performance: 95,
          },
        ],
        costSavings: 10,
        sustainabilityScore: 90,
        constructionTime: "14 months",
      },
      {
        id: "rec-4",
        title: "Eco-Industrial Park Building",
        description: "A flexible industrial space designed for circular economy principles with shared resources.",
        image: "",
        materials: [
          {
            name: "Hybrid Timber-Steel Structure",
            category: "Structural",
            sustainability: 90,
            cost: 75,
            performance: 90,
          },
          {
            name: "Green Wall System",
            category: "Exterior",
            sustainability: 95,
            cost: 65,
            performance: 80,
          },
          {
            name: "Bamboo-Composite Panels",
            category: "Interior",
            sustainability: 90,
            cost: 75,
            performance: 85,
          },
        ],
        costSavings: 12,
        sustainabilityScore: 92,
        constructionTime: "16 months",
      },
    ]
  } else {
    // Non-sustainability focused industrial recommendations
    return [
      {
        id: "rec-1",
        title: "Standard Manufacturing Facility",
        description: "A cost-effective industrial building designed for efficient production and durability.",
        image: "",
        materials: [
          {
            name: "Steel Structure",
            category: "Structural",
            sustainability: 60,
            cost: 90,
            performance: 95,
          },
          {
            name: "Metal Siding",
            category: "Exterior",
            sustainability: 65,
            cost: 95,
            performance: 90,
          },
          {
            name: "Sealed Concrete",
            category: "Interior",
            sustainability: 70,
            cost: 95,
            performance: 90,
          },
        ],
        costSavings: 25,
        sustainabilityScore: 65,
        constructionTime: "8 months",
      },
      {
        id: "rec-2",
        title: "Distribution Center",
        description: "A large-scale warehouse facility optimized for logistics operations and storage efficiency.",
        image: "",
        materials: [
          {
            name: "Pre-Engineered Metal Building",
            category: "Structural",
            sustainability: 55,
            cost: 95,
            performance: 90,
          },
          {
            name: "Standing Seam Metal Roof",
            category: "Exterior",
            sustainability: 65,
            cost: 90,
            performance: 95,
          },
          {
            name: "Heavy-Duty Epoxy Floor",
            category: "Interior",
            sustainability: 60,
            cost: 85,
            performance: 95,
          },
        ],
        costSavings: 30,
        sustainabilityScore: 60,
        constructionTime: "9 months",
      },
      {
        id: "rec-3",
        title: "Flex Industrial Space",
        description: "A versatile industrial building suitable for various uses from light manufacturing to R&D.",
        image: "",
        materials: [
          {
            name: "Tilt-Up Concrete Panels",
            category: "Structural/Exterior",
            sustainability: 55,
            cost: 90,
            performance: 95,
          },
          {
            name: "Membrane Roofing",
            category: "Exterior",
            sustainability: 60,
            cost: 95,
            performance: 85,
          },
          {
            name: "Modular Raised Flooring",
            category: "Interior",
            sustainability: 65,
            cost: 85,
            performance: 90,
          },
        ],
        costSavings: 22,
        sustainabilityScore: 60,
        constructionTime: "10 months",
      },
      {
        id: "rec-4",
        title: "Cold Storage Facility",
        description:
          "A specialized industrial building designed for temperature-controlled storage with high energy efficiency.",
        image: "",
        materials: [
          {
            name: "Insulated Concrete Forms",
            category: "Structural",
            sustainability: 70,
            cost: 80,
            performance: 95,
          },
          {
            name: "High-Performance Insulation",
            category: "Insulation",
            sustainability: 75,
            cost: 75,
            performance: 95,
          },
          {
            name: "Insulated Metal Deck",
            category: "Exterior",
            sustainability: 65,
            cost: 85,
            performance: 95,
          },
        ],
        costSavings: 15,
        sustainabilityScore: 70,
        constructionTime: "12 months",
      },
    ]
  }
}
