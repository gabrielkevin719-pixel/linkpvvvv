"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface PixData {
  qrCode: string;
  qrCodeBase64: string;
  transactionId: string;
  expiresAt: string;
  name: string;
  email: string;
}

export default function PayPage() {
  const router = useRouter();
  const [pixData, setPixData] = useState<PixData | null>(null);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos
  const [status, setStatus] = useState<"pending" | "paid" | "expired">("pending");

  useEffect(() => {
    const stored = sessionStorage.getItem("pixData");
    if (!stored) {
      router.push("/checkout");
      return;
    }
    setPixData(JSON.parse(stored));
  }, [router]);

  // Timer countdown
  useEffect(() => {
    if (status !== "pending") return;
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setStatus("expired");
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  // Verificar status do pagamento
  useEffect(() => {
    if (!pixData || status !== "pending") return;

    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/pix/status/${pixData.transactionId}`);
        const data = await response.json();
        
        if (data.status === "PAID" || data.status === "COMPLETED") {
          setStatus("paid");
          sessionStorage.removeItem("pixData");
          // Redirecionar para página de sucesso ou liberar acesso
          router.push("/success");
        }
      } catch (error) {
        console.error("Erro ao verificar status:", error);
      }
    };

    const interval = setInterval(checkStatus, 5000);
    return () => clearInterval(interval);
  }, [pixData, status, router]);

  const handleCopy = async () => {
    if (!pixData) return;
    
    try {
      await navigator.clipboard.writeText(pixData.qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Erro ao copiar:", error);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (!pixData) {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center">
        <p className="text-gray-500">Carregando...</p>
      </div>
    );
  }

  if (status === "expired") {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
          <h2 className="text-xl font-bold text-gray-900 mb-4">PIX Expirado</h2>
          <p className="text-gray-500 mb-6">O código PIX expirou. Gere um novo código.</p>
          <button
            onClick={() => router.push("/checkout")}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-4 rounded-full"
          >
            Gerar Novo PIX
          </button>
        </div>
      </div>
    );
  }

  if (status === "paid") {
    return (
      <div className="min-h-screen bg-[#f0f4f8] flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Pagamento Confirmado!</h2>
          <p className="text-gray-500">Seu acesso foi liberado. Verifique seu e-mail.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex flex-col">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
          {/* Mensagem */}
          <p className="text-pink-500 font-medium mb-1">
            Este código PIX será válido por {formatTime(timeLeft)} minutos
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Não saia da página até a confirmação do pagamento. Após o<br />
            pagamento verifique seu email.
          </p>

          {/* QR Code */}
          <div className="relative inline-block mb-6">
            <div className="w-64 h-64 mx-auto relative">
              {pixData.qrCodeBase64 ? (
                <Image
                  src={pixData.qrCodeBase64}
                  alt="QR Code PIX"
                  width={256}
                  height={256}
                  className="w-full h-full"
                  style={{ filter: "hue-rotate(330deg) saturate(1.5)" }}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400">QR Code</span>
                </div>
              )}
              {/* Logo no centro */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-pink-500">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Botão Copiar */}
          <button
            onClick={handleCopy}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold py-4 rounded-full hover:from-pink-600 hover:to-rose-600 transition-all"
          >
            {copied ? "Copiado!" : "Copiar"}
          </button>
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
