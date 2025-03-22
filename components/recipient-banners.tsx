import Image from "next/image"
import { Button } from "@/components/ui/button"

export function RecipientBanners() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
          თქვენი განსაკუთრებული ადამიანებისთვის
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* For Lovers Banner */}
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
              alt="შეყვარებულებისთვის"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="text-white text-2xl font-bold mb-2">შეყვარებულებისთვის</h3>
              <p className="text-rose-100 mb-4">გამოხატეთ თქვენი ღრმა გრძნობები ჩვენი რომანტიკული კომპოზიციებით.</p>
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border border-white/50 rounded-full">
                ნახვა
              </Button>
            </div>
          </div>

          {/* For Mom Banner */}
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
              alt="დედისთვის"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="text-white text-2xl font-bold mb-2">დედისთვის</h3>
              <p className="text-purple-100 mb-4">გამოხატეთ თქვენი მადლიერება ჩვენი გულდასმით შექმნილი თაიგულებით.</p>
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border border-white/50 rounded-full">
                ნახვა
              </Button>
            </div>
          </div>

          {/* For Sister Banner */}
          <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
              alt="დისთვის"
              width={400}
              height={300}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="text-white text-2xl font-bold mb-2">დისთვის</h3>
              <p className="text-pink-100 mb-4">აღნიშნეთ თქვენი განსაკუთრებული კავშირი ჩვენი ფერადი კოლექციებით.</p>
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border border-white/50 rounded-full">
                ნახვა
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* For Friends Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
              alt="მეგობრებისთვის"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="text-white text-2xl font-bold mb-2">მეგობრებისთვის</h3>
              <p className="text-blue-100 mb-4">გაახალისეთ მათი დღე ჩვენი მხიარული კომპოზიციებით.</p>
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border border-white/50 rounded-full">
                ნახვა
              </Button>
            </div>
          </div>

          {/* For Celebrations Banner */}
          <div className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="https://amelie.ge/wp-content/uploads/2025/03/2X8A7086-665x1024.jpg"
              alt="ზეიმებისთვის"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-2">
              <h3 className="text-white text-2xl font-bold mb-2">ზეიმებისთვის</h3>
              <p className="text-amber-100 mb-4">
                აღნიშნეთ განსაკუთრებული შემთხვევები ჩვენი სადღესასწაულო კოლექციებით.
              </p>
              <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white border border-white/50 rounded-full">
                ნახვა
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

