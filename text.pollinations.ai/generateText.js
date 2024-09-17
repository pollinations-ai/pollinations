import { AzureOpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new AzureOpenAI({
    apiVersion: process.env.AZURE_OPENAI_API_VERSION,
    endpoint: process.env.AZURE_OPENAI_ENDPOINT,
    apiKey: process.env.AZURE_OPENAI_API_KEY,
});

async function generateText(messages, { seed = null, jsonMode = false }) {
    // Check if the total character count of the stringified input is greater than 60000
    const stringifiedMessages = JSON.stringify(messages);
    if (stringifiedMessages.length > 60000) {
        throw new Error('Input messages exceed the character limit of 60000.');
    }

    // if json mode is activated and there is no system message, prepend the system message
    if (jsonMode && !hasSystemMessage(messages)) {
        messages = [{ role: 'system', content: 'Respond in simple JSON format' }, ...messages];
    }

    const result = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages,
        seed,
        response_format: jsonMode ? { type: 'json_object' } : undefined
    });

    return result.choices[0]?.message?.content;
}

function hasSystemMessage(messages) {
    return messages.some(message => message.role === 'system');
}

export default generateText;