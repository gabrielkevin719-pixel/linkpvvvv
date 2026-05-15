"use client";

import { Crown } from "lucide-react";
import Link from "next/link";

export function SubscribeButton() {
  return (
    <div className="px-4 pb-6">
      <Link href="/checkout">
        <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25">
          <Crown className="w-5 h-5" />
          Assinar por R$ 29,90/mês
        </button>
      </Link>
      <p className="text-center text-muted-foreground text-xs mt-3">
        Acesso a todo conteúdo exclusivo
      </p>
    </div>
  );
}
