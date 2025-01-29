import './App.css'

function App() {

  return (
    <>
    <form>
          <label className="block mb-2">Username</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="text" placeholder="Enter username" />
          <label className="block mb-2">Email</label>
          <input className="border border-gray-300 p-2 rounded w-full mb-4" type="email" placeholder="Enter email" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add User</button>
    </form>
    </>
  )
}

export default App
