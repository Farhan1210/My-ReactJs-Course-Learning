import Card from "./components/Card";

function App() {
  return (
    <div className="parent">
      <Card
        user="Farhan Khan"
        age={21}
        img="https://images.unsplash.com/photo-1756745678586-ffea7c66aeb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
      />
      <Card
        user="Zain ul Abideen"
        age={25}
        img="https://images.unsplash.com/photo-1756745679447-73e51d7afe4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074"
      />
    </div>
  );
}

export default App;
