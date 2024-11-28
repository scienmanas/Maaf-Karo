import { GoogleGenerativeAI } from "@google/generative-ai";

// create a new instance of the GoogleGenerativeAI
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

// Get the tuned model & generation config 
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash-8b"
});

export const handler = async (event) => {
    // Destructure
    const {userName, userData, legendName,legendData } = event;
    const prompt = `You need to behave as an evaluator. There is a person named ${userName} and his github profile is like this: ${userData}.
    Evaluate it against a well known legend coder named: ${legendName}, and his profile data is: ${legendData}. Try to critize the user, maybe speak a few bad words too, You job is also to tell where user lacks so that he improves, also praise him if his profile as good as ${legendName}. You are free to make joke out of the user profile so that he fells bad and improve himself if his profile is bad. Also some data may have links ignore the links, you don't have to scrape. Your response should only include the evaluation result nothing else as it will passed to the frontend app directly. Directly give the response as if you were talking to him. You can use emojis also. Also don't print uncessary [object] [object]thhing, handle carefully. Also there may be cases when you can encounter same profile of legend and user i.e. both name and profile almost same, if that occurs say: "Don't try to trick me you legend" with emojis, see it can occur so look carefully. Also there may be person of same name as that of legend if, you at that time profile will be differentiater, so basically analyse everything carefully.
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