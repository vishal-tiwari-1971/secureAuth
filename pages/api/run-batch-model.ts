// pages/api/run-batch-model.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const scriptPath = path.join(process.cwd(), 'scripts', 'batch_model_worker_v2.js');

    const child = spawn('node', [scriptPath], {
      detached: true,
      stdio: 'ignore',
    });

    child.unref();

    return res.status(200).json({ success: true, message: 'Batch worker started.' });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: (error as Error).message,
    });
  }
}
