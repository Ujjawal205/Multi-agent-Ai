import { getModel } from "../config/llmModels.js"

export const chatAgent = async (state) => {
    const llm = await getModel("chat")
    const Systemprompt = "You are Multi-agent Ai, an intelligent AI assistant."

    const response = await llm.invoke([
        {
            "role" : "system",
            "content" : Systemprompt
        },
        {
            "role" : "human",
            "content" : state.prompt 
        }
    ])

    return{
        ...state,
        aiResponse : response.content
    }

    
}