import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              ამელი
            </h3>
            <p className="text-gray-300">ლამაზი ყვავილები ყველა შემთხვევისთვის, მიწოდებული ზრუნვითა და სიყვარულით.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-rose-300">სწრაფი ბმულები</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  მთავარი
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  მაღაზია
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  ჩვენს შესახებ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  კონტაქტი
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  ხშირად დასმული კითხვები
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-rose-300">მომხმარებელთა მომსახურება</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  მიწოდების ინფორმაცია
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  დაბრუნება და ანაზღაურება
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  წესები და პირობები
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  კონფიდენციალურობის პოლიტიკა
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-rose-300">სიახლეები</h4>
            <p className="text-gray-300 mb-4">გამოიწერეთ სიახლეები, მიიღეთ წვდომა ექსკლუზიურ შეთავაზებებზე და სხვა.</p>
            <div className="flex">
              <Input
                type="email"
                placeholder="შეიყვანეთ თქვენი ელ-ფოსტა"
                className="bg-white/10 backdrop-blur-sm border-gray-700 text-white rounded-l-md focus:ring-rose-500 focus:border-rose-500"
              />
              <Button className="bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 rounded-l-none">
                გამოწერა
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ამელი. ყველა უფლება დაცულია.</p>
        </div>
      </div>
    </footer>
  )
}

