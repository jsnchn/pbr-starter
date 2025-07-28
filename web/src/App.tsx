import { useState, useEffect } from 'react'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

type Toast = {
  message: string
  type: 'success' | 'error'
}

function App() {
  const [toast, setToast] = useState<Toast | null>(null)

  const testApiConnection = async () => {
    try {
      const data = await pb.send('/api/hello', {})
      setToast({ message: `API Response: ${data.message}`, type: 'success' })
    } catch (error) {
      setToast({
        message: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <main className="flex-1 bg-base-200 flex items-center justify-center">
        <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="hero bg-base-200 rounded-box p-10">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">React + Pocketbase</h1>
                  <p className="py-6">
                    This is your client application running with:
                  </p>
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
            <div className="divider" />
            <div className="card-actions justify-end">
              <button
                type="button"
                onClick={testApiConnection}
                className="btn btn-primary"
              >
                Test API Connection
              </button>
            </div>
          </div>
        </div>
        {toast && (
          <div className="toast toast-end">
            <div
              className={`alert ${
                toast.type === 'success' ? 'alert-success' : 'alert-error'
              }`}
            >
              <div>
                <span>{toast.message}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
