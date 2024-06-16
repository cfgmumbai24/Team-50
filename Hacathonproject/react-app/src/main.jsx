import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
// // import LineChart from './LineChart'
// import Student from './Student'
import Image from './image'
import Test_dash from './test_dash'
import TakeTest from './taketest'
import LiteracyTest from './LiteracyTest'
import FormComponent from './FormComponent'
import ActivitiesTable from './ActivitiesTable'
import VideoModal from './VideoModal'
import Home from './Home'
import AddActivity from './AddActivity'
import UploadCompletedActivity from './UploadCompletedActivity'
import StudentTable from './tables';
import LineCharts from './LineCharts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LineCharts />} />
        <Route path='/student' element={<StudentTable />} />
        <Route path="/test" element={<Test_dash />} />
        <Route path="/activities" element={<Home />} />
        <Route path="/take-test" element={<TakeTest />} />
        <Route path="/socio-test" element={<Image />} />
        <Route path="/literacy-test" element={<LiteracyTest />} />
        <Route path="/numeracy-test" element={<FormComponent />} />
        <Route path="/show-activities" element={<ActivitiesTable />} />
        <Route path="/video-modal" element={<VideoModal />} />
        <Route path="/add-activity" element={<AddActivity />} />
        <Route path="/upload-completed-activity" element={<UploadCompletedActivity />} />

      </Routes>

    </Router>
  </React.StrictMode>,
)
