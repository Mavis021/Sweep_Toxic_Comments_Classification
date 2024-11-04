
from flask import Flask, request, jsonify, render_template
import re

import joblib


app = Flask(__name__)


# Load the model
model = joblib.load('/home/mavis021/Documents/fuse/ADS_SWEEP/adsclassification/models/decision_tree_model.pkl')
cv = joblib.load('/home/mavis021/Documents/fuse/ADS_SWEEP/adsclassification/models/count_vectorizer.pkl')


print("Model and vectorizer loaded successfully.")

# Preprocessing for the text input
def preprocess_input(text):
    text = re.sub(r'[^\w\s]', '', text)
    text = text.lower()
    return text


@app.route('/')
def home():
    return render_template('index.html')

# Route to handle form submission and make prediction
@app.route('/predict', methods=['POST'])
def predict():
    text = request.form.get('text', '')
    print("Received text:", text)  # Debugging line

    # Transform the input text
    df = cv.transform([text]).toarray()
    print("Transformed text vector:", df)  # Debugging line

    # Using the model
    prediction = model.predict(df)[0]
    print("Prediction:", prediction)

    return jsonify({'prediction': prediction})

if __name__ == '__main__':
    app.run(debug=True, port=5001)
    