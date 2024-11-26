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
    const {userName, userData, legendName,legendData } = event;
    const prompt = `You need to behave as an evaluator. There is a person named ${userName} and his github profile is like this: ${userData}.
    Evaluate it against a well known legend coder named: ${legendName}, and his profile data is: ${legendData}. Try to critize the user as much as possible maybe speak a few bad words too. But of the user profile is as good as legend then maybe praise a little bit. But most of the time try to crtize the user by making joke out of his profile so that he fells bad and improve himself. Also some data have links ignore them you don't have to scrape. Your response should only include the evaluation result nothing else as it will passed to the frontend app directly. Directly give the response as if you were talking to him. You can use emojis also.
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