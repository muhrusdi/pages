import { Banner } from "../components/banner"
import { Footer } from "../components/footer"
import type { NextPage } from "next"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <div className="absolute bottom-0 left-0 right-0 py-6">
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/profile">
                <div className="flex items-center space-x-3 hover:bg-slate-950 p-2 transition-all rounded-lg">
                  <div>
                    <div className="h-8 w-8 rounded-full bg-gray-500"></div>
                  </div>
                  <div className="text-gray-400">
                    <span>Muhammad Rusdi</span>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <footer>
                <Footer />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
