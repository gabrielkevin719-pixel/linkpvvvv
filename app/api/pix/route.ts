import { NextResponse } from "next/server";
import QRCode from "qrcode";

const SYNCPAY_BASE_URL = "https://api.syncpayments.com.br";
const CLIENT_ID = process.env.SYNCPAY_CLIENT_ID;
const CLIENT_SECRET = process.env.SYNCPAY_CLIENT_SECRET;

async function getAccessToken() {
  const response = await fetch(`${SYNCPAY_BASE_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    throw new Error("Falha ao obter token de acesso");
  }

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const { name, email, amount } = await request.json();

    if (!name || !email || !amount) {
      return NextResponse.json(
        { error: "Dados incompletos" },
        { status: 400 }
      );
    }

    // Obter token de acesso
    const accessToken = await getAccessToken();

    // Criar cobrança PIX
    const pixResponse = await fetch(`${SYNCPAY_BASE_URL}/pix/cashIn`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        amount: amount,
        description: `Assinatura - ${name}`,
        externalReference: `${Date.now()}-${email}`,
        customer: {
          name: name,
          email: email,
        },
      }),
    });

    if (!pixResponse.ok) {
      const errorData = await pixResponse.json();
      console.error("Erro SyncPay:", errorData);
      throw new Error("Falha ao criar cobrança PIX");
    }

    const pixData = await pixResponse.json();

    // Gerar QR Code em base64
    const qrCodeBase64 = await QRCode.toDataURL(pixData.qrCode || pixData.pixCopiaECola || pixData.emv, {
      width: 256,
      margin: 2,
      color: {
        dark: "#e11d48",
        light: "#ffffff",
      },
    });

    return NextResponse.json({
      transactionId: pixData.id || pixData.transactionId,
      qrCode: pixData.qrCode || pixData.pixCopiaECola || pixData.emv,
      qrCodeBase64,
      expiresAt: pixData.expiresAt || new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    });
  } catch (error) {
    console.error("Erro ao gerar PIX:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro interno" },
      { status: 500 }
    );
  }
}
