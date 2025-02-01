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

    return lastMessage.content[0].text.value;
  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
};
