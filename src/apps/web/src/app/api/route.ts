import { NextResponse } from "next/server";
import { getNextTours } from "../../actions/get-next-tours";

export async function GET() {
  await getNextTours();

  return NextResponse.json({ message: "Hello World" });
}
