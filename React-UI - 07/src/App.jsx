import Section1 from "./components/section1/section1"
import Section2 from "./components/section2/section2"

const App = () => {
  const users = [
    {
      img : 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'price customers , that have access to bank credit and are satisfied with the current product',
      tag : 'Satisfied'
    },
    {
      img : 'https://images.unsplash.com/photo-1762341120638-b5b9358ef571?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Price customers that have access to bank credit and are not satisfied with the current service',
      tag : 'Underserved'
    },
    {
      img : 'https://plus.unsplash.com/premium_photo-1661627039150-5d2555eb2254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Customers from near-prime and sub-prime segments with no access to bank account',
      tag : 'UnderBanked'
    }
  ]
  return (
    <div className="">
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}


export default App
