import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';

// Read .env.local manually since we are running with node directly
const envPath = path.resolve(process.cwd(), '.env.local');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/GEMINI_API_KEY=(.*)/);
const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : null;

if (!apiKey) {
    console.error('Could not find GEMINI_API_KEY in .env.local');
    process.exit(1);
}

console.log('Testing with API Key:', apiKey.substring(0, 5) + '...');

const genAI = new GoogleGenerativeAI(apiKey);
async function run() {
    try {
        console.log('Testing gemini-2.0-flash...');
        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const prompt = 'Parse this expense: "Spent $15 on lunch at Joe\'s" into JSON.';
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log('Success! Response:', text);
    } catch (error) {
        console.error('Error with gemini-2.0-flash:', error);
    }
}

run();
