import { GoogleGenerativeAI } from '@google/generative-ai';
import { SOCRATES_SYSTEM_PROMPT } from './Prompts';

export type ModelMode = 'local' | 'cloud';

export interface ModelResponse {
  text: string;
  source: ModelMode;
}

class ModelRouter {
  private geminiClient: GoogleGenerativeAI | null = null;
  private currentMode: ModelMode = 'cloud';

  constructor(apiKey?: string) {
    if (apiKey) {
      this.geminiClient = new GoogleGenerativeAI(apiKey);
    }
  }

  setMode(mode: ModelMode) {
    this.currentMode = mode;
  }

  async generateResponse(prompt: string, imageBase64?: string): Promise<ModelResponse> {
    if (this.currentMode === 'cloud' && this.geminiClient) {
      return this.generateCloudResponse(prompt, imageBase64);
    } else {
      return this.generateLocalResponse(prompt);
    }
  }

  private async generateCloudResponse(prompt: string, imageBase64?: string): Promise<ModelResponse> {
    try {
      // Use systemInstruction for Gemini 1.5
      const model = this.geminiClient!.getGenerativeModel({ 
        model: 'gemini-1.5-flash',
        systemInstruction: SOCRATES_SYSTEM_PROMPT
      });
      
      let result;
      if (imageBase64) {
        result = await model.generateContent([
          prompt,
          {
            inlineData: {
              data: imageBase64,
              mimeType: 'image/jpeg'
            }
          }
        ]);
      } else {
        result = await model.generateContent(prompt);
      }
      
      return {
        text: result.response.text(),
        source: 'cloud'
      };
    } catch (error) {
      console.error('Cloud inference failed, falling back to local:', error);
      return this.generateLocalResponse(prompt);
    }
  }

  private async generateLocalResponse(prompt: string): Promise<ModelResponse> {
    // TODO: Integrate with LiteRT / Gemma 4 local engine
    // For now, returning a mock to demonstrate the fallback/local flow
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          text: `[Local Gemma 4] I am analyzing your request offline: "${prompt.substring(0, 50)}..."`,
          source: 'local'
        });
      }, 1000);
    });
  }
}

export const modelRouter = new ModelRouter(process.env.EXPO_PUBLIC_GEMINI_API_KEY);
