
function Login(){
    
    return(
        <div> 
            <div className="flex flex-row h-screen">

                {/* LEFT SIDE */}

                <div className="basis-7/15 flex items-center justify-center">
                    <div>

                        <h1 className="text-4xl font-bold text-[#483D3D] pb-[10px]">SIGN IN</h1>
                        <p className="text-lg pb-[30px]">LOGIN TO YOUR ACCOUNT</p>

                        <p className="text-lg font-bold text-[#483D3D] pb-2">USERNAME</p>
                        <input type="text" name="username" placeholder='Enter Username' className="bg-[#ffffff] rounded-lg border border-black focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 h-11 w-95 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 shadow-lg" required/>


                        <p className="text-lg font-bold text-[#483D3D] pt-5 pb-2">PASSWORD</p>
                        <input type="password" name="password" placeholder='Enter Password' className="bg-[#ffffff] rounded-lg border border-black focus:border-gray-300 focus:bg-white focus:ring-2 focus:ring-gray-200 h-11 w-95 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 shadow-lg" required/>

                        <br />

                        <div class="pt-8 flex gap-6">
                            <button type="submit" 
                                className="text-white bg-[#990100] border-0 py-2 px-6 w-95 focus:outline-none hover:bg-[#ad3332] rounded text-lg contact-btn transform hover:scale-105 hover:shadow-lg text-center rounded-3xl">
                                LOGIN
                            </button>
                        </div>      
                    </div>
                </div>

                {/* RIGHT SIDE */}

                <div className="basis-8/15 bg-[#EDEDED] flex items-center justify-center h-screen">
                    <img className = "" src="arise-logo-login.png" alt="Profile" width={'518px'} height={'336px'}/>
                </div>
            </div>
            
        </div>
    );
}
 

export default Login;

