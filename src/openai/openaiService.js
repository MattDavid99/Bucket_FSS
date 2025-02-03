import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

// Store the thread ID in memory (you might want to move this to localStorage or your backend)
let threadId = null;

export const initializeThread = async () => {
  try {
    const thread = await openai.beta.threads.create();
    threadId = thread.id;
    return thread.id;
  } catch (error) {
    console.error('Error initializing thread:', error);
    throw error;
  }
};

export const processMessage = async (message, assistantId) => {
  try {
    // Create thread if it doesn't exist
    if (!threadId) {
      await initializeThread();
    }

    // Add the user's message to the thread
    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: message,
    });

    // Run the assistant
    const run = await openai.beta.threads.runs.create(threadId, {
      assistant_id: assistantId,
    });

    // Poll for the run completion
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);

    while (runStatus.status !== 'completed') {
      if (runStatus.status === 'failed') {
        throw new Error('Assistant run failed');
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
    }

    // Get the messages
    const messages = await openai.beta.threads.messages.list(threadId);

    // Return the latest assistant message
    const lastMessage = messages.data.filter((message) => message.role === 'assistant')[0];

    // Log the original response and annotations
    // console.log('Original response:', lastMessage.content[0].text.value);
    // console.log('annotations', lastMessage.content[0].text.annotations);

    // Get the text value and annotations
    const text = lastMessage.content[0].text.value;
    const annotations = lastMessage.content[0].text.annotations || [];

    // Remove the annotations from the text
    let cleanedResponse = text;
    if (annotations.length > 0) {
      // Sort annotations in reverse order to handle overlapping annotations
      annotations.sort((a, b) => b.start_index - a.start_index);

      // Remove each annotation from the text
      annotations.forEach((annotation) => {
        cleanedResponse = cleanedResponse.slice(0, annotation.start_index) + cleanedResponse.slice(annotation.end_index);
      });
    }

    cleanedResponse = cleanedResponse.trim();

    // Log the cleaned response
    // console.log('Cleaned response:', cleanedResponse);

    return cleanedResponse;
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
};
