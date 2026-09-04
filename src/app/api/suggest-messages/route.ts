export async function POST(request: Request) {
  try {
    const prompt = `Create a list of three open-ended and engaging questions for an anonymous social platform separated by '||'.
    Rules:
    - Output ONLY questions separated by ||
    - Each question 50 characters
    - No extra text before or after
    - Topics: ${getRandomTopics()}
    - Seed: ${Math.random()}`

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CF_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { 
              role: "system", 
              content: "You are a creative question generator. Output ONLY 3 questions separated by ||. No extra text, no numbering." 
            },
            { role: "user", content: prompt }
          ]
        }),
      }
    );

    const data = await response.json();
    const text = data.result.response;

    return Response.json({ success: true, text });

  } catch (error) {
    console.error('Error:', error);
    return Response.json({ success: false, message: 'Error generating messages' }, { status: 500 });
  }
}

function getRandomTopics() {
  const topics = [
    'childhood memories', 'travel dreams', 'food adventures',
    'superpowers', 'future technology', 'music', 'books',
    'nature', 'friendship', 'creativity', 'sports', 'movies',
    'life lessons', 'bucket list', 'funny moments'
  ]
  return topics.sort(() => Math.random() - 0.5).slice(0, 3).join(', ')
}