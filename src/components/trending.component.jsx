import React from 'react'

 const keywords = [
    { name: 'pizza', count: 452 },
    { name: 'breakfast', count: 97 },
    { name: 'coffee', count: 61 },
  ]
  const tags =[
    { name: 'japanesefood' },
    { name: 'design' },
    { name: 'projectmanagement' },
    { name: '16+' },
  ]

export default function TrendingKeywords() {
  const maxCount = Math.max(...keywords.map(k => k.count))

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-full">
      <h2 className="text-xl font-bold mb-1">Trending Keyword</h2>
      <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur</p>
      
      <div className="space-y-3 mb-6">
        {keywords.map((keyword) => (
          <div key={keyword.name} className="flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
              <div 
                className="bg-purple-400 h-2.5 rounded-full" 
                style={{ width: `${(keyword.count / maxCount) * 100}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-700 min-w-[100px]">
              #{keyword.name}
            </span>
            <span className="text-sm text-gray-500 ml-auto">
              {keyword.count} times
            </span>
          </div>
        ))}
      </div>
      
      <h3 className="font-semibold mb-2">Others tag</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag.name} 
            className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  )
}