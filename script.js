const form = document.querySelector("form");
const username = document.getElementById("name");
const website = document.getElementById("website");
const email = document.getElementById("email");
const image = document.getElementById("image");
const male = document.getElementById("male");
const female = document.getElementById("female");
const html = document.getElementById("skill_1");
const css = document.getElementById("skill_2");
const javascript = document.getElementById("skill_3");
const php = document.getElementById("skill_4");
const java = document.getElementById("skill_5");
const springboot = document.getElementById("skill_6");
const c = document.getElementById("skill_7");
const C = document.getElementById("skill_8");
const dataset = document.querySelector(".dataset");
var img;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  let values = [];
  checkboxes.forEach((ele) => {
    values.push(ele.value);
  });

  dataset.innerHTML += `
        <div class="data">
            <div class="data_body">
                <h4>${username.value}</h4>
                <p class="gender">${
                  male.checked
                    ? male.value
                    : female.checked
                    ? female.value
                    : "other"
                }</p>
                <p class="email">${email.value}</p>
                <p class="website">${website.value}</p>
                <p class="skills">${values}</p>
            </div>
            <div class="image">
                <img src=${img} alt="Image"/>
            </div>
        </div>
        `;
  form.reset();
});

function clicked(){
  console.log("Successfully Submitted")
  alert("Successfully Submitted")
}

image.addEventListener("change", (e) => {
  img = URL.createObjectURL(e.target.files[0]);
});
