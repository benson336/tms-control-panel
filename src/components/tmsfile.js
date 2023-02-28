import React, { Component, useState } from 'react';



export default function TMSFile(){

    return(
        <>

        <div style={{"position":"absolute", "left":"15%", "top":"840px", "width": "75%", "height":"636px"}}> 
            <div className="flex" >
                <div className="" style={{"width":"40%"}}>
                      
                            <div class="flex flex-col justify-start items-start relative gap-6 p-6 rounded-lg bg-white border border-[#dadada] mr-5 ">
                                <div class="flex-grow-0 flex-shrink-0 w-[440px] h-6 relative">
                                    <p class="absolute left-0 top-0 text-lg font-bold text-left text-black">File Manager</p>
                                    <p class="absolute left-[351px] top-0 text-xs font-bold text-right text-[#488492]">
                                    Rescan Barcode
                                    </p>
                                </div>
                                <div class="flex-grow-0 flex-shrink-0 w-[440px] h-6 relative">
                                    <div class="flex justify-start items-center absolute left-0 top-0 gap-3">
                                    <div
                                        class="flex-grow-0 flex-shrink-0 w-4 h-4 relative overflow-hidden rounded bg-white"
                                        style={{"box-shadow": "0px 1px 1px 0 rgba(0,0,0,0.1), 0px 0px 0px 1px rgba(70,79,96,0.16), 0px 2px 5px 0 rgba(89,96,120,0.1);"}}
                                    ></div>
                                    <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                        Exclude Linked File(s)
                                    </p>
                                    </div>
                                </div>
                                <div class="flex-grow-0 flex-shrink-0 w-[440px] h-[63px] relative bg-[#f9f9f9]">
                                    <div
                                    class="w-[440px] h-[63px] absolute left-[-1px] top-[-1px] rounded-md border border-[#d3d8de] border-dashed"
                                    ></div>
                                    <div class="w-[287px] h-6">
                                    <p class="absolute left-[117px] top-5 text-sm font-bold text-left">
                                        <span class="text-sm font-bold text-left text-[#777879]">Drag and drop or </span
                                        ><span class="text-sm font-bold text-left text-[#56a7fd]">click here to upload</span>
                                    </p>
                                    <svg
                                        width="25"
                                        height="24"
                                        viewBox="0 0 25 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-[24.89px] h-6 absolute left-[76px] top-5"
                                        preserveAspectRatio="xMidYMid meet"
                                    >
                                        <g clip-path="url(#clip0_4_1106)">
                                        <path
                                            d="M20.0667 10.04C19.3615 6.59 16.2193 4 12.4444 4C9.44741 4 6.84444 5.64 5.54815 8.04C2.42667 8.36 0 10.91 0 14C0 17.31 2.78963 20 6.22222 20H19.7037C22.5659 20 24.8889 17.76 24.8889 15C24.8889 12.36 22.763 10.22 20.0667 10.04ZM19.7037 18H6.22222C3.93037 18 2.07407 16.21 2.07407 14C2.07407 11.95 3.66074 10.24 5.76593 10.03L6.87556 9.92L7.39407 8.97C8.37926 7.14 10.3081 6 12.4444 6C15.1615 6 17.5052 7.86 18.0341 10.43L18.3452 11.93L19.9319 12.04C21.5496 12.14 22.8148 13.45 22.8148 15C22.8148 16.65 21.4148 18 19.7037 18V18ZM8.2963 13H10.9407V16H13.9481V13H16.5926L12.4444 9L8.2963 13Z"
                                            fill="#989A9C"
                                        ></path>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_4_1106">
                                            <rect width="24.8889" height="24" fill="white"></rect>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                    </div>
                                </div>
                            </div>
                    
                            <div class="flex flex-col justify-start items-start relative gap-6 p-6 rounded-lg bg-white border border-[#dadada] mr-5 mt-3">
                                <div class="flex-grow-0 flex-shrink-0 w-[440px] h-6 relative">
                                    <p class="absolute left-0 top-[-4px] text-lg font-bold text-left text-black">Notes</p>
                                    <p class="absolute left-[385px] top-0 text-xs font-bold text-right text-[#488492]">Add Note</p>
                                </div>
                                <div class="flex-grow-0 flex-shrink-0 w-[440px] h-[58px] relative rounded bg-white border border-[#dadada]">
                                    <p class="absolute left-3 top-2 text-sm text-left text-[#989a9c]">Enter notes</p>
                                </div>
                            </div>

                            <div class="flex flex-col justify-start items-start relative gap-6 p-6 rounded-lg bg-white border border-[#dadada] mr-5 mt-3">
                                <div class="flex-grow-0 flex-shrink-0 w-full h-6 relative">
                                    <p class="absolute left-0 top-[-4px] text-lg font-bold text-left text-black">Log Item</p>
                                    <p class="absolute left-[400px] top-0 text-xs font-bold text-right text-[#488492]">Add Log</p>
                                </div>
                                <div class="flex-grow-0 flex-shrink-0 w-full h-10 relative rounded-sm bg-white">
                                    <div class="w-full h-10 absolute left-[-1px] top-[-1px] rounded-sm bg-white border border-[#dadada]"></div>
                                    <p class="absolute left-[137px] top-2 text-sm text-left text-[#989a9c]">Message</p>
                                    <p class="absolute left-4 top-2 text-sm text-left text-black">Public</p>
                                    <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 absolute left-[88px] top-2"
                                    preserveAspectRatio="xMidYMid meet"
                                    >
                                    <g clip-path="url(#clip0_13_1136)">
                                        <path
                                        d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z"
                                        fill="#488492"
                                        ></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_13_1136"><rect width="24" height="24" fill="white"></rect></clipPath>
                                    </defs>
                                    </svg>
                                    <div class="w-px h-10 absolute left-[119px] top-[-1px] bg-[#d9d9d9]"></div>
                                </div>
                            </div>

                    
                </div>
                <div className="" style={{"width":"60%"}}>
                <div class="flex flex-col justify-start items-start relative gap-6 p-6 rounded-lg bg-white border border-[#dadada]">
                    <div class="flex-grow-0 flex-shrink-0 w-[696px] h-6 relative">
                        <p class="absolute left-0 top-[-4px] text-lg font-bold text-left text-black">Trip History</p>
                    </div>
                    <div class="flex-grow-0 flex-shrink-0 w-[696px] h-[441px] relative">
                        <div class="flex justify-start items-start absolute left-0 top-0 gap-6">
                        <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[35px]"
                        >
                            <p class="flex-grow-0 flex-shrink-0 text-[13px] font-bold text-left text-[#989a9c]">USER</p>
                            <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[37px]"
                            >
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Meilian (Seven) Xiao
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Meilian (Seven) Xiao
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Meilian (Seven) Xiao
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Meilian (Seven) Xiao
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">System Account</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">System Account</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Meilian (Seven) Xiao
                            </p>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[35px]"
                        >
                            <p class="flex-grow-0 flex-shrink-0 text-[13px] font-bold text-left text-[#989a9c]">TIME</p>
                            <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[37px]"
                            >
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 02:22:13
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 02:22:13
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 00:33:55
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 00:33:39
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 00:33:24
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 00:33:24
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                2023-01-12 00:33:24
                            </p>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[35px]"
                        >
                            <p class="flex-grow-0 flex-shrink-0 text-[13px] font-bold text-left text-[#989a9c]">TEXT</p>
                            <div
                            class="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 relative gap-[37px]"
                            >
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Delivery PRO# 1001109065 check-in
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Delivery PRO# 1001109065 check-out
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Pickup PRO# 1001109065 check-out
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Delivery PRO# 1001109065 check-in
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Updated: Trip type from LTL-USA to LTL-CA
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Updated: Dest Whse from [] to [BPK]
                            </p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">
                                Pickup PRO #1001109065 check-In
                            </p>
                            </div>
                        </div>
                        <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[35px]"
                        >
                            <p class="flex-grow-0 flex-shrink-0 text-[13px] font-bold text-left text-[#989a9c]">TYPE</p>
                            <div
                            class="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[37px]"
                            >
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            <p class="flex-grow-0 flex-shrink-0 text-sm text-left text-[#444545]">Internal</p>
                            </div>
                        </div>
                        </div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[31px] bg-[#cecece]"></div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[92px] bg-[#ececec]"></div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[153px] bg-[#ececec]"></div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[214px] bg-[#ececec]"></div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[275px] bg-[#ececec]"></div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[336px] bg-[#ececec]"></div>
                        <div class="w-[679px] h-px absolute left-[-1px] top-[397px] bg-[#ececec]"></div>
                        <svg
                        width="8"
                        height="409"
                        viewBox="0 0 8 409"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-[409px] h-2 absolute left-[703px] top-8"
                        preserveAspectRatio="none"
                        >
                        
                        
                        </svg>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        


        
        </>
    )
}

