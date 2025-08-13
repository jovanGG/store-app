import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    description:
      "Premium whey protein isolate with 25g protein per serving. Fast-absorbing formula perfect for post-workout recovery.",
    bestSeller: true,
    category: "Protein",
    price: 49.99,
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    description:
      "Pure creatine monohydrate powder to enhance strength, power, and muscle growth. Clinically proven formula.",
    bestSeller: true,
    category: "Performance",
    price: 24.99,
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil",
    description:
      "High-potency fish oil capsules with EPA and DHA for heart health, brain function, and joint support.",
    bestSeller: false,
    category: "Health",
    price: 32.99,
  },
  {
    id: 4,
    name: "Pre-Workout Complex",
    description:
      "Energy-boosting pre-workout formula with caffeine, beta-alanine, and citrulline for enhanced performance.",
    bestSeller: true,
    category: "Performance",
    price: 39.99,
  },
  {
    id: 5,
    name: "Multivitamin for Athletes",
    description:
      "Complete multivitamin specially formulated for active individuals with essential vitamins and minerals.",
    bestSeller: false,
    category: "Vitamins",
    price: 29.99,
  },
  {
    id: 6,
    name: "BCAA Recovery Powder",
    description:
      "Branched-chain amino acids in a 2:1:1 ratio to support muscle recovery and reduce exercise fatigue.",
    bestSeller: false,
    category: "Recovery",
    price: 34.99,
  },
  {
    id: 7,
    name: "Casein Protein",
    description:
      "Slow-digesting casein protein perfect for nighttime use. Provides sustained amino acid release for 7-8 hours.",
    bestSeller: false,
    category: "Protein",
    price: 44.99,
  },
  {
    id: 8,
    name: "Vitamin D3 + K2",
    description:
      "Synergistic combination of vitamin D3 and K2 for optimal bone health and calcium absorption.",
    bestSeller: false,
    category: "Vitamins",
    price: 19.99,
  },
  {
    id: 9,
    name: "Glutamine Powder",
    description:
      "Pure L-glutamine powder to support muscle recovery, immune function, and gut health.",
    bestSeller: false,
    category: "Recovery",
    price: 27.99,
  },
  {
    id: 10,
    name: "Fat Burner Thermogenic",
    description:
      "Advanced thermogenic formula with green tea extract, caffeine, and L-carnitine for weight management.",
    bestSeller: true,
    category: "Weight Management",
    price: 42.99,
  },
  {
    id: 11,
    name: "Magnesium Glycinate",
    description:
      "Highly bioavailable magnesium supplement for muscle function, sleep quality, and stress management.",
    bestSeller: false,
    category: "Health",
    price: 22.99,
  },
  {
    id: 12,
    name: "Collagen Peptides",
    description:
      "Hydrolyzed collagen peptides for skin health, joint support, and connective tissue maintenance.",
    bestSeller: true,
    category: "Health",
    price: 36.99,
  },
  {
    id: 13,
    name: "ZMA Complex",
    description:
      "Zinc, magnesium, and vitamin B6 combination to support recovery, sleep, and testosterone levels.",
    bestSeller: false,
    category: "Recovery",
    price: 18.99,
  },
  {
    id: 14,
    name: "Probiotics + Digestive Enzymes",
    description:
      "Advanced probiotic blend with digestive enzymes for optimal gut health and nutrient absorption.",
    bestSeller: false,
    category: "Health",
    price: 38.99,
  },
  {
    id: 15,
    name: "Plant-Based Protein",
    description:
      "Complete plant protein blend from pea, rice, and hemp. Ideal for vegans and those with dairy sensitivities.",
    bestSeller: false,
    category: "Protein",
    price: 41.99,
  },
];

// Helper functions for filtering products
export const getBestSellers = (): Product[] => {
  return products.filter((product) => product.bestSeller);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category);
};

export const getCategories = (): string[] => {
  const categories = products.map((product) => product.category);
  return [...new Set(categories)].sort();
};

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};
