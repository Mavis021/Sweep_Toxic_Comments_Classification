# # #api to load the ai model
# from flask import Flask, request, jsonify
# from transformers import AutoModelForSequenceClassification, AutoTokenizer
# from safetensors.torch import load_file
# import torch
# # import joblib

# app = Flask( __name__ )

# # #loading the model
# # model = joblib.load('../../../models/decision_tree_model.pkl')

# # cv = joblib.load('../../../models/count_vectorizer.pkl')

# model_path = "../../../models/models.safetensors"
# pretrained_model_name = "bert-base-uncased"

# import os
# print(os.path.abspath(model_path))

# try:
#     # Load the tokenizer for text preprocessing
#     tokenizer = AutoTokenizer.from_pretrained(pretrained_model_name)
#     print("Tokenizer loaded successfully.")

#     # Load the pre-trained model architecture
#     model = AutoModelForSequenceClassification.from_pretrained(pretrained_model_name, num_labels=2)
#     print("Pre-trained model architecture loaded.")

#     # Load SafeTensors weights into the model
#     model_weights = load_file(model_path)
#     model.load_state_dict(model_weights)
#     model.eval()  # Set model to evaluation mode
#     print("SafeTensors model weights loaded successfully.")
# except Exception as e:
#     print(f"Error loading model or tokenizer: {e}")
#     model = None
#     tokenizer = None

# # print('Model loaded successfully')

# @app.route('/classify-comment', methods = ['POST'])
# def classify_comment():
#   if model is None: 
#         return jsonify({'error': 'Model not loaded'}), 500
  
#   if tokenizer is None:
#         return jsonify({'error': 'Tokenizer not loaded'}), 500
  
#   data =  request.json
#   comment = data.get('comment')
#   print('received comment:', comment)

#   if not comment:
#     print("Error in loading the comment")
#     return jsonify({'error': 'No comment provided'}), 400
  
#   # # Transform the input text
#   # df = cv.transform([comment]).toarray()
#   # print("Transformed text vector:", df)

#   # #predicting the text
#   # # Using the model
#   # prediction = model.predict(df)[0]
#   # print("Prediction:", prediction)
#   try:
#       # Tokenize and preprocess the comment
#       inputs = tokenizer(comment, return_tensors="pt", padding=True, truncation=True, max_length=128)
#       print("Tokenized input:", inputs)

#       # Perform prediction using the model
#       with torch.no_grad():
#           outputs = model(**inputs)
#           logits = outputs.logits
#           prediction = logits.argmax(dim=1).item()
#       print("Prediction:", prediction)

#       return jsonify({'classification': prediction})
#   except Exception as e:
#         print(f"Error during prediction: {e}")
#         return jsonify({'error': 'Prediction failed'}), 500

# if __name__ == '__main__':
#    app.run(port = 5001)

from flask import Flask, request, jsonify
import torch
from transformers import AutoModelForSequenceClassification, AutoTokenizer

# Initialize the Flask app
app = Flask(__name__)

# Define the model directory
model_dir = "../../../models"

# Load the tokenizer and model
print("Loading the model and tokenizer...")
tokenizer = AutoTokenizer.from_pretrained(model_dir)
model = AutoModelForSequenceClassification.from_pretrained(
    model_dir,
    use_safetensors=True  # Ensure it uses the safetensors format
)
model.eval()  # Set model to evaluation mode
print("Model and tokenizer loaded successfully!")

# Route for text classification
@app.route('/classify-comment', methods=['POST'])
def classify_comment():
    data = request.json
    comment = data.get('comment')

    # Validate input
    if not comment:
        return jsonify({'error': 'No comment provided'}), 400

    print("Received comment:", comment)

    # Tokenize the input text
    encoding = tokenizer(comment, return_tensors="pt")
    encoding = {k: v.to(model.device) for k, v in encoding.items()}

    # Get model predictions
    with torch.no_grad():
        outputs = model(**encoding)

    # Extract logits and probabilities
    logits = outputs.logits
    probs = torch.nn.functional.softmax(logits, dim=-1)
    predicted_class = torch.argmax(probs, dim=-1).item()

    # Map the predicted class ID to its label
    id2label = model.config.id2label
    predicted_label = id2label[predicted_class]

    print("Predicted Label:", predicted_label)

    return jsonify({'classification': predicted_label})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
