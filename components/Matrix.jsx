import { useEffect, useRef } from "react";

const Matrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters =
      "アァイィウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(Math.random() * canvas.height);

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px monospace";

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        drops[i] =
          y * fontSize > canvas.height || Math.random() > 0.95 ? 0 : y + 1;
      });
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Disable inspect element (keyboard & right-click)
    const blockKeys = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["I", "C", "J"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
      ) {
        e.preventDefault();
      }
    };
    const blockContextMenu = (e) => e.preventDefault();

    document.addEventListener("keydown", blockKeys);
    document.addEventListener("contextmenu", blockContextMenu);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("contextmenu", blockContextMenu);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#00ff00",
          fontFamily: "monospace",
          textAlign: "center",
          fontSize: "2.5rem",
          zIndex: 1,
          textShadow: "0 0 5px #0f0, 0 0 10px #0f0, 0 0 20px #0f0",
        }}
      >
        An IT Professional never dies,
        <br />
        he just goes offline.
      </div>
    </div>
  );
};

export default Matrix;
