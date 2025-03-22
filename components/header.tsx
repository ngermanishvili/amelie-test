import Link from "next/link"
import { Heart, Search, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="backdrop-blur-md bg-white/70 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="#"
          className="text-3xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent"
        >
          Amelie
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-gray-700 hover:text-rose-600 transition-colors text-sm uppercase tracking-wide"
          >
            მთავარი
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-rose-600 transition-colors text-sm uppercase tracking-wide"
          >
            მაღაზია
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-rose-600 transition-colors text-sm uppercase tracking-wide"
          >
            ღონისძიებები
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-rose-600 transition-colors text-sm uppercase tracking-wide"
          >
            ჩვენს შესახებ
          </Link>
          <Link
            href="#"
            className="text-gray-700 hover:text-rose-600 transition-colors text-sm uppercase tracking-wide"
          >
            კონტაქტი
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <Input
              type="search"
              placeholder="ყვავილების ძიება..."
              className="w-64 pl-10 pr-4 rounded-full border-gray-200 focus:border-rose-500 focus:ring focus:ring-rose-200 bg-white/80 backdrop-blur-sm"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
          <Button variant="ghost" size="icon" className="relative group">
            <Heart className="h-5 w-5 text-gray-700 group-hover:text-rose-500 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="relative group">
            <ShoppingCart className="h-5 w-5 text-gray-700 group-hover:text-rose-500 transition-colors" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-rose-500 to-purple-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              3
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}

