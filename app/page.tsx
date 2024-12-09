import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ChevronRight, Code, BookOpen, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-indigo-900 mb-6">
            Data Structures & Algorithms Visualizer
          </h1>
          <p className="text-2xl text-indigo-700 max-w-3xl mx-auto">
            Explore, learn, and master DSA concepts through interactive visualizations
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <Code className="mr-4 w-8 h-8" /> Data Structures
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Visualize and understand fundamental data structures like arrays, linked lists, trees, and graphs.
              </p>
              <Link href="/data-structures">
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg py-3">
                  Discover Data Structures <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <Zap className="mr-4 w-8 h-8" /> Algorithms
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Step through popular algorithms for sorting, searching, and graph traversal with interactive animations.
              </p>
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg py-3">
                Discover Algorithms <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <BookOpen className="mr-4 w-8 h-8" /> Learn & Practice
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Access tutorials, quizzes, and coding challenges to reinforce your understanding of DSA concepts.
              </p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-3">
                Start Learning <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
