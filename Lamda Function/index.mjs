import { GoogleGenerativeAI } from "@google/generative-ai";

// create a new instance of the GoogleGenerativeAI
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Get the tuned model & generation config 
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
}


export const handler = async (event) => {
    // Destructure
    const { userData, legendData } = event;
    const prompt = `You need to behave as an evaluator. Here is the github data of a user: ${userData}.
    Carefully evaluate it against a well known legend data: ${legendData}. CTry to critize the user as much as possible maybe speak a few bad words too. But of the user profile is as good as legend then maybe praise a little bit. But most of the time try to crtize the user by making joke out of his profile so that he fells bad and improve himself.
    `

    try {
        // Generate response
        const response = await model.generateContent(prompt);
        const result = response.response.text();

        // Return the reponse
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: result,
            })
        }
    }
    catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: "Server error",
            })
        }
    }

}