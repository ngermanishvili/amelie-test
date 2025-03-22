"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Heart, Minus, Plus, Share2, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define types for our product data
interface ProductSpecification {
  name: string;
  value: string;
}

interface ProductColor {
  name: string;
  value: string;
  hex: string;
}

interface ProductSize {
  name: string;
  value: string;
  stems: number;
  price: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  description: string;
  longDescription: string;
  specifications: ProductSpecification[];
  image: string;
  gallery: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  occasions: string[];
  type: string;
  inStock: boolean;
  deliveryInfo: string;
}

// Mock data for a single product with multiple color options
const getProductById = (id: string): Product | null => {
  const products: Record<string, Product> = {
    "1": {
      id: "1",
      name: "Pink Roses Bouquet",
      price: 49.99,
      rating: 4.8,
      reviews: 124,
      description:
        "A stunning arrangement of premium pink roses, carefully selected and beautifully arranged to create a timeless expression of love and appreciation. Each bouquet is hand-crafted by our expert florists using only the freshest blooms.",
      longDescription:
        "Our Pink Roses Bouquet features 12 premium long-stemmed roses, expertly arranged with eucalyptus and baby's breath for a classic, elegant look. The roses are sourced from sustainable farms and are guaranteed to stay fresh for at least 7 days. Each bouquet comes with a complimentary sachet of flower food and care instructions to ensure your roses look beautiful for as long as possible.",
      specifications: [
        { name: "Stem Length", value: "50-60cm" },
        { name: "Bloom Size", value: "Large" },
        { name: "Vase Life", value: "7-10 days" },
        { name: "Arrangement", value: "Hand-tied" },
        { name: "Includes", value: "Care instructions, flower food" },
      ],
      image: "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
      gallery: [
        "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
        "https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg",
      ],
      colors: [
        { name: "Pink", value: "pink", hex: "#f472b6" },
        { name: "Red", value: "red", hex: "#ef4444" },
        { name: "White", value: "white", hex: "#f9fafb" },
        { name: "Yellow", value: "yellow", hex: "#facc15" },
        { name: "Purple", value: "purple", hex: "#a855f7" },
      ],
      sizes: [
        { name: "Small", value: "small", stems: 6, price: 34.99 },
        { name: "Medium", value: "medium", stems: 12, price: 49.99 },
        { name: "Large", value: "large", stems: 24, price: 79.99 },
        { name: "Deluxe", value: "deluxe", stems: 36, price: 109.99 },
      ],
      occasions: ["anniversary", "birthday", "romance", "thank you"],
      type: "roses",
      inStock: true,
      deliveryInfo: "Order by 2pm for same-day delivery",
    },
  }

  return products[id] || null
}

export default function ProductDetail({ id }: { id: string }) {
  const product = getProductById(id)
  const [selectedColor, setSelectedColor] = useState<ProductColor | undefined>(product?.colors[0])
  const [selectedSize, setSelectedSize] = useState<ProductSize | undefined>(product?.sizes[1]) // Medium by default
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState<string | undefined>(product?.image)
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect(() => {
    // Reset active image when product changes
    if (product) {
      setActiveImage(product.image)
      setSelectedColor(product.colors[0])
      setSelectedSize(product.sizes[1])
      setQuantity(1)
    }
  }, [product])

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Product not found</h1>
        <Link href="/" className="text-rose-600 hover:text-rose-700 mt-4 inline-block">
          Return to home
        </Link>
      </div>
    )
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist)
  }

  const addToCart = () => {
    // In a real app, this would add the product to the cart
    alert(`Added ${quantity} ${selectedSize?.name} ${selectedColor?.name} ${product.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-rose-600 transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/" className="hover:text-rose-600 transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link href="/" className="hover:text-rose-600 transition-colors">
              {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Back button (mobile) */}
      <div className="container mx-auto px-4 py-4 md:hidden">
        <Link href="/" className="inline-flex items-center text-gray-700 hover:text-rose-600 transition-colors">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to shop
        </Link>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 border border-gray-200">
              <Image src={activeImage || product.image} alt={product.name} fill className="object-cover" />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.gallery.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 ${activeImage === image ? "border-rose-500" : "border-gray-200"
                    }`}
                  onClick={() => setActiveImage(image)}
                  aria-label={`View product image ${index + 1}`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-sm text-green-600 font-medium">In Stock</span>
              </div>
            </div>

            <div className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              ${selectedSize ? selectedSize.price.toFixed(2) : product.price.toFixed(2)}
            </div>

            <p className="text-gray-700">{product.description}</p>

            {/* Color Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color.value}
                    className={`relative h-10 w-10 rounded-full border-2 ${selectedColor?.value === color.value ? "border-rose-500 ring-2 ring-rose-200" : "border-gray-200"
                      }`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select ${color.name} color`}
                  >
                    {selectedColor?.value === color.value && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="h-2 w-2 rounded-full bg-white shadow-sm"></span>
                      </span>
                    )}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Selected: <span className="font-medium">{selectedColor?.name}</span>
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.value}
                    className={`py-2 px-3 rounded-md border text-sm font-medium ${selectedSize?.value === size.value
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size.name}
                    <span className="block text-xs text-gray-500">{size.stems} stems</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center h-12 rounded-md border border-gray-300">
                <button
                  className="flex-1 flex items-center justify-center h-full px-4 text-gray-600 hover:text-rose-600 transition-colors"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 h-full flex items-center justify-center text-gray-900 font-medium">
                  {quantity}
                </span>
                <button
                  className="flex-1 flex items-center justify-center h-full px-4 text-gray-600 hover:text-rose-600 transition-colors"
                  onClick={increaseQuantity}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <Button
                className="flex-1 h-12 bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white shadow-md shadow-rose-100/30 hover:shadow-lg hover:shadow-rose-200/40 transition-all duration-300"
                onClick={addToCart}
              >
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`h-12 w-12 ${isInWishlist ? "text-rose-600 border-rose-200 bg-rose-50" : "text-gray-700 border-gray-300"
                  }`}
                onClick={toggleWishlist}
              >
                <Heart className={`h-5 w-5 ${isInWishlist ? "fill-rose-600" : ""}`} />
              </Button>

              <Button variant="outline" size="icon" className="h-12 w-12 text-gray-700 border-gray-300">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-sm text-gray-600 border-t border-gray-100 pt-4">
              <p className="flex items-center">
                <span className="font-medium text-green-600 mr-2">✓</span>
                {product.deliveryInfo}
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid grid-cols-3 max-w-md mx-auto mb-8">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Description</h3>
              <p className="text-gray-700 leading-relaxed">{product.longDescription}</p>
            </TabsContent>

            <TabsContent value="specifications" className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex border-b border-gray-100 py-2">
                    <span className="font-medium text-gray-900 w-1/3">{spec.name}</span>
                    <span className="text-gray-700 w-2/3">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Customer Reviews</h3>
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="ml-3 text-gray-900 font-medium">{product.rating} out of 5</span>
                <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
              </div>

              <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white">
                Write a Review
              </Button>

              {/* Sample reviews would go here */}
              <div className="mt-8 space-y-6">
                <p className="text-gray-500 italic text-center">Reviews will appear here</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Sample related products */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative">
                <div className="relative overflow-hidden rounded-xl mb-3 bg-white shadow-lg shadow-gray-100/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-rose-100/30">
                  <Image
                    src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
                    alt="Related Product"
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-white/70 backdrop-blur-sm hover:bg-white rounded-full h-8 w-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-4 w-4 text-rose-600" />
                  </Button>
                </div>
                <h3 className="font-medium text-gray-800 group-hover:text-rose-600 transition-colors duration-300">
                  Related Flower Bouquet
                </h3>
                <p className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent font-semibold mt-1">
                  $45.99
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

