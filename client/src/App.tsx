import { useState } from 'react'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

function App() {
  const [apiResult, setApiResult] = useState<string>('')

  const testApiConnection = async () => {
    try {
      const data = await pb.send('/api/hello', {})
      setApiResult(`API Response: ${data.message}`)
    } catch (error) {
      setApiResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">React + Pocketbase <br/> Application Starter</h1>
                <p>This is your client application running with:</p>
                <ul className="list-disc space-y-2 ml-4">
                  <li>React for UI components</li>
                  <li>TypeScript for type safety</li>
                  <li>Vite for fast development</li>
                  <li>Tailwind CSS for styling</li>
                  <li>PocketBase for backend</li>
                </ul>
                <button 
                  onClick={testApiConnection}
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Test API Connection
                </button>
                {apiResult && (
                  <div className={`mt-4 p-4 border rounded ${apiResult.startsWith('Error') 
                      ? 'bg-red-100 border-red-400 text-red-700'
                      : 'bg-green-100 border-green-400 text-green-700'}`}>
                    {apiResult}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

