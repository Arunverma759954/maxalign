import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      date,
      time,
      service,
      message,
    } = await req.json();

    if (!name || !phone || !date || !time || !service) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const formattedTime =
      typeof time === "string" && time.length === 5
        ? `${time}:00`
        : time;

    const crmRes = await fetch(
      "https://crm-maxalign.vercel.app/api/appointment/add",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          date,
          time: formattedTime,
          service,
          message,
        }),
      }
    );

    if (!crmRes.ok) {
      console.error("CRM API failed:", await crmRes.text());
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Appointment Error:", error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
