import './style.css'
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <h1 class="text-2xl font-bold text-gray-900 mb-4">Giganttic</h1>
              <p>This is your client application running with:</p>
              <ul class="list-disc space-y-2 ml-4">
                <li>Vite for fast development</li>
                <li>Tailwind CSS for styling</li>
                <li>Biome for linting and formatting</li>
                <li>PocketBase for backend</li>
              </ul>
              <button id="test-api" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Test API Connection
              </button>
              <div id="api-result" class="mt-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`

document.querySelector('#test-api').addEventListener('click', async () => {
  try {
    const response = await fetch('/api/hello')
    const data = await response.json()
    document.querySelector('#api-result').innerHTML = `
      <div class="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
        API Response: ${data.message}
      </div>
    `
  } catch (error) {
    document.querySelector('#api-result').innerHTML = `
      <div class="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        Error: ${error.message}
      </div>
    `
  }
})
