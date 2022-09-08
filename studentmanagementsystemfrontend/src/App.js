import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Student from './components/Student';
import StudentList from './components/StudentList';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/student" />} />
        <Route path='student' element={<Student/>}/>
        <Route path='liststudents' element={<StudentList/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
