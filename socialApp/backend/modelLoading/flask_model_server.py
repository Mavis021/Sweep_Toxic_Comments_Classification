#api to load the ai model
from flask import Flask, request, jsonify
import joblib

app = Flask( __name__ )

#loading the model
model = joblib.load('../../../models/decision_tree_model.pkl')

cv = joblib.load('../../../models/count_vectorizer.pkl')

print('Model loaded successfully')

@app.route('/classify-comment', methods = ['POST'])
def classify_comment():
  data =  request.json
  comment = data.get('comment')
  print('received comment:', comment)

  if not comment:
    print("Error in loading the comment")
    return jsonify({'error': 'No comment provided'}), 400
  
  # Transform the input text
  df = cv.transform([comment]).toarray()
  print("Transformed text vector:", df)

  #predicting the text
  # Using the model
  prediction = model.predict(df)[0]
  print("Prediction:", prediction)

  return jsonify({'classification': prediction})

if __name__ == '__main__':
   app.run(port = 5001)
