import React, { Component, useState } from 'react';



export default function TMSTable(){

    const [tableState, setTableState] = useState({
        expanded: false
    });


    const toggleExpander = (e) =>{

        if (e.target.type === 'checkbox') return;

        if (!tableState.expanded) {
            setTableState({ expanded: true });
          } else {
              setTableState({ expanded: false }); 
            };
          
    }

    return (
        <>
        <div style={{"position":"absolute", "left":"15%", "top":"440px", "width": "75%", "height": "6.0rem"}}> 
            <div class="br-ra4" style={{"border":"3px solid #ececec"}}>
                <table class="unis-info-table">
                    <thead style={{"backgroundColor":"#f2f2f2"}}>
                        <tr>
                                <th></th>
                                <th>STOP#</th>
                                <th>STATUS</th>
                                <th>LOCATION</th>
                                <th>TOTAL START</th>
                                <th>TOTAL END</th>
                                <th>TOTAL TIME ELAPSED</th>
                                <th>TOOLS</th>
                    
                        </tr>
                    </thead>

                    <tbody>
                        <tr key="main" onClick={toggleExpander}>
                            <td><input className="uk-checkbox" type="checkbox" /></td>
                            <td className="uk-text-nowrap">1.</td>
                            <td><div class="ml-6 text-sm border-solid border-black bg-orange-200 text-amber-600 rounded-full text-xs py-1" style={{"width":"90px", "height":"25px"}}><p><strong>In Progress</strong></p></div></td>
                            <td>2339 Hermosa Cir Drive, Buena Park, CA 348394</td>
                            <td>0/0/0LB</td>
                            <td>120/120/130LB</td>
                            <td>10 min</td>
                        </tr>
                        <tr key="main" onClick={toggleExpander}>
                            <td><input className="uk-checkbox" type="checkbox" /></td>
                            <td className="uk-text-nowrap">2.</td>
                            <td><div class="ml-6 text-sm border-solid border-black bg-green-200 text-green-800 rounded-full text-xs py-1" style={{"width":"90px", "height":"25px"}}><p><strong>Completed</strong></p></div></td>
                            <td>235 lOS Alanito Cir Drive, Anaheim, CA 92833</td>
                            <td>0/0/0LB</td>
                            <td>120/120/130LB</td>
                            <td>10 min</td>
                        </tr>
                        <tr key="main" onClick={toggleExpander}>
                            <td><input className="uk-checkbox" type="checkbox" /></td>
                            <td className="uk-text-nowrap">3.</td>
                            <td><div class="ml-6 text-sm border-solid border-black bg-green-200 text-green-800 rounded-full text-xs py-1" style={{"width":"90px", "height":"25px"}}><p><strong>Completed</strong></p></div></td>
                            <td>3343 Rosemead Blvd, Rosemead, CA 928233</td>
                            <td>0/0/0LB</td>
                            <td>120/120/130LB</td>
                            <td>10 min</td>
                        </tr>
                    </tbody>
                </table>

                {tableState.expanded && 
                <div class="p-4 br-1 br-grey100 br-ra4">
                    <table class="unis-info-table">
                        <thead style={{"backgroundColor":"#f2f2f2"}}>
                            <tr>
                                    <th>TASK ID</th>
                                    <th>STATUS</th>
                                    <th>P/U#</th>
                                    <th>PRO#</th>
                                    <th>SHIPPER</th>
                                    <th>CONSIGNEE</th>
                                    <th>PLT/CTN/WT</th>  
                                    <th>APPOINTMENT</th>  
                                    <th>TOOLS</th> 
                            </tr>
                        </thead>
                        <tbody>
                            <tr key="main" onClick={toggleExpander}>
                                <td>PICKUP 1</td>
                                <td><div class="ml-6 text-sm border-solid border-black bg-orange-200 text-amber-600 rounded-full text-xs py-1" style={{"width":"90px", "height":"25px"}}><p>In Progress</p></div></td>
                                <td>4707389</td>
                                <td>10011909652</td>
                                <td>JANICE<br />77 Massachussets Ave<br /> Cambridge MA 02933</td>
                                <td>Carmen<br />938 Flossom Ave<br /> Sacramento CA 02933</td>
                                <td>2602 / 1000 /1000 LBS</td>
                                <td>01/01/2023 <br />12:00AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}

                
            </div>
            

        

           
        </div>
               
        </>
    );
       
            
}

