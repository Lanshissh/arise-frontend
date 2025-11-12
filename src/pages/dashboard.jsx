import Navbar from "./components/navbar";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../assets/styles/calendar.css'

{/* CARDS */}
function Cards({ title, icon, value }) {
    return (
        <div className="bg-[#EDEDED] w-full max-w-sm rounded-lg px-5 py-4 mx-auto hover:scale-105 shadow-lg">
            <h2 className="text-2xl text-[#990100] font-medium">{title}</h2>
            <div className="flex pt-2 gap-6 items-center">
                <img src={icon} className="h-10 w-10" alt={`${title} icon`} />
                <p className="text-2xl font-medium ">{value}</p>
            </div>
        </div>
    );
}

function Dashboard() {
    return(
        <div>
            <Navbar />

            <div className="p-7 p-5">
                <h1 className="md:text-2xl text-xl text-[#990100] font-bold">Good Afternoon, Reuel Christian!</h1>

                <div className="pt-7 flex gap-4 justify-center">

                    <Calendar className={`p-3 shadow-lg justify-center items-center hover:scale-105`}/>

                    <div className="grid grid-cols-2 gap-4">
                        <Cards title="Employees" icon="icons/red-employees.png" value="20" />
                        <Cards title="Ongoing Projects" icon="icons/red-projects.png" value="5" />
                        <Cards title="Leave Requests" icon="icons/red-leave.png" value="8" />
                        <Cards title="Total Departments" icon="icons/red-departments.png" value="12" />
                    </div>
                    

                    <div className="bg-[#EDEDED] w-full max-w-lg rounded-lg hover:scale-105 shadow-lg px-5 py-4">
                        <h2 className="text-2xl text-[#990100] font-medium pb-2">Pending Evaluations</h2>
                        <div className="grid grid-cols-2 bg-[#9900009c] px-5 py-1 rounded-lg">
                            <p className="text-white">Name</p>
                            <p className="text-white">Position</p>
                        </div>
                        <div className="grid grid-cols-2 px-5 py-2">
                            <p className="text-[#990100]">Lance Cabe</p>
                            <p className="text-[#990100]">Web Developer</p>
                        </div>
                        <hr className="text-[#990100]"/>
                    </div>


                </div>
            </div>

            

            
        </div>
    )
}

export default Dashboard;