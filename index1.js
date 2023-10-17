// this section is for excluded date picker
const myarr = [];
function addDate() {
  let excludedDate = document.getElementById("ExcludedDate").value;
  myarr.push(excludedDate);
}
//--------------
const startdate = document.getElementById("StartDate");

StartDate.addEventListener("input", function () {
  console.log(startdate.value);
});

//----------------------------------------
function AddData() {
  const tbodyEl = document.querySelector("tbody");
  const startdate = document.getElementById("StartDate").value;
  const enddate = document.getElementById("EndDate").value;

  let startdateFormet = new Date(document.getElementById("StartDate").value);
  let enddateFormet = new Date(document.getElementById("EndDate").value);
  let month = new Date(startdate).getMonth();
  const leadCount = document.getElementById("leadCount").value;
  const dateDiff = enddateFormet.getDate() - startdateFormet.getDate();
  const currentDate = new Date().toLocaleString();

  tbodyEl.innerHTML += `
  <tr>
  <td>nill</td>
  <td>25</td>
  <td>${startdate}</td>
  <td>${enddate}</td>
  <td>${month + 1}</td>
  <td>${myarr}</td>
  <td>${dateDiff - myarr.length}</td>
  <td>${leadCount}</td>
  <td>${leadCount / (dateDiff - myarr.length)}</td>
  <td>${currentDate}</td>

  </tr>`;
}
