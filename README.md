# SWEEP | Toxic Comments Classification

**SWEEP** is an application designed to safeguard user mental health by filtering hate comments from social media. It employs a **fine-tuned BERT-base-uncased model** and integrates a simple **React frontend** to simulate hate speech filtering for social media platforms. This application enables users to input comments and classify or remove the hate comments.

## Objective
- Create a model capable of detecting hate speech with decent accuracy, considering the English language
- Implement a system that can identify and remove hate comments on social media-like platform. 
- The ultimate goal is to protect users' mental health and foster a more positive and inclusive online environment

## Datasets
In this project, we have used three different datasets to detect and classify hate speech, toxic comments, and harmful language across different online platforms. The datasets include text data from Twitter, Wikipedia comments, and YouTube, each with specific characteristics and annotations. They are discussed in brief in this section:

### [Hate Speech and Offensive Language Dataset](https://www.kaggle.com/datasets/mrmorj/hate-speech-and-offensive-language-dataset)

- **Source**: Twitter  
- **Data Composition**: Over **25.3k** unique tweets, annotated with labels indicating "Hate Speech," "Offensive Language," or "Neither."  
- **Purpose**: To identify and classify hate speech within Twitter's short-text format, aiding in understanding hate speech manifestations in informal online discourse.


### [Google’s Jigsaw Toxic Comment Dataset](https://www.kaggle.com/datasets/julian3833/jigsaw-toxic-comment-classification-challenge)

- **Source**: Wikipedia comments  
- **Data Composition**: Over **159.5k** unique comments, labeled with categories such as "Toxic," "Severe Toxic," "Obscene," "Threat," "Insult," and "Identity Hate."  
- **Purpose**: To provide a rich, multi-label dataset for understanding a range of toxic behaviors, ideal for developing nuanced classification models recognizing multiple forms of online toxicity.

## YouToxic Dataset

- **Source**: YouTube comments  
- **Data Composition**: **1,000** comments labeled with categories such as "IsToxic," "IsAbusive," "IsThreat," "IsProvocative," "IsObscene," "IsHatespeech," "IsRacist," "IsNationalist," "IsSexist," "IsHomophobic," "IsReligiousHate," and "IsRadicalism."  
- **Purpose**: To support the analysis of toxic language in YouTube’s video-centric platform, adding diversity to toxic content detection tasks.


### [SemEval-2018 Task 1: Affect in Tweets](https://huggingface.co/datasets/SemEvalWorkshop/sem_eval_2018_task_1)

- **Source**: Tweets from Twitter  
- **Data Composition**: Thousands of tweets labeled with emotions such as *anger*, *anticipation*, *disgust*, *fear*, *joy*, *love*, *optimism*, *pessimism*, *sadness*, *surprise*, and *trust*. Each tweet is annotated for one or more emotions.  
- **Purpose**: Designed to study emotional language on social media. Applications include emotion recognition, sentiment analysis, and psychological behavior modeling in areas like mental health analysis, marketing, and human-computer interaction.

## **Classical Machine Learning Approaches**  
We experimented with several classical machine learning models to classify toxicity in comments across the previously discussed datasets: the Twitter Hate Speech Dataset, Google’s Jigsaw Toxic Comment Dataset, and the YouToxic Dataset. The following models were utilized:  
#### 1. Logistic Regression  
- Accuracy in Hate Speech and Offensive Language Dataset (Twitter): 0.8737
- Accuracy in Google’s Jigsaw Toxic Comment Dataset (Wikipedia) : 0.9187
- Accuracy in Youtube Toxic Dataset : 0.66

#### 2. Dicision Tree
- Accuracy in Hate Speech and Offensive Language Dataset (Twitter): 0.8628
- Accuracy in Google’s Jigsaw Toxic Comment Dataset (Wikipedia) : 0.8921
- Accuracy in Youtube Toxic Dataset : 0.62

#### 3. Naive Bayes
- Accuracy in Hate Speech and Offensive Language Dataset (Twitter): 0.7821
- Accuracy in Google’s Jigsaw Toxic Comment Dataset (Wikipedia) : 0.8998
- Accuracy in Youtube Toxic Dataset : 0.51

  
## Project Architecture
The system consists of the following components:
1. **User Interface**  
   The system features a simple web application, providing a clean interface for users to input comments on a the post and filter the hate comments.

2. **Backend Services**  
   The backend services are responsible for processing user comments and filter out the hate comments. The main components include:


   - **Fine-tuning BERT for multi-label text classification:** Classifies the input comments into hate or not hate, and was fine-tuned using HuggingFace Transformers and Datasets.

     <img src="https://github.com/user-attachments/assets/2be7a530-ea83-47e6-bdbb-bf43178d47ec" height="273" width="500">  

# Usage
Follow the steps below to use the application:

### 1. Clone the Repository
To get started, clone the repository to your local machine:
```bash
git clone https://github.com/Mavis021/adsclassification.git
cd adsclassification
```

### 2. Install Dependencies
Ensure all necessary Python, React frontend and flask backend dependencies are installed.

For Python:
```bash
pip install -r requirements.txt
```
### 3. Install the fine-tuned model from the drive and place the fine-tuned folder into the models folder of the project.
```bash
https://drive.google.com/drive/folders/1z895wZQxEHoyFrmtK28xltMiLT9XvDJO?usp=sharing
```

### 4. Run the Application

#### React Frontend:
Navigate to the socialApp/frontend directory and run.
```bash
npm start
```
#### Flask Backend:
For the backend, use the following command after navigating to the socialApp/backend folder:
```bash
npm run dev
```
#### Model Loading:
Navigate to the socialApp/backend/modelLoading folder:
```bash
python flask_model_server.py
```

## Usage Instructions
- Enter a comment on the post
- Enter Filter to remove toxic comments

## Code Structure

The repository is divided into two main components: the **frontend** (React) and the **backend** (Flask) inside of the socialApp folder.

### socialApp/backend/modelLoading/
- `backend/modelLoading/flask_model_server.py`: The main Flask application for loading the fine-tuned model

### socialApp/frontend/
- `socialApp/frontend/src/`: Contains the main source code for the frontend.

### docs/
- `docs/`: Documentation and any additional reference files for the project.

### notebook/
- `notebook/`: Interactive Python Notebooks of the models.

### assets/
- `assets/`: Image assets of the project
