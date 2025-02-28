import Getstarted from '../components/Getstarted';
import Revolution from '../components/Revolution';
import Aclogo from '../components/Aclogo';
import Aclogonextarrow from '../components/Aclogonextarrow';
import Collabrative from '../components/Collabrative';
import Studentprogress from '../components/Studentprogress';
import Createtodolist from '../components/Createtodolist';

import Navbar from '../components/Navbar';





export default function HomePage() {
  

    
  
  return (
  <div>
      <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 space-y-8  mb-20 mt-10">
      
      <Getstarted />
      {/* <Aclogo/>
      <Revolution />
      <Aclogonextarrow/>
      <Collabrative/>
      <Studentprogress/>
      <Createtodolist/> */}
    
      
    </div>
  </div>
  );
}
