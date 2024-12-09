"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, Plus, Minus, ArrowRight } from 'lucide-react'

interface ListNode {
  value: number;
  next: ListNode | null;
}

export default function LinkedListPage() {
  const [list, setList] = useState<ListNode | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [removeValue, setRemoveValue] = useState('')
  const [insertPosition, setInsertPosition] = useState('end')
  const [customPosition, setCustomPosition] = useState('')

  useEffect(() => {
    console.log('Current list state:', list);
  }, [list]);

  const insertAtBeginning = (value: number) => {
    const newNode: ListNode = { value, next: list }
    setList(newNode)
  }

  const insertAtEnd = (value: number) => {
    const newNode: ListNode = { value, next: null }
    if (!list) {
      setList(newNode)
      return
    }
    
    let current: ListNode = list
    while (current.next !== null) {
      current = current.next
    }
    current.next = newNode
    setList({ ...list })
  }

  const insertAtPosition = (value: number, position: number) => {
    if (position <= 0 || !list) {
      insertAtBeginning(value)
      return
    }

    let current: ListNode | null = list
    let prev: ListNode | null = null
    let index = 0

    while (current !== null && index < position) {
      prev = current
      current = current.next
      index++
    }

    const newNode: ListNode = { value, next: current }
    if (prev) {
      prev.next = newNode
      setList({ ...list })
    } else {
      setList(newNode)
    }
  }

  const handleAddValue = () => {
    const value = parseInt(inputValue)
    if (!isNaN(value)) {
      switch (insertPosition) {
        case 'beginning':
          insertAtBeginning(value)
          break
        case 'end':
          insertAtEnd(value)
          break
        case 'custom':
          const pos = parseInt(customPosition)
          if (!isNaN(pos)) {
            insertAtPosition(value, pos)
          }
          break
      }
      setInputValue('')
      setCustomPosition('')
    }
  }

  const handleRemoveValue = () => {
    const valueToRemove = parseInt(removeValue)
    if (isNaN(valueToRemove)) {
      console.error('Invalid input for removal');
      return;
    }

    setList((prevList) => {
      if (!prevList) {
        console.log('List is empty, nothing to remove');
        return null;
      }

      if (prevList.value === valueToRemove) {
        console.log(`Removed node with value ${valueToRemove}`);
        return prevList.next;
      }

      let current: ListNode = prevList;
      while (current.next !== null) {
        if (current.next.value === valueToRemove) {
          console.log(`Removed node with value ${valueToRemove}`);
          current.next = current.next.next;
          return prevList;
        }
        current = current.next;
      }

      console.log(`Value ${valueToRemove} not found in the list`);
      return prevList;
    });
    setRemoveValue('');
  }

  const renderList = () => {
    const nodes = [];
    let current: ListNode | null = list;
    let index = 0;
    while (current !== null) {
      nodes.push(
        <div key={`node-${index}-${current.value}`} className="flex items-center mb-4 mr-4">
          <div className="bg-white border-2 border-purple-300 rounded-lg px-4 py-3 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-200">
            <span className="text-sm text-purple-600 font-semibold mb-2">Node {index}</span>
            <span className="text-xl font-bold text-gray-800">{current.value}</span>
          </div>
          {current.next && (
            <div className="flex items-center ml-2">
              <ArrowRight className="text-purple-500" />
            </div>
          )}
        </div>
      );
      current = current.next;
      index++;
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
            Linked Lists
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Explore the dynamic and flexible nature of linked data structures
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">What is a Linked List?</CardTitle>
              <CardDescription className="text-indigo-100 text-lg">A dynamic data structure with connected nodes</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                A linked list is a linear data structure where elements are stored in nodes. Each node contains a data field
                and a reference (or link) to the next node in the sequence. Unlike arrays, linked lists do not store elements
                in contiguous memory locations, allowing for efficient insertion and deletion at any position.
              </p>
              <p className="text-gray-800 font-semibold mb-4 text-lg">
                Key characteristics of linked lists:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 text-lg">
                <li>Dynamic size (can grow or shrink at runtime)</li>
                <li>Efficient insertion and deletion of elements at any position</li>
                <li>No random access (must traverse from the head)</li>
                <li>Requires extra memory for storing references</li>
                <li>Can be singly-linked (next only) or doubly-linked (next and previous)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">Linked List Simulator</CardTitle>
              <CardDescription className="text-purple-100 text-lg">Add and remove elements to see how a linked list works</CardDescription>
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
                      <SelectItem value="beginning">At beginning</SelectItem>
                      <SelectItem value="end">At end</SelectItem>
                      <SelectItem value="custom">Custom position</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {insertPosition === 'custom' && (
                  <Input
                    type="number"
                    value={customPosition}
                    onChange={(e) => setCustomPosition(e.target.value)}
                    placeholder="Enter position (0-based index)"
                    className="w-full text-lg py-3"
                  />
                )}
                <Button onClick={handleAddValue} className="bg-purple-500 hover:bg-purple-600 text-lg py-3 px-6">
                  <Plus className="mr-2 h-5 w-5" /> Add Node
                </Button>
                <div className="flex space-x-4">
                  <Input
                    type="number"
                    value={removeValue}
                    onChange={(e) => setRemoveValue(e.target.value)}
                    placeholder="Enter value to remove"
                    className="flex-grow text-lg py-3 bg-white"
                  />
                </div>
                <Button onClick={handleRemoveValue} className="bg-red-500 hover:bg-red-600 text-lg py-3 px-6">
                  <Minus className="mr-2 h-5 w-5" /> Remove Node
                </Button>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg">
                {list ? renderList() : (
                  <p className="text-gray-500 italic text-lg text-center">Add elements to visualize the linked list</p>
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

