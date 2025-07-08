
const FloatingHearts = () => {
  const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘', '🥰', '😍', '💋'];
  
  return (
    <div className="floating-hearts">
      {Array.from({ length: 12 }, (_, i) => (
        <div 
          key={i} 
          className="heart animate-float-hearts"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {hearts[i % hearts.length]}
        </div>
      ))}
    </div>
  );
};

export { FloatingHearts };
