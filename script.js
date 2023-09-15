// script.js
const toggleButton = document.getElementById("toggleButton");
const basep = document.getElementById("base");
const topp=document.getElementById("top");


const droppable=document.getElementById("pizza");

const dragcrust=document.querySelectorAll("#dcrust");

const dragtop=document.querySelectorAll("#dtop");

let bs="";

dragcrust.forEach((crust)=>
crust.addEventListener("dragstart",e=>{
    
    let selected=e.target.getAttribute("class");
    
    droppable.addEventListener("dragover",e=>{
        e.preventDefault();
    })
    droppable.addEventListener("drop",e=>{
        // droppable.appendChild(selected);
        droppable.classList.add(selected)
        if(bs==="")
        {
            basep.classList.toggle("hidden");
            topp.classList.toggle("hidden");
        }
        bs=selected;
    })

})
)



dragtop.forEach((crust)=>
crust.addEventListener("dragstart",e=>{
    
    let s=e.target.getAttribute("class");
    droppable.addEventListener("dragover",e=>{
        e.preventDefault();
    })

    let i=droppable.getAttribute("class");
    let k="";
    if(i==="base1")
    {
    if(s==="pepp")
    k="pepp1";
    else if(s==="caps")
    k="caps1";
    else
    k="oliv1";
    }
    else if(i==="base2")
    {
        if(s==="pepp")
        k="pepp2";
        else if(s==="caps")
        k="caps2";
        else
        k="oliv2";
    }
    else if(bs==="base1")
    {
    if(i==="cp1"||i==="po1"||i==="oc1")
    {
    k="cpo1";
    }    
    else if(s==="pepp")
    {
    if(i=="caps1")
    k="cp1";
    if(i=="oliv1")
    k="po1";
    }   
    else if(s==="caps")
    {
        if(i=="pepp1")
        k="cp1";
        if(i=="oliv1")
        k="oc1";
    }
    else
    {
        if(i=="caps1")
        k="oc1";
        if(i=="pepp1")
        k="po1";
    }
    }
    else
    {
        if(i==="cp2"||i==="po2"||i==="oc2")
        {
        k="cpo2";
        }
        else if(s==="pepp")
        {
        if(i=="caps2")
        k="cp2";
        if(i=="oliv2")
        k="po2";
        }   
        else if(s==="caps")
        {
            if(i=="pepp2")
            k="cp2";
            if(i=="oliv2")
            k="oc2";
        }
        else
        {
            if(i=="caps2")
            k="oc2";
            if(i=="pepp2")
            k="po2";
        }
    }


    droppable.addEventListener("drop",e=>{
        droppable.classList.toggle(i)
        droppable.classList.add(k)
        crust.setAttribute("draggable",false);
    })

})
)


