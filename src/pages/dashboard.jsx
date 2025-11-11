import Navbar from "./components/navbar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../assets/styles/calendar.css'

function Dashboard() {



    return(
        <div>
            <Navbar />

            <div className="p-7 p-5">
                <h1 className="text-2xl text-[#990100] font-bold">Good Afternoon, Reuel Christian!</h1>

                <div className="pt-7">

                    <Calendar className={`p-3 shadow-lg`}/>

                </div>
            </div>

            

            
        </div>
    )
}

export default Dashboard;