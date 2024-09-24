Setup instructions 
Frontend: 
navigate to the frontend folder.
first run command -npm install
to start the server run- npm run dev
to run tests - npm test

Backend: 
Navigate to the backend folder
install necessary packages from the requirements.txt file using command - pip install -r requirements.txt
command to activate virtual environment - .\venv\Scripts\activate
start uvicorn server - uvicorn app.main:app --reload 
to run tests - pytest

Key decisions made:
A well-structured project folder was defined, separating frontend and backend logic.
Key frontend components were defined, including Eventcard, Eventform, and Eventdetails. Each of these components was designed to handle specific functionalities, improving maintainability.
The design aimed to maintain responsiveness, ensuring the UI would function well on various devices.
A tests directory under the backend folder was created for unit testing, ensuring code reliability and coverage during development.

