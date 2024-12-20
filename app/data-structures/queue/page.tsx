"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Plus, Minus, ArrowRight, Eye, Check, X } from 'lucide-react'

interface QueueItem {
  value: number;
  id: number;
}

export default function QueuePage() {
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [inputValue, setInputValue] = useState('')
  const [nextId, setNextId] = useState(0)
  const [insertPosition, setInsertPosition] = useState('back')
  const [peekResult, setPeekResult] = useState<string | null>(null)
  const [isEmptyResult, setIsEmptyResult] = useState<boolean | null>(null)

  const handleEnqueue = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value)) {
      if (insertPosition === 'front') {
        setQueue([{ value, id: nextId }, ...queue])
      } else {
        setQueue([...queue, { value, id: nextId }])
      }
      setNextId(nextId + 1)
      setInputValue('')
      setPeekResult(null)
      setIsEmptyResult(null)
    }
  }

  const handleDequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1))
      setPeekResult(null)
      setIsEmptyResult(null)
    }
  }

  const handlePeek = () => {
    if (queue.length > 0) {
      setPeekResult(`Front element: ${queue[0].value}`)
    } else {
      setPeekResult("Queue is empty")
    }
    setIsEmptyResult(null)
  }

  const handleIsEmpty = () => {
    setIsEmptyResult(queue.length === 0)
    setPeekResult(null)
  }

  const renderQueue = () => {
    const nodes = [];
    for (let i = 0; i < queue.length; i++) {
      const item = queue[i];
      nodes.push(
        <div key={`node-${item.id}`} className="flex items-center mb-4">
          <div className={`bg-white border-2 ${i === 0 ? 'border-pink-500 border-4' : 'border-purple-300'} rounded-lg px-4 py-3 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-200`}>
            <span className="text-sm text-purple-600 font-semibold mb-2">{i === 0 ? 'Front' : i === queue.length - 1 ? 'Back' : `Node ${i}`}</span>
            <span className="text-xl font-bold text-gray-800">{item.value}</span>
          </div>
          {i < queue.length - 1 && (
            <div className="flex items-center mx-2">
              <ArrowRight className="text-purple-500" />
            </div>
          )}
        </div>
      );
    }
    return (
      <div className="flex flex-wrap">
        {nodes}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Queues
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Explore the First-In-First-Out (FIFO) data structure
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">What is a Queue?</CardTitle>
              <CardDescription className="text-indigo-100 text-lg">A First-In-First-Out (FIFO) data structure</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. This means that the first element
                added to the queue will be the first one to be removed. Think of it like a line of people waiting: the person who arrives first
                is served first.
              </p>
              <p className="text-gray-800 font-semibold mb-4 text-lg">
                Key operations of a queue:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 text-lg">
                <li>Enqueue: Add an element to the back of the queue</li>
                <li>Dequeue: Remove the front element from the queue</li>
                <li>Peek or Front: View the front element without removing it</li>
                <li>IsEmpty: Check if the queue is empty</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">Queue Simulator</CardTitle>
              <CardDescription className="text-purple-100 text-lg">Enqueue, dequeue, peek, and check if the queue is empty</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col space-y-4 mb-8">
                <div className="flex space-x-4">
                  <Input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter a number"
                    className="flex-grow text-lg py-3 bg-white"
                  />
                  <Select value={insertPosition} onValueChange={setInsertPosition}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Insert position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="back">At back</SelectItem>
                      <SelectItem value="front">At front</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={handleEnqueue} className="bg-purple-500 hover:bg-purple-600 text-lg py-3 px-6">
                  <Plus className="mr-2 h-5 w-5" /> Enqueue
                </Button>
                <Button onClick={handleDequeue} className="bg-pink-500 hover:bg-pink-600 text-lg py-3 px-6">
                  <Minus className="mr-2 h-5 w-5" /> Dequeue
                </Button>
                <div className="flex space-x-4">
                  <Button onClick={handlePeek} className="bg-indigo-500 hover:bg-indigo-600 text-lg py-3 px-6 flex-1">
                    <Eye className="mr-2 h-5 w-5" /> Peek
                  </Button>
                  <Button onClick={handleIsEmpty} className="bg-green-500 hover:bg-green-600 text-lg py-3 px-6 flex-1">
                    <Check className="mr-2 h-5 w-5" /> Is Empty?
                  </Button>
                </div>
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
              <div className="p-6 bg-gray-100 rounded-lg overflow-x-auto">
                {queue.length === 0 ? (
                  <p className="text-gray-500 italic text-lg text-center">Queue is empty</p>
                ) : (
                  renderQueue()
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

