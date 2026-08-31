import { google } from "googleapis";

import { NextResponse } from "next/server";

import { FormSchema } from "@/schemas/enrollment";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = FormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Dados inválidos." },
        { status: 400 },
      );
    }

    const { name, email, phone, city, source } = result.data;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Leads!A:F",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            email,
            phone,
            city,
            source,
            new Date().toLocaleString("pt-BR"),
          ],
        ],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao salvar inscrição:", error);

    return NextResponse.json(
      { error: "Não foi possível enviar a inscrição." },
      { status: 500 },
    );
  }
}