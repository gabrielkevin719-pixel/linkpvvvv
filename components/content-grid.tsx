"use client";

import Image from "next/image";
import { Lock, Play } from "lucide-react";

const previewImages = [
  { src: "/images/prev-1-Cv7yWjFc.jpg", type: "image" },
  { src: "/images/prev-2-Cpv7t6c5.jpg", type: "image" },
  { src: "/images/prev-3-xFfygf3O.jpg", type: "image" },
];

const lockedContent = [
  { src: "/images/new-1-zNxUvgkc.jpg", type: "image" },
  { src: "/images/new-2-Cg6mABAH.jpg", type: "video" },
  { src: "/images/new-3-DIaBfBF5.jpg", type: "image" },
  { src: "/images/new-4-C1WhLKgo.jpg", type: "video" },
  { src: "/images/new-5-BWdPk1lN.jpg", type: "image" },
  { src: "/images/new-6-Uvgr99CF.jpg", type: "image" },
  { src: "/images/new-7-B6eGvSt-.jpg", type: "video" },
];

export function ContentGrid() {
  return (
    <div className="px-4 pb-8">
      <h2 className="text-foreground font-semibold mb-3 text-sm">Prévia</h2>
      <div className="grid grid-cols-3 gap-1 mb-6">
        {previewImages.map((item, index) => (
          <div
            key={index}
            className="aspect-square relative rounded-md overflow-hidden"
          >
            <Image
              src={item.src}
              alt={`Preview ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className="text-foreground font-semibold mb-3 text-sm flex items-center gap-2">
        <Lock className="w-4 h-4 text-primary" />
        Conteúdo Exclusivo
      </h2>
      <div className="grid grid-cols-3 gap-1">
        {lockedContent.map((item, index) => (
          <div
            key={index}
            className="aspect-square relative rounded-md overflow-hidden group cursor-pointer"
          >
            <Image
              src={item.src}
              alt={`Locked content ${index + 1}`}
              fill
              className="object-cover blur-lg brightness-50"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              {item.type === "video" ? (
                <Play className="w-8 h-8 text-white/80" />
              ) : (
                <Lock className="w-6 h-6 text-white/80" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
