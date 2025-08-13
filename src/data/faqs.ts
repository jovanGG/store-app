export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "shipping",
    question: "What are your shipping options and delivery times?",
    answer: "We offer free standard shipping on orders over $50, which typically takes 3-5 business days. Express shipping (1-2 business days) is available for $9.99. All orders are processed within 24 hours during business days."
  },
  {
    id: "quality",
    question: "How do you ensure product quality and safety?",
    answer: "All our supplements are manufactured in FDA-registered, GMP-certified facilities. We conduct third-party testing for purity, potency, and contaminants. Each product comes with a Certificate of Analysis available upon request."
  },
  {
    id: "dosage",
    question: "How do I know the right dosage for my supplements?",
    answer: "Each product includes detailed dosage instructions on the label. We recommend starting with the lowest suggested dose and consulting with a healthcare professional, especially if you have underlying health conditions or take medications."
  },
  {
    id: "returns",
    question: "What is your return and refund policy?",
    answer: "We offer a 30-day money-back guarantee on all unopened products. If you're not satisfied, contact our customer service team for a full refund. Opened products can be returned within 30 days for store credit."
  },
  {
    id: "subscription",
    question: "Do you offer subscription services?",
    answer: "Yes! You can subscribe to any product and save 15% on every order. You can modify, pause, or cancel your subscription anytime through your account dashboard. Subscribers also get early access to new products and exclusive deals."
  },
  {
    id: "stacking",
    question: "Can I combine multiple supplements safely?",
    answer: "Many supplements can be safely combined, but it's important to avoid exceeding daily recommended values for vitamins and minerals. Our product pages include stacking recommendations, and our customer service team can help create a personalized supplement plan."
  },
  {
    id: "vegan",
    question: "Do you have vegan and allergen-free options?",
    answer: "Yes! We clearly label all vegan products and provide detailed allergen information. We offer plant-based proteins, vegan vitamins, and supplements free from common allergens like gluten, dairy, and soy. Use our filters to find products that meet your dietary needs."
  },
  {
    id: "results",
    question: "How long before I see results from supplements?",
    answer: "Results vary by product and individual. Some supplements like pre-workouts show immediate effects, while others like vitamins and minerals may take 4-8 weeks of consistent use. Protein supplements typically show results within 2-4 weeks when combined with proper training and nutrition."
  }
];
