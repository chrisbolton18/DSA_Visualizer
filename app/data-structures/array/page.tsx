"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { ChevronLeft, Plus, X } from 'lucide-react'

export default function ArrayPage() {
  const [array, setArray] = useState<number[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddValue = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value)) {
      setArray([...array, value])
      setInputValue('')
    }
  }

  const handleRemoveValue = (index: number) => {
    setArray(array.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Arrays
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Explore the fundamental data structure that forms the backbone of many algorithms
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">What is an Array?</CardTitle>
              <CardDescription className="text-indigo-100 text-lg">A fundamental data structure in computer science</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                An array is a collection of elements, each identified by an index or a key. It is a linear data structure
                that stores elements in contiguous memory locations. Arrays are widely used due to their simplicity,
                the constant-time access to individual elements, and their use of numeric indices for element access.
              </p>
              <p className="text-gray-800 font-semibold mb-4 text-lg">
                Key characteristics of arrays:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 text-lg">
                <li>Fixed size (in most programming languages)</li>
                <li>Homogeneous elements (same data type)</li>
                <li>Random access (constant time complexity for access)</li>
                <li>Contiguous memory allocation</li>
                <li>Zero-based indexing (in most programming languages)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">Array Simulator</CardTitle>
              <CardDescription className="text-purple-100 text-lg">Add and remove elements to see how an array works</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex space-x-4 mb-8 mt-6">
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter a number"
                  className="flex-grow text-lg py-3"
                />
                <Button onClick={handleAddValue} className="bg-purple-500 hover:bg-purple-600 text-lg py-3 px-6">
                  <Plus className="mr-2 h-5 w-5" /> Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 p-6 bg-gray-100 rounded-lg min-h-[240px]">
                {array.map((value, index) => (
                  <div key={index} className="bg-white border-2 border-purple-300 rounded-lg px-4 py-3 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-200">
                    <span className="text-sm text-purple-600 font-semibold mb-2">Index: {index}</span>
                    <div className="flex items-center">
                      <span className="text-xl font-bold text-gray-800 mr-3">{value}</span>
                      <button
                        onClick={() => handleRemoveValue(index)}
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
                {array.length === 0 && (
                  <p className="text-gray-500 italic text-lg">Add elements to visualize the array</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Link href="/data-structures" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-xl font-semibold transition-colors duration-200">
            <ChevronLeft className="mr-2 h-6 h-6" />
            Back to Data Structures
          </Link>
        </div>
      </div>
    </div>
  )
}

