import { NextRequest, NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

export async function GET(req: NextRequest) {
  try {
    const scriptPath = path.join(process.cwd(), 'scripts', 'batch_model_worker_v2.js');
    const child = spawn('node', [scriptPath]);

    // Capture stdout and stderr
    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

    return NextResponse.json({ success: true, message: 'Batch worker started.' });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
