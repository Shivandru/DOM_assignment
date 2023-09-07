let myForm = document.querySelector("form");
let taskInp = document.querySelector("#task");
let selPrior = document.querySelector("#priority");
let allData = [];
let tBody = document.querySelector("tbody");

myForm.addEventListener("submit", function(event){
    event.preventDefault();
    let data = {
        inpTask : taskInp.value,
        priorSelect : selPrior.value
    }
    allData.push(data);
    tBody.innerHTML = "";
    allData.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        td1.innerText = ele.inpTask;
        td2.innerText = ele.priorSelect;
        if(ele.priorSelect == "High")
        td2.style.backgroundColor = "red";
        else td2.style.backgroundColor = "green";
        tr.append(td1, td2);
        tBody.append(tr)
        
    })
    myForm.reset();
})

