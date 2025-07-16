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
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="hero bg-base-200 rounded-box p-10">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">React + Pocketbase</h1>
                <p className="py-6">This is your client application running with:</p>
                <ul className="list-disc space-y-2 ml-4 text-left">
                  <li>PocketBase for backend</li>
                  <li>React for clientside SPA</li>
                  <li>TypeScript for type safety</li>
                  <li>Tailwind CSS for styling</li>
                  <li>DaisyUI for beautiful components</li>
                  <li>Vite for fast development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-actions justify-center">
            <button
              onClick={testApiConnection}
              className="btn btn-primary"
            >
              Test API Connection
            </button>
          </div>
          {apiResult && (
            <div className={`mt-4 p-4 rounded-box ${
              apiResult.startsWith('Error')
                ? 'bg-error text-error-content'
                : 'bg-success text-success-content'
            }`}>
              {apiResult}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

