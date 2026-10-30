
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Prince Morris Portfolio API",
    description="Backend API for Prince Morris Personal Portfolio",
    version="1.0.0"
)

# Allow the frontend to communicate with Python
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://127.0.0.1:5500",
        "http://localhost:5500"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Test endpoint
@app.get("/")
def home():
    return {
        "message": "Welcome to Prince Morris Portfolio API",
        "status": "Backend connected successfully"
    }

# Profile endpoint
@app.get("/api/profile")
def get_profile():
    return {
        "name": "Prince Morris",
        "profession": "Technology Enthusiast & Digital Solutions Developer",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python",
            "SQL",
            "FastAPI"
        ]
    }
