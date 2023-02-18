import React, { Component, useState } from 'react';



export default function TMSTable(){

    return (
        <>
        
        <div style={{"position":"absolute", "right":"0px", "top":"160px", "width": "88%", "height": "4.0rem"}} class="bg-slate-50 flex items-center">

            <div class="bg-slate-50 flex items-center font-bold ml-16">
                <div>
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="ml-6"><h2>Trip #1601685</h2>
                </div>
                <div class="ml-6 text-sm border-solid border-black bg-orange-200 text-amber-600 rounded-full text-xs py-1" style={{"width":"90px", "height":"25px"}}>
                <p>In Progress</p>
                </div>
            </div>

        </div>

        <div style={{"position":"absolute", "left":"15%", "top":"240px", "width": "75%", "height": "6.0rem", "border":"2px solid rgb(226 232 240)"}} class="bg-slate-50 flex justify-evenly items-center rounded">
            <div class="text-left text-xs">
                <p><span class="text-slate-500 font-medium">CARRIER</span></p>
                <h5><span class="text-base font-bold">Seven IN 46356</span></h5>
            </div>

            <div class="text-lef text-xs">
                <p><span class="text-slate-500 font-medium">DRIVER</span></p>
                <h5><span class="text-base font-bold">John Doe</span></h5>
            </div>

            <div class="text-left text-xs">
                <p><span class="text-slate-500 font-medium">DISPATCHER NAME</span></p>
                <h5><span class="text-base font-bold">John Doe</span></h5>
            </div>

            <div class="text-left text-xs">
                <p><span class="text-slate-500 font-medium">CREATE DATE & TIME</span></p>
                <h5><span class="text-base font-bold">01/20/2023 12:00PM</span></h5>
            </div>

            <div class="text-left text-xs">
                <p><span class="text-slate-500 font-medium">TIME ELAPSED</span></p>
                <h5><span class="text-base font-bold">3 hrs 2 min</span></h5>
            </div>

            <div class="text-slate-200 ml-16">
                |
            </div>

            <div>
                <button class="unis-btn unis-btn-primary" style={{"padding":"10px 15px", "font-size":"14px"}}><i class="icon-32 f-18 mr-2"></i>Enabled</button>
            </div>

            <div>
                <button class="unis-btn unis-btn-secondary" style={{"padding":"10px 15px", "font-size":"14px"}}><i class="icon-32 f-18 mr-2"></i>Enabled</button>
            </div>
            

        </div>


        <div style={{"position":"absolute", "left":"15%", "top":"340px", "width": "75%", "height": "6.0rem"}} class="bg-slate-50 flex items-center rounded">
            <div class="flex text-left text-sm" style={{"width":"75%"}}>
                <div style={{"width":"30%"}}>
                    <input type="text" value="Text Here" class="unis-input inactive"/>
                </div>

                <div class="unis-select unis-dropdown" style={{"width":"15%"}}>
                    <input type="button" value="data" />
                </div>

                <div class="ml-5" style={{"width":"20%"}}>
                    <button class="unis-btn unis-btn-primary">Add</button>
                </div>
            </div>

           
            <div class="flex justify-end text-sm" style={{"width":"30%"}}>
                <div>
                    <button class="unis-btn unis-btn-secondary">Expand All</button>
                </div>
            </div>
        </div>



       
            
            {/*<div class=" p-4 br-1 br-grey100 br-ra4">
                <table class="unis-info-table">
                    <thead>
                        <tr>
                                <th></th>
                                <th>Invoice #</th>
                                <th>PRO #</th>
                                <th>Issue date</th>
                                <th>Due date</th>
                                <th>Status
                                    <i class="icon-78 ml-2  "></i>
                                </th>
                                <th>Total amount</th>
                                <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                <td>
                                    <input type="checkbox" name="layout" id="invoice1" class="unis-checkbox" />
                                    <label for="invoice1">
                                        <span class="pl-3_5"></span>
                                    </label>
                                </td>
                                <td>2773225-1</td>
                                <td>PRO-1234567</td>
                                <td class="ft-red900">12/12/2021</td>
                                <td>12/21/2021</td>
                                <td>
                                    <button class="unis-token bg-red200 ft-red900 ">Past due</button>
                                </td>
                                <td class="f-b f-16">$10,000.00</td>
                                <td>
                                    <button class="unis-btn unis-btn-link compact f-16">Pay invoice</button>
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    <input type="checkbox" name="layout" id="invoice2" class="unis-checkbox" />
                                    <label for="invoice2">
                                        <span class="pl-3_5"></span>
                                    </label>
                                </td>
                                <td>2773225-1</td>
                                <td>PRO-1234567</td>
                                <td class="ft-red900">12/12/2021</td>
                                <td>12/21/2021</td>
                                <td>
                                    <button class="unis-token bg-red200 ft-red900 ">Past due</button>
                                </td>
                                <td class="f-b f-16">$10,000.00</td>
                                <td>
                                    <button class="unis-btn unis-btn-link compact f-16">Pay invoice</button>
                                </td>
                        </tr>
                        <tr>
                                <td>
                                    <input type="checkbox" name="layout" id="invoice3" class="unis-checkbox" />
                                    <label for="invoice3">
                                        <span class="pl-3_5"></span>
                                    </label>
                                </td>
                                <td>2773225-1</td>
                                <td>PRO-1234567</td>
                                <td class="">12/12/2021</td>
                                <td>12/21/2021</td>
                                <td>
                                    <button class="unis-token bg-red200 ft-red900 ">Past due</button>
                                </td>
                                <td class="f-b f-16">$10,000.00</td>
                                <td>
                                    <button class="unis-btn unis-btn-link compact f-16">Pay invoice</button>
                                </td>
                        </tr>
                    </tbody>
                </table>
            </div>*/}
        


        {/*<div>
            <h5>CARRIER</h5>
            <p>Seven IN 46356</p>
        </div>

        <div>
            <h5>DRIVER</h5>
            <p>John Doe</p>
        </div>

        <div>
            <h5>DISPATCHER NAME</h5>
            <p>Jane Doe</p>
        </div>

        <div>
            <h5>
            </h5>
    </div>*/}
        </>
        )

}