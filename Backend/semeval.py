from transformers import AutoTokenizer, AutoModel

# Define the model directory
model_dir = "/home/mavis021/Documents/fuse/ADS_SWEEP/adsclassification/models/fine-tuned"

from transformers import AutoModelForSequenceClassification, AutoTokenizer

# Load the tokenizer
tokenizer = AutoTokenizer.from_pretrained(model_dir)

# Load the model
model = AutoModelForSequenceClassification.from_pretrained(
    model_dir,
    use_safetensors=True  # Ensure it uses .safetensors format
)

print("Model and tokenizer loaded successfully!")


import torch

# Input text
text ="Beautfuli post"
# Tokenize input
encoding = tokenizer(text, return_tensors="pt")

# Move input to model's device (e.g., CPU or GPU)
encoding = {k: v.to(model.device) for k, v in encoding.items()}

# Get model predictions
with torch.no_grad():
    outputs = model(**encoding)

# Extract logits and apply softmax or sigmoid, depending on the task
logits = outputs.logits
probs = torch.nn.functional.softmax(logits, dim=-1)  # For single-label classification

print(f"Logits: {logits}")
print(f"Probabilities: {probs}")


id2label = model.config.id2label
predicted_class = torch.argmax(probs, dim=-1).item()
predicted_label = id2label[predicted_class]

print(f"Predicted Label: {predicted_label}")
