import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function PUT(request) {
  try {
    const result = await sql`UPDATE Counter SET Rep = Rep + 5;`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}