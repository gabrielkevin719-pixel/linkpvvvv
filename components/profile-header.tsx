"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function ProfileHeader() {
  return (
    <div className="flex flex-col items-center pt-8 pb-6">
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--primary)] p-0.5">
          <Image
            src="/images/prev-1-Cv7yWjFc.jpg"
            alt="Mc Mirella"
            width={96}
            height={96}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center gap-1.5 mb-1">
        <h1 className="text-xl font-bold text-white">Mc Mirella</h1>
        <CheckCircle2 className="w-5 h-5 text-[var(--primary)] fill-[var(--primary)]" />
      </div>
      <p className="text-[var(--muted-foreground)] text-sm">@mcmirella</p>
      <p className="text-[var(--muted-foreground)] text-sm mt-2 text-center max-w-xs">
        Conteúdo exclusivo para meus fãs
      </p>
    </div>
  );
}
