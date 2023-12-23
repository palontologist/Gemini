import { NextPage } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize GoogleGenerativeAI instance (inside the component)
const genAI = new GoogleGenerativeAI(process.env.API_KEY!);

const Page: NextPage = async () => {
  try {
    const model = await genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = 'Write a story about a magic backpack.';
    const result = await model.generateContent(prompt);
    const text = await result.response.text();
    
    return (
      <div>
        <h1>Generated Content</h1>
        <p>{text}</p>
      </div>
    );
  } catch (error) {
    console.error('Error generating content:', error);
    return (
      <div>
        <h1>Error</h1>
        <p>Something went wrong generating the content.</p>
      </div>
    );
  }
};

export default Page;
