import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import App from './App';
import PreIntverNotice from './preIntverNotice';
import CandidateForm from './candidateForm';
import InterviewCoomplete from './InterviewCoomplete';
import InterviewVideo from './InterviewVideo';
import VideoRecorders from './videoRecorder';
import Applicants from './Applicants';
import Dashboard from './Dashboard';
import Settings from './Settings';
import InterviewQuestion1 from './InterviewVideo 1';
import InterviewQuestion2 from './InterviewVideo 2';
import InterviewQuestion3 from './InterviewVideo 3';
import InterviewQuestion4 from './InterviewVideo 4';
import InterviewQuestion5 from './InterviewVideo 5';
import InterviewQuestion6 from './InterviewVideo 6';
import InterviewQuestion7 from './InterviewVideo 7';
import InterviewQuestion8 from './InterviewVideo 8';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/preIntvernotice" element={<PreIntverNotice />} />
      <Route path="/candidateform" element={<CandidateForm />} />
      <Route path="/interviewcoomplete" element={<InterviewCoomplete />} />
      <Route path="/interviewvideo" element={<InterviewVideo />} />
      <Route path="/video" element={<VideoRecorders />} />
      <Route path="/applicants" element={<Applicants />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/interview-question-1" element={<InterviewQuestion1 />} />
      <Route path="/interview-question-2" element={<InterviewQuestion2 />} />
      <Route path="/interview-question-3" element={<InterviewQuestion3 />} />
      <Route path="/interview-question-4" element={<InterviewQuestion4 />} />
      <Route path="/interview-question-5" element={<InterviewQuestion5 />} />
      <Route path="/interview-question-6" element={<InterviewQuestion6 />} />
      <Route path="/interview-question-7" element={<InterviewQuestion7 />} />
      <Route path="/interview-question-8" element={<InterviewQuestion8 />} />
      <Route path="/reportWebvitals" element={<reportWebVitals />} />
    </Routes>
  </BrowserRouter>
);
