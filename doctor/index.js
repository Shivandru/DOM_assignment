// fill in javascript code here
let myForm = document.querySelector("form");
let docName = document.querySelector("#name");
let docId = document.querySelector("#docID");
let docSpl = document.querySelector("#dept");
let docExp = document.querySelector("#exp");
let docEmail = document.querySelector("#email");
let docMobile = document.querySelector("#mbl");
let tBody = document.querySelector("tbody");
let allData = [];
myForm.addEventListener("submit", function(event){
    event.preventDefault();
    let role = "";
    if(docExp.value > 5) role = "Senior";
    else if(docExp.value >= 2 && docExp.value <= 5) role = "Junior";
    else if(docExp.value <= 1) role = "Trainee";
    let data = {
        dName: docName.value,
        dId: docId.value,
        dSpl: docSpl.value,
        dExp: docExp.value,
        dEmail: docEmail.value,
        dMobile: docMobile.value,
        empRole: role,
    }
    allData.push(data);
    tBody.innerHTML = "";
    allData.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let btn = document.createElement("button");

        td1.innerText = ele.dName;
        td2.innerText = ele.dId;
        td3.innerText = ele.dSpl;
        td4.innerText = ele.dExp;
        td5.innerText = ele.dEmail;
        td6.innerText = ele.dMobile;
        td7.innerText = ele.empRole;
        btn.innerText = "Delete";

        btn.style.backgroundColor = "red";
        btn.style.color = "white";
        btn.style.border = "none";
        btn.addEventListener("click", function(){
            tr.innerHTML = "";
        })
        tr.append(td1, td2, td3, td4, td5, td6, td7, btn);
        tBody.append(tr);
    })
    myForm.reset();
})

