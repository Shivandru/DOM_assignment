// fill in javascript code here
let myForm = document.querySelector("form");
let empName = document.querySelector("#name");
let empId = document.querySelector("#employeeID");
let empDept = document.querySelector("#department");
let empExp = document.querySelector("#exp");
let empEmail = document.querySelector("#email");
let mobile = document.querySelector("#mbl");
let allData = [];
let tBody = document.querySelector("tbody");

document.getElementById('hello').addEventListener("submit", function(event){
    event.preventDefault();

    let data = {
        nameEmp: empName.value,
        idEmp: empId.value,
        deptEmp: empDept.value,
        expEmp: empExp.value,
        emailEmp: empEmail.value,
        mobEmp: mobile.value,
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
        td1.innerText = ele.nameEmp;
        td2.innerText = ele.idEmp;
        td3.innerText = ele.deptEmp;
        td4.innerText = ele.expEmp;
        td5.innerText = ele.emailEmp;
        td6.innerText = ele.mobEmp;
        btn.innerText = "Delete";

        if(Number(ele.expEmp) > 5) td7.innerText = "Senior";
        else if(Number(ele.expEmp) >= 2 && Number(ele.expEmp) <= 5) td7.innerText = "Junior";
        else if(Number(ele.expEmp) <= 1) td7.innerText = "Fresher"
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