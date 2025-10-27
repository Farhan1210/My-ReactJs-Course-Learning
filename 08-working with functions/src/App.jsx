function App() {
  const scrolling = function(e) {
    console.log("scrolling", e);
  }
  return (
    <div>
      {/* <button onClick={function(e) {
        console.log('Clicked.');
      }} className="btn px-8 py-2 rounded-full text-white m-16 bg-red-600">Click</button> */}
      <div onWheel={function(e) {
        scrolling(e.deltaY);
      }}>
        <div className="Page 1 h-screen"></div>
        <div className="Page 2 h-screen"></div>
        <div className="Page 3 h-screen"></div>
      </div>
    </div>
  )
}

export default App
