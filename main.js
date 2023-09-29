const formData = document.querySelector(".button");
const inpName = document.querySelector(".inp_name");
const inpPhoneNumber = document.querySelector(".inp_phone");
const inpPassword = document.querySelector(".inp_password");
const inpPasswordSecond = document.querySelector(".inp_password_second");

const setDataLS = newData => {
  const lsData = JSON.parse(localStorage.getItem("to-do"));
  if (!lsData) {
    localStorage.setItem("to-do", JSON.stringify([]));
  } else if (newData) {
    const dataArr = JSON.parse(localStorage.getItem("to-do"));
    dataArr.push(newData);
    localStorage.setItem("to-do", JSON.stringify(dataArr));
  }
};

setDataLS();

const setData = () => {
  if (
    !inpName.value.trim("") &&
    !inpPhoneNumber.value.trim("") &&
    !inpPassword.value.trim("") &&
    !inpPasswordSecond.value.trim("") &&
    inpPassword.value !== inpPasswordSecond.value
  ) {
    alert("Error");
  } else {
    const newData = {
      name: inpName.value,
      phone: inpPhoneNumber.value,
      password: inpPassword.value,
      passwordSecond: inpPasswordSecond.value,
    };
    setDataLS(newData);
    getDataLS();
    inpName.value = '';
    inpPhoneNumber.value = '';
    inpPassword.value = '';
    inpPasswordSecond.value = '';
  }
};

formData.addEventListener("click", setData);
const resultElem = document.querySelector('.result');


function getDataLS() {
   const data = JSON.parse(localStorage.getItem('to-do'));
   resultElem.innerHTML = '';
   data.forEach(
    item =>
    (resultElem.innerHTML += `
   <div class="card" style="width: 18rem;">
   <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${item.phone}</h6>
    <p class="card-text">${item.password}</p>
    <a href="#" class="card-link">DELETE</a>
    <a href="#" class="card-link">EDIT</a>
  </div>
</div>
 `
   ));
};

getDataLS();