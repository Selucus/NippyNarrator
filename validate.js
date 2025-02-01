async function condenseData(data, percentage) {
  try {
      let message = "I would like you to condense this text to approximately " + percentage + "% of its original length. Try to keep as many important details as possible so that someone could listen to all the condensed information and still learn all the key concepts as a person who read the whole thing. The data to condense is: " + data;
      
      const response = await fetch("https://647f-2a0c-5bc0-40-3e28-f6-29b3-dba8-2098.ngrok-free.app/api/generate", {
          method: 'POST',  // HTTP method
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
          
          body: JSON.stringify({
              "model": "deepseek-r1:1.5b",
              "prompt": message,
              "stream": false
          }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json(); // Parse JSON response
      let LLMresponse = result.response;

      
      return LLMresponse;
  } catch (error) {
      console.error('Error:', error);
      throw error; // Re-throw error to be handled by the caller
  }
}

function removeThinkTags(text) {
  // Regex to match <think>...</think> including multiline content
  return text.replace(/<think>[\s\S]*?<\/think>/g, '');
}



// Function to check if a claim is opinion, true or false
async function condense(data, percentage) {
  try {
      let result = await checkData(data); // Wait for the response

        result = removeThinkTags(result);
  } catch (error) {
      console.error(error);
      return "error";
  }
}

