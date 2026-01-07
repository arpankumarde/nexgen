"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";

const NODE_COUNT = 24;
const SAFE_MARGIN = 6;

const NeuralBackground = ({
  mouseX,
  mouseY,
}: {
  mouseX: number;
  mouseY: number;
}) => {
  const [nodes, setNodes] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: NODE_COUNT }).map(() => ({
      x: SAFE_MARGIN + Math.random() * (100 - SAFE_MARGIN * 2),
      y: SAFE_MARGIN + Math.random() * (100 - SAFE_MARGIN * 2),
    }));
    setTimeout(() => {
      setNodes(generated);
    }, 100);
  }, []);

  if (nodes.length === 0) return null;

  return (
    <div className="absolute inset-0 z-0">
      {nodes.map((node, i) => {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const active = dist < 16;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
            animate={{
              scale: active ? 1.6 : 1,
              opacity: active ? 0.9 : 0.45,
            }}
            transition={{ duration: 0.25 }}
          >
            <Circle
              size={active ? 14 : 10}
              strokeWidth={1.5}
              className="
                text-emerald-400
                drop-shadow-[0_0_14px_rgba(52,211,153,0.45)]
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default NeuralBackground;
