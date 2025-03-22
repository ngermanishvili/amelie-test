import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-purple-100 opacity-70"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-rose-300 to-purple-300 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-rose-300 to-purple-300 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          Front & Back Demo Example
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          აღმოაჩინეთ ჩვენი ხელით შექმნილი თაიგულები და კომპოზიციები, დამზადებული სიყვარულით და მიწოდებული ზრუნვით.
        </p>
        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-rose-200">
            კოლექციის ნახვა
          </Button>
        </div>
      </div>
    </section>
  )
}

