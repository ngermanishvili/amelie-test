import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CategoriesSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">კატეგორიების მიხედვით</h2>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-4 md:grid-cols-7 mb-8">
            <TabsTrigger value="all">ყველა</TabsTrigger>
            <TabsTrigger value="roses">ვარდები</TabsTrigger>
            <TabsTrigger value="lilies">შროშანები</TabsTrigger>
            <TabsTrigger value="tulips">ტიტები</TabsTrigger>
            <TabsTrigger value="sunflowers">მზესუმზირები</TabsTrigger>
            <TabsTrigger value="orchids">ორქიდეები</TabsTrigger>
            <TabsTrigger value="mixed">შერეული</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
                alt="ვარდები"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">ვარდები</h3>
              </div>
              <div className="absolute inset-0 bg-rose-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="bg-white text-rose-600 hover:bg-rose-50">ნახვა</Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
                alt="შროშანები"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">შროშანები</h3>
              </div>
              <div className="absolute inset-0 bg-rose-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="bg-white text-rose-600 hover:bg-rose-50">ნახვა</Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
                alt="ტიტები"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">ტიტები</h3>
              </div>
              <div className="absolute inset-0 bg-rose-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="bg-white text-rose-600 hover:bg-rose-50">ნახვა</Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <Image
                src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
                alt="შერეული კომპოზიციები"
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white font-bold text-xl">შერეული</h3>
              </div>
              <div className="absolute inset-0 bg-rose-600 bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="bg-white text-rose-600 hover:bg-rose-50">ნახვა</Button>
              </div>
            </div>
          </TabsContent>

          {/* Other tab contents would be similar but filtered by type */}
          <TabsContent value="roses">{/* Roses content */}</TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

