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
    const { userName1, userData1, userName2, userData2, task } = event;
    let prompt = "";


    if (task === "legend") {
        prompt = `You need to behave as an evaluator. There is a person named ${userName1} and his github profile is like this: ${userData1}.
        Evaluate it against a well known legend coder named: ${userName2}, and his profile data is: ${userData2}. Try to critize the user, maybe speak a few bad words too, You job is also to tell where user lacks so that he improves, also praise him if his profile as good as ${userName2}. You are free to make joke out of the user profile so that he fells bad and improve himself if his profile is bad. Also some data may have links ignore the links, you don't have to scrape. Your response should only include the evaluation result nothing else as it will passed to the frontend app directly. Directly give the response as if you were talking to him. You can use emojis also. Also don't print uncessary [object] [object]thhing, handle carefully. Also there may be cases when you can encounter same profile of legend and user i.e. both name and profile almost same, if that occurs say: "Don't try to trick me you legend" with emojis, see it can occur so look carefully. Also there may be person of same name as that of legend if, you at that time profile will be differentiater, so basically analyse everything carefully. Also the answer should be of medium length not too long, not too small, i.e. medium length.
    `
    }
    else {
        prompt = `You need to behave as an evaluator, There is a person named: ${userName1} and his github profile looks like this: ${userData1}.
        There also one person named: ${userName2} and his profile is like this: ${userData2}. You need to evaluate both the user profiles. The user who profile is no as good as other make joke of him like anything, you are allowed to use bad words too and the person who's profile is good praise him like anything. Also some data may have links ignore the links, you don't have to scrape. Your response should only include the evaluation result nothing else as it will passed to the frontend app directly. Directly give the response as if you were talking to him. You can use emojis also. Also don't print uncessary [object] [object]thhing, handle carefully. Basically analyse everything carefully. Also the answer should be of medium length not too long, not too small, i.e. medium - to a bit long length. Also make sure you heavily criticize and make joke out of the person having not soo good profile. If profiles are almost equal praise both.
        `
    }

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