"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Plus, Minus, Eye, Check, X } from 'lucide-react'

interface StackItem {
  value: number;
  id: number;
}

export default function StackPage() {
  const [stack, setStack] = useState<StackItem[]>([])
  const [inputValue, setInputValue] = useState('')
  const [nextId, setNextId] = useState(0)
  const [peekResult, setPeekResult] = useState<string | null>(null)
  const [isEmptyResult, setIsEmptyResult] = useState<boolean | null>(null)

  const handlePush = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value)) {
      setStack([...stack, { value, id: nextId }])
      setNextId(nextId + 1)
      setInputValue('')
      setPeekResult(null)
      setIsEmptyResult(null)
    }
  }

  const handlePop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1))
      setPeekResult(null)
      setIsEmptyResult(null)
    }
  }

  const handlePeek = () => {
    if (stack.length > 0) {
      setPeekResult(`Top element: ${stack[stack.length - 1].value}`)
    } else {
      setPeekResult("Stack is empty")
    }
    setIsEmptyResult(null)
  }

  const handleIsEmpty = () => {
    setIsEmptyResult(stack.length === 0)
    setPeekResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Stacks
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Explore the Last-In-First-Out (LIFO) data structure
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">What is a Stack?</CardTitle>
              <CardDescription className="text-indigo-100 text-lg">A Last-In-First-Out (LIFO) data structure</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element
                added to the stack will be the first one to be removed. Think of it like a stack of plates: you add plates to the top
                and remove them from the top.
              </p>
              <p className="text-gray-800 font-semibold mb-4 text-lg">
                Key operations of a stack:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 text-lg">
                <li>Push: Add an element to the top of the stack</li>
                <li>Pop: Remove the top element from the stack</li>
                <li>Peek or Top: View the top element without removing it</li>
                <li>IsEmpty: Check if the stack is empty</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">Stack Simulator</CardTitle>
              <CardDescription className="text-purple-100 text-lg">Push, pop, peek, and check if the stack is empty</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex space-x-4 mb-8">
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter a number"
                  className="flex-grow text-lg py-3"
                />
                <Button onClick={handlePush} className="bg-purple-500 hover:bg-purple-600 text-lg py-3 px-6">
                  <Plus className="mr-2 h-5 w-5" /> Push
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Button onClick={handlePop} className="bg-pink-500 hover:bg-pink-600 text-lg py-3 px-6">
                  <Minus className="mr-2 h-5 w-5" /> Pop
                </Button>
                <Button onClick={handlePeek} className="bg-indigo-500 hover:bg-indigo-600 text-lg py-3 px-6">
                  <Eye className="mr-2 h-5 w-5" /> Peek
                </Button>
                <Button onClick={handleIsEmpty} className="bg-green-500 hover:bg-green-600 text-lg py-3 px-6 col-span-2">
                  <Check className="mr-2 h-5 w-5" /> Is Empty?
                </Button>
              </div>
              {(peekResult || isEmptyResult !== null) && (
                <div className="bg-gray-100 p-4 rounded-lg mb-8">
                  {peekResult && <p className="text-lg font-semibold text-indigo-700">{peekResult}</p>}
                  {isEmptyResult !== null && (
                    <p className="text-lg font-semibold text-indigo-700">
                      Is Empty: {isEmptyResult ? <Check className="inline h-5 w-5 text-green-500" /> : <X className="inline h-5 w-5 text-red-500" />}
                    </p>
                  )}
                </div>
              )}
              <div className="bg-gray-100 p-6 rounded-lg min-h-[300px] flex flex-col-reverse items-center">
                {stack.length === 0 ? (
                  <p className="text-gray-500 italic text-lg">Stack is empty</p>
                ) : (
                  stack.map((item, index) => (
                    <div
                      key={item.id}
                      className={`bg-white border-2 border-purple-300 rounded-lg px-4 py-2 mb-2 w-full max-w-xs text-center ${
                        index === stack.length - 1 ? 'border-pink-500 border-4' : ''
                      }`}
                    >
                      <span className="text-lg font-semibold">{item.value}</span>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Link href="/data-structures" className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-xl font-semibold transition-colors duration-200">
            <ChevronLeft className="mr-2 h-6 w-6" />
            Back to Data Structures
          </Link>
        </div>
      </div>
    </div>
  )
}

