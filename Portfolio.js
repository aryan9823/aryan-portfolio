import React from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-2">Aryan Dixit</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Machine Learning Engineer</h2>
        <p className="text-lg max-w-xl mb-6">
          Building intelligent systems with Computer Vision, NLP, and Deep Learning.
        </p>
        <div className="flex gap-4">
          <Button className="text-white bg-black hover:bg-gray-800">View Projects</Button>
          <a href="https://docs.google.com/document/d/1XXgxmeDT9sUHg5WZ9Hu6wc1X9blTzaAq/edit?usp=sharing&ouid=107758090687535023957&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Download Resume</Button>
          </a>
        </div>
      </section>

      {/* About Me */}
      <section className="p-8 md:p-16 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="max-w-3xl">
          Aryan is a third-semester engineering student deeply passionate about Machine Learning and Computer Vision.
          He has developed advanced ML models, including hybrid architectures, and built real-world applications such
          as pest detection systems. He actively contributes to social causes.
        </p>
      </section>

      {/* Projects */}
      <section className="p-8 md:p-16">
        <h3 className="text-3xl font-semibold mb-8">Projects</h3>
        <div className="space-y-6">
          <Project
            title="Vision for Automated Pest Detection in Agriculture"
            description="Combines CNNs, VGG-16, and ResNet18 for early pest detection. Trained on a custom agricultural dataset."
            tools="PyTorch, OpenCV, Custom Image Data"
            link="Coming Soon"
          />
          <Project
            title="Text Summarization — A Hybrid Approach"
            description="Combines RNNs, Transformers, and Attention Mechanisms. Created concise text summaries with evaluation metrics like confusion matrices and accuracy scores."
            tools="PyTorch, NLTK, Matplotlib"
            link="https://github.com/amantlpu3002/-Text-Summarization--A-hybrid-approach-to-text-summarization"
          />
          <Project
            title="Text-Based Adventure Game (AI)"
            description="A Python-based AI game that generates story-driven adventures using user input. Focuses on NLP logic, input handling, and replayable gameplay."
            tools="Python, Custom Logic Engine"
            link="https://github.com/amantlpu3002/Text-Based-Adventure-Game"
          />
          <Project
            title="Spanish Football Culture NLP Mini-Project"
            description="Created a Spanish-language video script using beginner-level NLP techniques. Designed to help learners understand cultural contexts using basic language models."
            tools="Python, NLP"
            link=""
          />
        </div>
      </section>

      {/* Certificates */}
      <section className="p-8 md:p-16 bg-gray-50">
        <h3 className="text-3xl font-semibold mb-4">Certificates</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Complete DSA Course – Self-Paced DSA by GeeksforGeeks</li>
          <li>Introduction to LLM – Coursera</li>
          <li>Prompt Engineering using ChatGPT – Coursera</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="p-8 md:p-16">
        <h3 className="text-3xl font-semibold mb-4">Skills</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li><strong>Languages:</strong> Python, C, C++, Java</li>
          <li><strong>Libraries:</strong> PyTorch, TensorFlow, OpenCV, NLTK, Matplotlib</li>
          <li><strong>Concepts:</strong> CNNs, RNNs, LSTMs, Transformers, Attention Mechanisms</li>
          <li><strong>Tools:</strong> Git, GitHub, VS Code, Jupyter</li>
        </ul>
      </section>

      {/* Contact Me */}
      <section className="p-8 md:p-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-semibold mb-4">Contact Me</h3>
        <p>Email: <a href="mailto:aman.mlengineer@email.com" className="text-blue-600">aman.mlengineer@email.com</a></p>
        <p>GitHub: <a href="https://github.com/amantlpu3002" className="text-blue-600" target="_blank">github.com/amantlpu3002</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/aman-ml" className="text-blue-600" target="_blank">linkedin.com/in/aman-ml</a></p>
      </section>
    </div>
  );
}

function Project({ title, description, tools, link }) {
  return (
    <div className="border p-4 rounded-2xl shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="mb-1">{description}</p>
      <p className="text-sm text-gray-600 mb-2">Tools: {tools}</p>
      {link && link !== "Coming Soon" ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600">View on GitHub</a>
      ) : (
        <span className="text-gray-400 italic">GitHub (Coming Soon)</span>
      )}
    </div>
  );
}