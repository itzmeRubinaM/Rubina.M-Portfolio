import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Trophy, RotateCcw } from 'lucide-react';

type GameState = 'idle' | 'playing' | 'gameover';

interface FallingItem {
  id: number;
  x: number;
  y: number;
  vy: number;
  emoji: string;
  hazard: boolean;
  size: number;
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  hue: number;
  size: number;
}

const GOOD_EMOJIS = ['⚛️', '🎨', '⚡', '🧠', '✨', '🖌️'];
const HAZARD_EMOJI = '🐛';

export function SkillCatcher() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const itemsRef = useRef<FallingItem[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const playerXRef = useRef(0);
  const dimsRef = useRef({ w: 0, h: 0 });
  const rafRef = useRef<number | undefined>(undefined);
  const frameRef = useRef(0);
  const nextSpawnRef = useRef(0);
  const idCounter = useRef(0);
  const stateRef = useRef<GameState>('idle');
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const bestRef = useRef(0);

  const [gameState, setGameState] = useState<GameState>('idle');
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [lives, setLives] = useState(3);

  useEffect(() => { stateRef.current = gameState; }, [gameState]);

  const spawnSparks = (x: number, y: number, hue: number, count = 12) => {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
      const speed = 1 + Math.random() * 2.5;
      sparksRef.current.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 0,
        maxLife: 25 + Math.random() * 20,
        hue,
        size: 1.5 + Math.random() * 2,
      });
    }
  };

  const endGame = useCallback(() => {
    setGameState('gameover');
    bestRef.current = Math.max(bestRef.current, scoreRef.current);
    setBest(bestRef.current);
  }, []);

  const resetGame = useCallback(() => {
    itemsRef.current = [];
    sparksRef.current = [];
    frameRef.current = 0;
    nextSpawnRef.current = 0;
    scoreRef.current = 0;
    livesRef.current = 3;
    setScore(0);
    setLives(3);
    setGameState('playing');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dimsRef.current = { w: rect.width, h: rect.height };
      playerXRef.current = rect.width / 2;
    };
    resize();
    window.addEventListener('resize', resize);

    const tick = () => {
      const { w, h } = dimsRef.current;
      ctx.clearRect(0, 0, w, h);
      frameRef.current += 1;
      const playing = stateRef.current === 'playing';

      if (playing) {
        if (frameRef.current >= nextSpawnRef.current) {
          const hazard = Math.random() < 0.22;
          idCounter.current += 1;
          itemsRef.current.push({
            id: idCounter.current,
            x: 24 + Math.random() * (w - 48),
            y: -20,
            vy: 1.4 + Math.random() * 1.2 + Math.min(scoreRef.current / 150, 2.5),
            emoji: hazard ? HAZARD_EMOJI : GOOD_EMOJIS[Math.floor(Math.random() * GOOD_EMOJIS.length)],
            hazard,
            size: 22 + Math.random() * 6,
          });
          const spawnGap = Math.max(28, 55 - Math.floor(scoreRef.current / 8));
          nextSpawnRef.current = frameRef.current + spawnGap;
        }

        const playerY = h - 46;
        const playerW = 64;
        itemsRef.current = itemsRef.current.filter((item) => {
          item.y += item.vy;

          if (
            item.y + item.size / 2 >= playerY - 18 &&
            item.y - item.size / 2 <= playerY + 18 &&
            Math.abs(item.x - playerXRef.current) < playerW / 2 + item.size / 2
          ) {
            if (item.hazard) {
              spawnSparks(item.x, item.y, 0, 14);
              livesRef.current -= 1;
              setLives(livesRef.current);
              if (livesRef.current <= 0) endGame();
            } else {
              spawnSparks(item.x, item.y, 265 + Math.random() * 60, 10);
              scoreRef.current += 10;
              setScore(scoreRef.current);
            }
            return false;
          }
          return item.y <= h + 20;
        });
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      itemsRef.current.forEach((item) => {
        ctx.font = `${item.size}px sans-serif`;
        ctx.fillText(item.emoji, item.x, item.y);
      });

      sparksRef.current = sparksRef.current.filter((s) => {
        s.life += 1;
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.03;
        const alpha = Math.max(0, 1 - s.life / s.maxLife);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 85%, 65%, ${alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `hsla(${s.hue}, 85%, 65%, ${alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0;
        return s.life < s.maxLife;
      });

      if (playing || stateRef.current === 'gameover') {
        const px = playerXRef.current;
        const py = h - 46;
        ctx.beginPath();
        ctx.arc(px, py, 26, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(px, py, 4, px, py, 26);
        grad.addColorStop(0, 'hsla(265, 85%, 70%, 0.9)');
        grad.addColorStop(1, 'hsla(265, 85%, 55%, 0.3)');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = 'hsla(265, 85%, 80%, 0.6)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.font = 'bold 13px sans-serif';
        ctx.fillStyle = 'white';
        ctx.fillText('RM', px, py);
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [endGame]);

  const movePlayer = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    playerXRef.current = Math.max(30, Math.min(rect.width - 30, x));
  };

  const handleMouseMove = (e: React.MouseEvent) => movePlayer(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => {
    const t = e.touches[0];
    if (t) movePlayer(t.clientX);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (stateRef.current !== 'playing') return;
      const step = 28;
      const { w } = dimsRef.current;
      if (e.key === 'ArrowLeft') playerXRef.current = Math.max(30, playerXRef.current - step);
      if (e.key === 'ArrowRight') playerXRef.current = Math.min(w - 30, playerXRef.current + step);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-full min-h-[420px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden select-none touch-none"
    >
      <canvas ref={canvasRef} className="absolute inset-0" />

      {gameState === 'playing' && (
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="font-mono text-sm text-white/90 bg-black/30 px-3 py-1 rounded-full border border-white/10">
            {score} pts
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <Heart key={i} size={16} className={i < lives ? 'text-primary fill-primary' : 'text-white/20'} />
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {gameState === 'idle' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center px-6 bg-black/20"
          >
            <span className="text-3xl">⚛️ 🎨 ⚡</span>
            <h3 className="text-lg font-bold text-white">Catch the Skills</h3>
            <p className="text-sm text-muted-foreground max-w-[240px]">
              Move to catch the icons. Dodge the {HAZARD_EMOJI} bugs - 3 hits and it's game over.
            </p>
            <button
              onClick={resetGame}
              className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-shadow"
            >
              Play
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {gameState === 'gameover' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6 bg-black/50 backdrop-blur-sm"
          >
            <h3 className="text-lg font-bold text-white">Game Over</h3>
            <p className="text-3xl font-bold text-primary">{score}</p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Trophy size={14} className="text-accent" />
              Best: {best}
            </div>
            <button
              onClick={resetGame}
              className="mt-2 flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/30 transition-shadow"
            >
              <RotateCcw size={14} />
              Play Again
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}