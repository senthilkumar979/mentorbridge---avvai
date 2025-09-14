import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('students')
      .select('id')
      .limit(1);

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Supabase connection successful',
      tableExists: true,
      data: data
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      tableExists: false
    }, { status: 500 });
  }
}
