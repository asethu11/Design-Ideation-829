import os
from flask import Flask, request, jsonify
from openai import OpenAI
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()
import os
print("API KEY:", os.environ.get("OPENROUTER_API_KEY"))

app = Flask(__name__)
# Restrict CORS to trusted frontend (adjust as needed)
CORS(app, origins=["http://localhost:5500"])

# Get OpenRouter API key from environment variable
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")
if not OPENROUTER_API_KEY:
    raise RuntimeError("OPENROUTER_API_KEY environment variable not set.")

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.get_json(force=True)
    user_message = data.get('message')
    system_message = data.get('system', '')
    if not user_message or not isinstance(user_message, str):
        return jsonify({"error": "Missing or invalid 'message' field."}), 400
    try:
        completion = client.chat.completions.create(
            model="openai/gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": system_message},
                {"role": "user", "content": user_message}
            ]
        )
        return jsonify({
            "response": completion.choices[0].message.content
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=False) 