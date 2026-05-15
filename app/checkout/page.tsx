"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!name.trim() || !email.trim()) {
      setError("Preencha todos os campos");
      return;
    }

    if (!email.includes("@")) {
      setError("Digite um e-mail válido");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/pix", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          amount: 19.90,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao gerar PIX");
      }

      // Salvar dados no sessionStorage para a página de pagamento
      sessionStorage.setItem("pixData", JSON.stringify({
        qrCode: data.qrCode,
        qrCodeBase64: data.qrCodeBase64,
        transactionId: data.transactionId,
        expiresAt: data.expiresAt,
        name,
        email,
      }));

      router.push("/pay");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao processar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Header com foto e título */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500">
              <Image
                src="/prev-1.jpg"
                alt="Mc Mirella"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ASSINE E GANHE SEU ACE...</h1>
              <p className="text-gray-500 text-sm">Aqui tem o que vc procura amor</p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dados de acesso</h2>
            
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Digite o seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />
              
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mt-3">{error}</p>
            )}

            {/* Valor */}
            <div className="flex items-center justify-end gap-2 mt-4 mb-4">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">$</span>
              </div>
              <span className="text-xl font-bold text-gray-900">19,90</span>
            </div>

            {/* Botão */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-4 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processando..." : "Acessar Agora"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="w-6 h-6">
            <svg viewBox="0 0 24 24" fill="none" className="text-pink-500">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
          </div>
          <span className="text-pink-500 font-semibold">LinkPriv</span>
        </div>
        <p className="text-gray-500 text-xs px-4">
          Ao continuar, você concorda com os <span className="text-gray-700">Termos de Uso</span>
          <br />e com a <span className="text-gray-700">Política de Chargeback e Reembolso</span>.
        </p>
      </footer>
    </div>
  );
}
