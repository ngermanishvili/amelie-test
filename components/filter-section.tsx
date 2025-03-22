"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FilterSectionProps {
  activeFilters: {
    color: string[]
    type: string[]
    occasion: string[]
    price: string | null
  }
  addFilter: (category: string, value: any) => void
  clearFilters: () => void
}

export function FilterSection({ activeFilters, addFilter, clearFilters }: FilterSectionProps) {
  // Georgian color names mapping
  const colorNames = {
    red: "წითელი",
    pink: "ვარდისფერი",
    white: "თეთრი",
    yellow: "ყვითელი",
    purple: "იისფერი",
    blue: "ლურჯი",
    mixed: "შერეული",
  }

  // Georgian flower type names mapping
  const typeNames = {
    roses: "ვარდები",
    lilies: "შროშანები",
    tulips: "ტიტები",
    sunflowers: "მზესუმზირები",
    orchids: "ორქიდეები",
    hydrangeas: "ჰორტენზიები",
    carnations: "მიხაკები",
    mixed: "შერეული კომპოზიციები",
  }

  // Georgian occasion names mapping
  const occasionNames = {
    birthday: "დაბადების დღე",
    anniversary: "წლისთავი",
    valentine: "სიყვარულის დღე",
    "mother's day": "დედის დღე",
    sympathy: "თანაგრძნობა",
    congratulations: "მილოცვა",
    "thank you": "მადლობა",
    spring: "გაზაფხულის ზეიმი",
  }

  // Georgian price range names mapping
  const priceNames = {
    "under-40": "40₾-მდე",
    "40-50": "40₾ - 50₾",
    "50-60": "50₾ - 60₾",
    "over-60": "60₾-ზე მეტი",
  }

  return (
    <section className="py-8 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg shadow-rose-100/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 md:gap-4">
              <span className="text-gray-700 font-medium">ფილტრი:</span>

              {/* Color Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 bg-white/90 backdrop-blur-sm hover:border-rose-300 transition-all duration-300"
                  >
                    ფერი
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl shadow-rose-100/10">
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "red")}
                      className={activeFilters.color.includes("red") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                      წითელი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "pink")}
                      className={activeFilters.color.includes("pink") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-pink-400 mr-2"></div>
                      ვარდისფერი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "white")}
                      className={activeFilters.color.includes("white") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-gray-100 border border-gray-300 mr-2"></div>
                      თეთრი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "yellow")}
                      className={activeFilters.color.includes("yellow") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-yellow-400 mr-2"></div>
                      ყვითელი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "purple")}
                      className={activeFilters.color.includes("purple") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-purple-500 mr-2"></div>
                      იისფერი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "blue")}
                      className={activeFilters.color.includes("blue") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div>
                      ლურჯი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("color", "mixed")}
                      className={activeFilters.color.includes("mixed") ? "bg-rose-50" : ""}
                    >
                      <div className="h-4 w-4 rounded-full bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500 mr-2"></div>
                      შერეული
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Flower Type Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 bg-white/90 backdrop-blur-sm hover:border-rose-300 transition-all duration-300"
                  >
                    ყვავილის ტიპი
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl shadow-rose-100/10">
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "roses")}
                      className={activeFilters.type.includes("roses") ? "bg-rose-50" : ""}
                    >
                      ვარდები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "lilies")}
                      className={activeFilters.type.includes("lilies") ? "bg-rose-50" : ""}
                    >
                      შროშანები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "tulips")}
                      className={activeFilters.type.includes("tulips") ? "bg-rose-50" : ""}
                    >
                      ტიტები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "sunflowers")}
                      className={activeFilters.type.includes("sunflowers") ? "bg-rose-50" : ""}
                    >
                      მზესუმზირები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "orchids")}
                      className={activeFilters.type.includes("orchids") ? "bg-rose-50" : ""}
                    >
                      ორქიდეები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "hydrangeas")}
                      className={activeFilters.type.includes("hydrangeas") ? "bg-rose-50" : ""}
                    >
                      ჰორტენზიები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "carnations")}
                      className={activeFilters.type.includes("carnations") ? "bg-rose-50" : ""}
                    >
                      მიხაკები
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("type", "mixed")}
                      className={activeFilters.type.includes("mixed") ? "bg-rose-50" : ""}
                    >
                      შერეული კომპოზიციები
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Occasion Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 bg-white/90 backdrop-blur-sm hover:border-rose-300 transition-all duration-300"
                  >
                    შემთხვევა
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl shadow-rose-100/10">
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "birthday")}
                      className={activeFilters.occasion.includes("birthday") ? "bg-rose-50" : ""}
                    >
                      დაბადების დღე
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "anniversary")}
                      className={activeFilters.occasion.includes("anniversary") ? "bg-rose-50" : ""}
                    >
                      წლისთავი
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "valentine")}
                      className={activeFilters.occasion.includes("valentine") ? "bg-rose-50" : ""}
                    >
                      სიყვარულის დღე
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "mother's day")}
                      className={activeFilters.occasion.includes("mother's day") ? "bg-rose-50" : ""}
                    >
                      დედის დღე
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "sympathy")}
                      className={activeFilters.occasion.includes("sympathy") ? "bg-rose-50" : ""}
                    >
                      თანაგრძნობა
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "congratulations")}
                      className={activeFilters.occasion.includes("congratulations") ? "bg-rose-50" : ""}
                    >
                      მილოცვა
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "thank you")}
                      className={activeFilters.occasion.includes("thank you") ? "bg-rose-50" : ""}
                    >
                      მადლობა
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("occasion", "spring")}
                      className={activeFilters.occasion.includes("spring") ? "bg-rose-50" : ""}
                    >
                      გაზაფხულის ზეიმი
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Price Filter */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-gray-200 bg-white/90 backdrop-blur-sm hover:border-rose-300 transition-all duration-300"
                  >
                    ფასი
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-white/90 backdrop-blur-md border border-gray-100 shadow-xl shadow-rose-100/10">
                  <DropdownMenuGroup>
                    <DropdownMenuItem
                      onClick={() => addFilter("price", "under-40")}
                      className={activeFilters.price === "under-40" ? "bg-rose-50" : ""}
                    >
                      40₾-მდე
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("price", "40-50")}
                      className={activeFilters.price === "40-50" ? "bg-rose-50" : ""}
                    >
                      40₾ - 50₾
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("price", "50-60")}
                      className={activeFilters.price === "50-60" ? "bg-rose-50" : ""}
                    >
                      50₾ - 60₾
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => addFilter("price", "over-60")}
                      className={activeFilters.price === "over-60" ? "bg-rose-50" : ""}
                    >
                      60₾-ზე მეტი
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Clear Filters */}
            {(activeFilters.color.length > 0 ||
              activeFilters.type.length > 0 ||
              activeFilters.occasion.length > 0 ||
              activeFilters.price !== null) && (
              <Button
                variant="ghost"
                onClick={clearFilters}
                className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 transition-all duration-300"
              >
                ფილტრის გასუფთავება
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {(activeFilters.color.length > 0 ||
            activeFilters.type.length > 0 ||
            activeFilters.occasion.length > 0 ||
            activeFilters.price !== null) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeFilters.color.map((color) => (
                <div
                  key={`color-${color}`}
                  className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm flex items-center shadow-sm"
                >
                  <div
                    className={`h-3 w-3 rounded-full mr-2 ${
                      color === "red"
                        ? "bg-red-500"
                        : color === "pink"
                          ? "bg-pink-400"
                          : color === "white"
                            ? "bg-gray-100 border border-gray-300"
                            : color === "yellow"
                              ? "bg-yellow-400"
                              : color === "purple"
                                ? "bg-purple-500"
                                : color === "blue"
                                  ? "bg-blue-500"
                                  : "bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-500"
                    }`}
                  ></div>
                  {colorNames[color]}
                  <button onClick={() => addFilter("color", color)} className="ml-2 text-rose-700 hover:text-rose-900">
                    &times;
                  </button>
                </div>
              ))}

              {activeFilters.type.map((type) => (
                <div
                  key={`type-${type}`}
                  className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm flex items-center shadow-sm"
                >
                  {typeNames[type]}
                  <button onClick={() => addFilter("type", type)} className="ml-2 text-rose-700 hover:text-rose-900">
                    &times;
                  </button>
                </div>
              ))}

              {activeFilters.occasion.map((occasion) => (
                <div
                  key={`occasion-${occasion}`}
                  className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm flex items-center shadow-sm"
                >
                  {occasionNames[occasion]}
                  <button
                    onClick={() => addFilter("occasion", occasion)}
                    className="ml-2 text-rose-700 hover:text-rose-900"
                  >
                    &times;
                  </button>
                </div>
              ))}

              {activeFilters.price && (
                <div className="bg-gradient-to-r from-rose-50 to-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm flex items-center shadow-sm">
                  {priceNames[activeFilters.price]}
                  <button onClick={() => addFilter("price", null)} className="ml-2 text-rose-700 hover:text-rose-900">
                    &times;
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

