import './App.css';
import Dashboard from './modules/Dashboard';
import Form from './modules/Form';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreditCardForm from './paymentGateway/index.js';
import Home from './components/home/Home.jsx';

const ProtectedRoute = ({ children, auth=false }) => {
  const isLoggedIn = localStorage.getItem('user:token') !== null || false;
  const isStudent = true;
  if(!isLoggedIn && auth ) {
    return <Navigate to={'/users/sign_in'} />
  }else if(isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)){
    console.log('object :>> ');
    return <Navigate to={'/'} />
  }


  return children

//   const isLoggedIn = localStorage.getItem('user:token') !== null || false;
// const isStudent = true;
// const isAlumni = false; // Change this to true if user is an alumni

// if (!isLoggedIn && auth) {
//   return <Navigate to={'/users/sign_in'} />;
// } else if (
//   isLoggedIn &&
//   ['/users/sign_in', '/users/sign_up', '/admin/sign_in', '/admin/sign_up'].includes(window.location.pathname)
// ) {
//   console.log('object :>> ');
//   return <Navigate to={'/student'} />;
// } else if (isAlumni && window.location.pathname === '/alumni') {
//   // User is an alumni and trying to access the alumni page
//   return <Navigate to={'/alumni'} />;
// } else {
//   // User is authorized to access the current route
//   return <>{children}</>;
// }

}

function App() {
  return (
    
    <Routes>
      <Route path='/Home' element={
        // <ProtectedRoute>
        <Home/>
      // </ProtectedRoute>
      } />
      <Route path='/Alumini' element={
        <ProtectedRoute auth={true}>
          <Dashboard isStudent={false}/>
          
        </ProtectedRoute>
      } />
      <Route path='/Student' element={
        <ProtectedRoute auth={true}>
          <Dashboard isStudent={true}/>
          
        </ProtectedRoute>
      } />
      <Route path='/users/sign_in' element={
      
        <div className='rowC'>
        <Form isSignInPage={true}/>
        {/* <Form isSignInPage={false}/> */}
        </div>
        

      } />
      <Route path='/users/sign_up' element={
        // <ProtectedRoute>
        
        <Form isSignInPage={false}/>
      // </ProtectedRoute>
      } />
      <Route path='/alumini/sign_in' element={
      
      <div className='rowC'>
      <Form isSignInPage={true} isStudent={false}/>
      {/* <Form isSignInPage={false}/> */}
      </div>
      

    } />
    <Route path='/alumini/sign_up' element={
      // <ProtectedRoute>
      <Form isSignInPage={false} isStudent={false}/>
    // </ProtectedRoute>
    } />
      <Route path='/CreditCardForm' element={
        // <ProtectedRoute>
        <CreditCardForm/>
      // </ProtectedRoute>
      } />

    </Routes>
    // </switch>
  );
}

export default App;
