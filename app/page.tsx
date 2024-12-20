import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, ChevronLeft } from 'lucide-react'
import dynamic from 'next/dynamic'

const List = dynamic(() => import('lucide-react').then((mod) => mod.List))
const LinkIcon = dynamic(() => import('lucide-react').then((mod) => mod.Link))
const Layers = dynamic(() => import('lucide-react').then((mod) => mod.Layers))
const AlignLeft = dynamic(() => import('lucide-react').then((mod) => mod.AlignLeft))
const GitBranch = dynamic(() => import('lucide-react').then((mod) => mod.GitBranch))

export default function DataStructuresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Data Structures
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Explore fundamental data structures that form the backbone of computer science and algorithms
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <List className="mr-4 w-8 h-8" /> Arrays
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Explore the fundamental structure of contiguous elements, perfect for fast access and simple operations.
              </p>
              <Link href="/data-structures/array">
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white text-lg py-3">
                  Explore Arrays <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <LinkIcon className="mr-4 w-8 h-8" /> Linked Lists
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Discover the power of linked elements, ideal for dynamic data and efficient insertions and deletions.
              </p>
              <Link href="/data-structures/linked-list">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white text-lg py-3">
                  Explore Linked Lists <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <Layers className="mr-4 w-8 h-8" /> Stacks
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Learn about Last-In-First-Out (LIFO) structures, crucial for managing function calls and undo operations.
              </p>
              <Link href="/data-structures/stack">
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-3">
                  Explore Stacks <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <AlignLeft className="mr-4 w-8 h-8" /> Queues
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Understand First-In-First-Out (FIFO) structures, essential for managing tasks and scheduling processes.
              </p>
              <Link href="/data-structures/queue">
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-3">
                  Explore Queues <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
            <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-xl p-8">
              <CardTitle className="flex items-center text-3xl font-bold">
                <GitBranch className="mr-4 w-8 h-8" /> Trees
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-600 mb-6 text-lg">
                Dive into hierarchical structures, perfect for representing relationships and optimizing searches.
              </p>
              <Link href="/data-structures/trees">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-3">
                  Explore Trees <ChevronRight className="ml-2 w-6 w-6" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Link href="/" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-xl font-semibold transition-colors duration-200">
            <ChevronLeft className="mr-2 h-6 w-6" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

