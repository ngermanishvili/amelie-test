"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  price: number
  image: string
  color: string
  type: string
  occasion: string
}

interface ProductGridProps {
  products: Product[]
  clearFilters: () => void
}

export function ProductGrid({ products, clearFilters }: ProductGridProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          {products.length > 0
            ? `${products.length} ${products.length === 1 ? "პროდუქტი" : "პროდუქტი"} ნაპოვნია`
            : "პროდუქტი ვერ მოიძებნა"}
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-200 to-purple-200 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                <Link href={`/product/${product.id}`} className="block">
                  <div className="relative overflow-hidden rounded-xl mb-3 bg-white shadow-lg shadow-gray-100/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-rose-100/30">
                    <Image
                      src={product.image || "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="w-full p-4 backdrop-blur-sm bg-white/10">
                        <Button className="w-full bg-white text-rose-600 hover:bg-rose-50 rounded-full">
                          სწრაფი ნახვა
                        </Button>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="h-4 w-4 text-rose-600" />
                    </Button>
                  </div>
                </Link>
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-medium text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent font-semibold mt-1">
                    {product.price.toFixed(2)}₾
                  </p>
                </Link>
                <Button className="w-full mt-3 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-md shadow-rose-100/30 hover:shadow-lg hover:shadow-rose-200/40 transition-all duration-300">
                  კალათში დამატება
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <p className="text-gray-500 mb-4">არჩეული ფილტრებით პროდუქტი ვერ მოიძებნა.</p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white"
            >
              ყველა ფილტრის გასუფთავება
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

