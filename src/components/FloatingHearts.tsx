
const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className="heart animate-float-hearts">
          ❤️
        </div>
      ))}
    </div>
  );
};

export { FloatingHearts };
