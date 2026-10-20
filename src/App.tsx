import "./App.css";

function App() {
  return (
    <div className="hero">

      {/* ტექსტის ნაწილი */}
      <div className="hero-content">
        <h1>
          შექმენი შენი
          <span> მომავალი დღესვე</span>
        </h1>

        <p>
          აღმოაჩინე ახალი შესაძლებლობები, განავითარე შენი უნარები
          და გადადგი პირველი ნაბიჯი წარმატებისკენ.
        </p>

        {/* ღილაკები */}
        <div className="hero-buttons">
          <button className="primary-btn">
            დაიწყე ახლა
          </button>

          <button className="secondary-btn">
            გაიგე მეტი
          </button>
        </div>
      </div>

      {/* სურათის ნაწილი */}
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
          alt="სამუშაო სივრცე ლეპტოპით"
        />
      </div>

    </div>
  );
}

export default App;
