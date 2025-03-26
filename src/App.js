import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from backend on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch tasks from the FastAPI backend
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/tasks");
      const data = await response.json();
      console.log("Fetched Tasks:", data);
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  // Add task to backend
  const addTask = async (taskText) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/add_task", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: taskText }),
      });

      if (response.ok) {
        const newTask = { text: taskText }; // New task object
        setTasks((prevTasks) => [...prevTasks, newTask]); // Update UI
      }
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Start voice recognition
  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const speechRecognition = new window.webkitSpeechRecognition();
    speechRecognition.continuous = false;
    speechRecognition.lang = "en-US";

    speechRecognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      console.log("Recognized text:", speechText);
      addTask(speechText); // Add recognized text to task list
    };

    speechRecognition.start();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voice-Controlled To-Do App</h1>
      <button onClick={startRecording}>
        <span role="img" aria-label="microphone">🎤</span> Start Recording
      </button>
      <h2>Tasks:</h2>
      <ul>
        {tasks.length === 0 ? (
          <p>No tasks added yet.</p>
        ) : (
          tasks.map((task, index) => <li key={index}>{task.text}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
