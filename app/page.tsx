"use client"

import { CategoriesSection } from "@/components/categories-section"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { RecipientBanners } from "@/components/recipient-banners"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FilterSection } from "@/components/filter-section"
import { useState, useCallback } from "react"

// Sample product data
const sampleProducts = [
    {
        id: 1,
        name: "ვარდების თაიგული",
        price: 59.99,
        image: "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        color: "pink",
        type: "roses",
        occasion: "anniversary"
    },
    {
        id: 2,
        name: "შროშანების თაიგული",
        price: 49.99,
        image: "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        color: "white",
        type: "lilies",
        occasion: "wedding"
    },
    {
        id: 3,
        name: "ტიტების თაიგული",
        price: 39.99,
        image: "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        color: "yellow",
        type: "tulips",
        occasion: "birthday"
    },
    {
        id: 4,
        name: "მზესუმზირების თაიგული",
        price: 45.99,
        image: "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        color: "yellow",
        type: "sunflowers",
        occasion: "congratulations"
    },
]

export default function Home() {
    // Add state for filtered products
    const [products, setProducts] = useState(sampleProducts);

    // Add state for active filters
    const [activeFilters, setActiveFilters] = useState({
        color: [] as string[],
        type: [] as string[],
        occasion: [] as string[],
        price: null as string | null
    });

    // Function to add a filter
    const addFilter = useCallback((category: string, value: any) => {
        setActiveFilters(prev => {
            const newFilters = { ...prev };

            if (category === 'price') {
                // Price is single-select
                newFilters.price = value;
            } else {
                // Other filters are multi-select (toggle)
                const categoryArray = newFilters[category as keyof typeof newFilters] as string[];
                if (Array.isArray(categoryArray)) {
                    if (categoryArray.includes(value)) {
                        // Remove the value if it already exists (toggle off)
                        const index = categoryArray.indexOf(value);
                        const newArray = [...categoryArray];
                        newArray.splice(index, 1);
                        (newFilters[category as keyof typeof newFilters] as string[]) = newArray;
                    } else {
                        // Add the value if it doesn't exist
                        (newFilters[category as keyof typeof newFilters] as string[]) = [...categoryArray, value];
                    }
                }
            }

            // Apply filters to products
            applyFilters(newFilters);

            return newFilters;
        });
    }, []);

    // Function to clear all filters
    const clearFilters = useCallback(() => {
        setActiveFilters({
            color: [],
            type: [],
            occasion: [],
            price: null
        });
        setProducts(sampleProducts);
    }, []);

    // Function to apply filters to products
    const applyFilters = (filters: typeof activeFilters) => {
        let filteredProducts = [...sampleProducts];

        // Apply color filters
        if (filters.color.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                filters.color.includes(product.color)
            );
        }

        // Apply type filters
        if (filters.type.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                filters.type.includes(product.type)
            );
        }

        // Apply occasion filters
        if (filters.occasion.length > 0) {
            filteredProducts = filteredProducts.filter(product =>
                filters.occasion.includes(product.occasion)
            );
        }

        // Apply price filter
        if (filters.price) {
            switch (filters.price) {
                case 'under-40':
                    filteredProducts = filteredProducts.filter(product => product.price < 40);
                    break;
                case '40-50':
                    filteredProducts = filteredProducts.filter(product => product.price >= 40 && product.price <= 50);
                    break;
                case '50-60':
                    filteredProducts = filteredProducts.filter(product => product.price >= 50 && product.price <= 60);
                    break;
                case 'over-60':
                    filteredProducts = filteredProducts.filter(product => product.price > 60);
                    break;
            }
        }

        setProducts(filteredProducts);
    };

    return (
        <main>
            <Header />
            <HeroSection />
            <CategoriesSection />
            <FilterSection
                activeFilters={activeFilters}
                addFilter={addFilter}
                clearFilters={clearFilters}
            />
            <ProductGrid products={products} clearFilters={clearFilters} />
            <RecipientBanners />
            <Footer />
        </main>
    )
} 