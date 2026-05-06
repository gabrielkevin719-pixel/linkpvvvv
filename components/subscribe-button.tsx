"use client";

import { Crown } from "lucide-react";

export function SubscribeButton() {
  return (
    <div className="px-4 pb-6">
      <button className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-[var(--primary)]/25">
        <Crown className="w-5 h-5" />
        Assinar por R$ 29,90/mês
      </button>
      <p className="text-center text-[var(--muted-foreground)] text-xs mt-3">
        Acesso a todo conteúdo exclusivo
      </p>
    </div>
  );
}
