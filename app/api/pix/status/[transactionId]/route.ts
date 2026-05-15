import { NextResponse } from "next/server";

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

export async function GET(
  request: Request,
  { params }: { params: Promise<{ transactionId: string }> }
) {
  try {
    const { transactionId } = await params;
    const accessToken = await getAccessToken();

    const response = await fetch(
      `${SYNCPAY_BASE_URL}/pix/cashIn/${transactionId}`,
      {
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Falha ao verificar status");
    }

    const data = await response.json();

    return NextResponse.json({
      status: data.status,
      paidAt: data.paidAt,
    });
  } catch (error) {
    console.error("Erro ao verificar status:", error);
    return NextResponse.json(
      { error: "Erro ao verificar status", status: "PENDING" },
      { status: 500 }
    );
  }
}
