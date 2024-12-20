"use client"

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, Plus, Minus, Search } from 'lucide-react'

interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const TreeNodeComponent: React.FC<{ node: TreeNode; x: number; y: number; level: number }> = ({ node, x, y, level }) => {
  const radius = 20;
  const horizontalSpacing = 80 / (level + 1);

  return (
    <g>
      <circle cx={x} cy={y} r={radius} fill="white" stroke="purple" strokeWidth="2" />
      <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="black">
        {node.value}
      </text>
      {node.left && (
        <>
          <line
            x1={x}
            y1={y + radius}
            x2={x - horizontalSpacing}
            y2={y + 80}
            stroke="purple"
            strokeWidth="2"
          />
          <TreeNodeComponent
            node={node.left}
            x={x - horizontalSpacing}
            y={y + 80}
            level={level + 1}
          />
        </>
      )}
      {node.right && (
        <>
          <line
            x1={x}
            y1={y + radius}
            x2={x + horizontalSpacing}
            y2={y + 80}
            stroke="purple"
            strokeWidth="2"
          />
          <TreeNodeComponent
            node={node.right}
            x={x + horizontalSpacing}
            y={y + 80}
            level={level + 1}
          />
        </>
      )}
    </g>
  );
};

export default function TreePage() {
  const [root, setRoot] = useState<TreeNode | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [treeHeight, setTreeHeight] = useState(400);

  const insert = useCallback((value: number, node: TreeNode | null): TreeNode => {
    if (node === null) {
      return { value, left: null, right: null };
    }

    if (value < node.value) {
      node.left = insert(value, node.left);
    } else if (value > node.value) {
      node.right = insert(value, node.right);
    }

    return node;
  }, []);

  const calculateTreeHeight = useCallback((node: TreeNode | null, level: number = 0): number => {
    if (node === null) return level;
    return Math.max(calculateTreeHeight(node.left, level + 1), calculateTreeHeight(node.right, level + 1));
  }, []);

  const handleInsert = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setRoot((prevRoot) => {
        const newRoot = insert(value, prevRoot);
        const height = calculateTreeHeight(newRoot);
        setTreeHeight(Math.max(400, height * 100)); // Adjust the multiplier as needed
        return newRoot;
      });
      setInputValue('');
      setSearchResult(null);
    }
  };

  const search = useCallback((value: number, node: TreeNode | null): boolean => {
    if (node === null) {
      return false;
    }

    if (value === node.value) {
      return true;
    }

    if (value < node.value) {
      return search(value, node.left);
    } else {
      return search(value, node.right);
    }
  }, []);

  const handleSearch = () => {
    const value = parseInt(searchValue);
    if (!isNaN(value)) {
      const found = search(value, root);
      setSearchResult(found ? `${value} found in the tree` : `${value} not found in the tree`);
      setSearchValue('');
    }
  };

  const findMin = (node: TreeNode): TreeNode => {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  };

  const remove = useCallback((value: number, node: TreeNode | null): TreeNode | null => {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = remove(value, node.left);
    } else if (value > node.value) {
      node.right = remove(value, node.right);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      const minRight = findMin(node.right);
      node.value = minRight.value;
      node.right = remove(minRight.value, node.right);
    }

    return node;
  }, []);

  const handleRemove = () => {
    const value = parseInt(inputValue);
    if (!isNaN(value)) {
      setRoot((prevRoot) => {
        const newRoot = remove(value, prevRoot);
        const height = calculateTreeHeight(newRoot);
        setTreeHeight(Math.max(400, height * 100)); // Adjust the multiplier as needed
        return newRoot;
      });
      setInputValue('');
      setSearchResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-6">
            Trees
          </h1>
          <p className="text-xl text-indigo-700 max-w-3xl mx-auto">
            Explore the hierarchical structure of tree data structures
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">What is a Tree?</CardTitle>
              <CardDescription className="text-indigo-100 text-lg">A hierarchical data structure with nodes and edges</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                A tree is a hierarchical data structure consisting of nodes connected by edges. Each node can have child nodes, forming a parent-child relationship. The topmost node is called the root, and nodes with no children are called leaves.
              </p>
              <p className="text-gray-800 font-semibold mb-4 text-lg">
                Key characteristics of trees:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2 text-lg">
                <li>Hierarchical structure</li>
                <li>Root node (top-level node)</li>
                <li>Parent-child relationships</li>
                <li>Leaf nodes (nodes with no children)</li>
                <li>Subtrees (trees formed by child nodes)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-xl p-8">
              <CardTitle className="text-3xl font-bold mb-4">Binary Search Tree Simulator</CardTitle>
              <CardDescription className="text-purple-100 text-lg">Insert, remove, and search values in a binary search tree</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="flex flex-col space-y-4 mb-8">
                <Input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter a number"
                  className="flex-grow text-lg py-3 bg-white"
                />
                <div className="flex space-x-4">
                  <Button onClick={handleInsert} className="bg-purple-500 hover:bg-purple-600 text-lg py-3 px-6 flex-1">
                    <Plus className="mr-2 h-5 w-5" /> Insert
                  </Button>
                  <Button onClick={handleRemove} className="bg-pink-500 hover:bg-pink-600 text-lg py-3 px-6 flex-1">
                    <Minus className="mr-2 h-5 w-5" /> Remove
                  </Button>
                </div>
                <div className="flex space-x-4">
                  <Input
                    type="number"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search value"
                    className="flex-grow text-lg py-3 bg-white"
                  />
                  <Button onClick={handleSearch} className="bg-indigo-500 hover:bg-indigo-600 text-lg py-3 px-6">
                    <Search className="mr-2 h-5 w-5" /> Search
                  </Button>
                </div>
              </div>
              {searchResult && (
                <div className="bg-gray-100 p-4 rounded-lg mb-8">
                  <p className="text-lg font-semibold text-indigo-700">{searchResult}</p>
                </div>
              )}
              <div className="bg-gray-100 p-6 rounded-lg">
                <svg width="100%" height={treeHeight} viewBox={`0 0 400 ${treeHeight}`}>
                  {root && <TreeNodeComponent node={root} x={200} y={40} level={0} />}
                </svg>
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

