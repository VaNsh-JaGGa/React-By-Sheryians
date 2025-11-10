import Card from "./components/card"

const App = () => {
  return (
    <div className="parent">
      <Card user = 'vansh' img = 'https://images.unsplash.com/photo-1759339433160-7a5828396250?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170'/>
      <Card user = 'jagga' img = 'https://images.unsplash.com/photo-1741732311355-808c468deb4e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
      <Card user = 'winner' img = 'https://plus.unsplash.com/premium_photo-1762456150958-d0aefc32ce03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
      <Card user = 'jattni' img = 'https://images.unsplash.com/photo-1761405378790-684eceaad81c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764' />
      <Card user = 'badmash' img = 'https://images.unsplash.com/photo-1762273309921-65bb52f1942c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
    </div>
  )
}

export default App
