import React, { Component, useState } from 'react';



export default function TMSSearch(){

    return (
        <>
        <div style={{"position":"absolute", "right":"0px", "top":"65px", "width": "88%", "height": "4.0rem"}} class="bg-gray-100 flex">
            <div class="flex justify-center items-center ml-4" style={{"width": "100%"}}>
                <div class="unis-search-down unis-search-compact" style={{"width": "80%", "borderRadius":"20px"}}>
                    <span class="left">
                        <i class="icon-7 f-24"></i>
                    </span>
                    <input type="text" placeholder="Search by Pickup #, Order #, PRO #, Linehaul #, or Dispatch #" class="f-14 h-40" />
                </div>
            </div> 
        </div>


        </>
    );

}