"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { RecipientBanners } from "@/components/recipient-banners"
import { FilterSection } from "@/components/filter-section"
import { ProductGrid } from "@/components/product-grid"
import { CategoriesSection } from "@/components/categories-section"
import { Footer } from "@/components/footer"
import { flowers } from "@/data/flowers"

export default function FlowerShop() {
  const [activeFilters, setActiveFilters] = useState({
    color: [],
    type: [],
    occasion: [],
    price: null,
  })

  const addFilter = (category, value) => {
    setActiveFilters((prev) => {
      if (category === "price") {
        return { ...prev, price: value }
      }

      const newFilters = { ...prev }
      if (!newFilters[category].includes(value)) {
        newFilters[category] = [...newFilters[category], value]
      } else {
        newFilters[category] = newFilters[category].filter((item) => item !== value)
      }
      return newFilters
    })
  }

  const clearFilters = () => {
    setActiveFilters({
      color: [],
      type: [],
      occasion: [],
      price: null,
    })
  }

  const filteredFlowers = flowers.filter((flower) => {
    // If no filters are active in a category, don't filter by that category
    const colorMatch = activeFilters.color.length === 0 || activeFilters.color.includes(flower.color)
    const typeMatch = activeFilters.type.length === 0 || activeFilters.type.includes(flower.type)
    const occasionMatch = activeFilters.occasion.length === 0 || activeFilters.occasion.includes(flower.occasion)

    let priceMatch = true
    if (activeFilters.price === "under-40") {
      priceMatch = flower.price < 40
    } else if (activeFilters.price === "40-50") {
      priceMatch = flower.price >= 40 && flower.price <= 50
    } else if (activeFilters.price === "50-60") {
      priceMatch = flower.price > 50 && flower.price <= 60
    } else if (activeFilters.price === "over-60") {
      priceMatch = flower.price > 60
    }

    return colorMatch && typeMatch && occasionMatch && priceMatch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <RecipientBanners />
      <FilterSection activeFilters={activeFilters} addFilter={addFilter} clearFilters={clearFilters} />
      <ProductGrid products={filteredFlowers} clearFilters={clearFilters} />
      <CategoriesSection />
      <Footer />
    </div>
  )
}

