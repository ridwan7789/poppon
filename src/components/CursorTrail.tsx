import { useEffect, useRef, useCallback } from "react";

interface Trail {
  x: number;
  y: number;
  age: number;
  size: number;
}

const CursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trails = useRef<Trail[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add new trail point
    trails.current.push({
      x: mouse.current.x,
      y: mouse.current.y,
      age: 0,
      size: 3 + Math.random() * 4,
    });

    // Keep max 25 trail points
    if (trails.current.length > 25) trails.current.shift();

    // Draw and age
    for (let i = trails.current.length - 1; i >= 0; i--) {
      const t = trails.current[i];
      t.age += 0.025;
      if (t.age >= 1) {
        trails.current.splice(i, 1);
        continue;
      }
      const alpha = (1 - t.age) * 0.35;
      const scale = t.size * (1 - t.age * 0.5);

      // Soft pink circle
      ctx.beginPath();
      ctx.arc(t.x, t.y, scale, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(330, 100%, 42%, ${alpha})`;
      ctx.fill();

      // Tiny yellow sparkle offset
      ctx.beginPath();
      ctx.arc(t.x + scale * 0.8, t.y - scale * 0.8, scale * 0.3, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(48, 100%, 50%, ${alpha * 0.6})`;
      ctx.fill();
    }

    raf.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    raf.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      style={{ mixBlendMode: "multiply" }}
    />
  );
};

export default CursorTrail;
