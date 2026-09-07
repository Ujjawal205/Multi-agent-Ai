import { getModel } from "../config/llmModels.js"

export const router = async (state) => {
    const llm = await getModel("router")
    const prompt = `You are an agent router.
    
    Available agents :
    
    - chat
    - search
    - coding
    - pdf
    - ppt
    - vision
    
    
    Rules : 
    
    chat:
    General conversation,
    explainations,
    learning,
    questions.
    
    search :
    Current events,
    latest information
    news,
    recent developments,
    internet lookup.
    
    coding :
    Generate code,
    debug code,
    build projects,
    architecture,
    API desgin.
    
    pdf :
    Questions about the generate PDF's
    or document context.
    
    ppt :
    Quesntions about the generate PPT's
    or PPT context.

    vison :
    Generate image,
    create image,

    
    Return ONLY one word :
    
    chat
    searching
    coding 
    pdf
    ppt 
    visio
    
    User Query :

    ${state.prompt}

    `
   const response = await llm.invoke(prompt)
   console.log(response);

   return{
    ...state,
    agent : response.content
           .trim()
            .toLowerCase()

   }
}