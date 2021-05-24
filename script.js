let attendence_block = document.getElementById("attendence");
let add_attendence = document.getElementById("add_attendence");
add_attendence.addEventListener("click", function () {
  console.log("add");
  let attendence = document.createElement("div");
  attendence.classList.add("attendence_1");
  let newField_p = document.createElement("p");
  let newField_btn = document.createElement("button");
  newField_btn.classList.add("btn");
  newField_btn.classList.add("btn-primary");
  newField_btn.setAttribute("type", "button");
  newField_btn.setAttribute("data-bs-toggle", "collapse");
  newField_btn.setAttribute("data-bs-target", ".multi-collapse");
  newField_btn.setAttribute("aria-expanded", "false");
  newField_btn.setAttribute(
    "aria-controls",
    "multiCollapseExample1 multiCollapseExample2"
  );
  newField_btn.innerHTML = `<label for="">Attendence</label>`;
  newField_p.appendChild(newField_btn);
  let newField_div = document.createElement("div");
  newField_div.classList.add("row");
  newField_div.innerHTML = `<div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
          <input type="date" placeholder="date" id='attendence_date_1' class="form-control">
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
          <select name="" id="" class="form-control">
              <option value="">Present</option>
              <option value="">Absent</option>
          </select>
      </div>
    </div>
  </div>`;
  attendence.append(newField_p, newField_div);
  attendence_block.appendChild(attendence);
});

let remove_attendence = document.getElementById("remove_attendence");
remove_attendence.addEventListener("click", function () {
  // console.log('remove')
  let divs = document.getElementsByClassName("attendence_1");
  if (divs.length > 2) {
    attendence_block.removeChild(divs[divs.length - 1]);
  }
});

const add_assesment_review = document.getElementById("add_assesment_review");

const remove_assesment_review = document.getElementById(
  "remove_assesment_review"
);
const assesment_review_div =
  document.getElementsByClassName("assesment-review");

add_assesment_review.addEventListener("click", function () {
  let newReviewDiv = document.createElement("div");
  let all_assesment=document.getElementById('all-assesment')
  newReviewDiv.classList.add("assesment-review");
  newReviewDiv.innerHTML = `<p>
    <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2"><label for="">Assesment Review</label></button>
  </p>
  <div class="row">
    <div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample1">
        <div class="card card-body">
            <div class="form-group">
                <label for="">Type</label>
                <input type="text" name="" id="" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Submitted</label>
                <input type="text" name="" id="" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Submission-date</label>
                <input type="date" name="" id="" class="form-control">
            </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="collapse multi-collapse" id="multiCollapseExample2">
        <div class="card card-body">
            <div class="form-group">
                <label for="">Peers avg. grade</label>
                <input type="number" name="" id="" class="form-control">
            </div>
            <div class="form-group">
                <label for="">Grade</label>
                <input type="number" name="" id="" class="form-control">
            </div>
        </div>
      </div>
    </div>
  </div>`;
all_assesment.appendChild(newReviewDiv)
});


remove_assesment_review.addEventListener('click',function(){
    let all_assesment=document.getElementById('all-assesment')
    let assesment_review=document.getElementsByClassName('assesment-review')
    // console.log(assesment_review.length)

    // console.log(all_assesment.childElementCount)
    if(all_assesment.childElementCount>2){
     all_assesment.removeChild(assesment_review[assesment_review.length-1])   
    }
})

const form_box=document.getElementsByClassName('form-box')
console.log(form_box)

let count=0
const next=document.getElementById('next')
const previous=document.getElementById('previous')
const submit=document.getElementById('submit')
const list=document.getElementsByTagName('li')
let progress=document.getElementById('progress')
// console.log(progress.style)

if(count=0){
    previous.classList.remove('active')
    }
next.addEventListener('click',function(){
    
    count++
    list[count].classList.add('active')
    if (count>=form_box.length){
        count=form_box.length-1
    }
    console.log(count)
    form_box[count-1].classList.remove('active')
    form_box[count].classList.add('active')
    console.log(progress)
   if(count==1){
    progress.style.width='20%'
   }else if(count==2){
    progress.style.width='38%'
   }else if(count==3){
    progress.style.width='57%'
   }else if(count==4){
    progress.style.width='68%'
   }


    // console.log(previous)
    if (count>0){
        previous.classList.add('active')
    }

    console.log(form_box.length)

    if (count===form_box.length-1){
        submit.classList.add('active')
        next.classList.remove('active')
    }
})

previous.addEventListener('click',function(){
    if (count>0){
        list[count].classList.remove('active')
    }
    count--
    if (count<form_box.length-1){
        submit.classList.remove('active')
    }
    next.classList.add('active')
    form_box[count].classList.add('active')
    form_box[count+1].classList.remove('active')
    
    if (count==0){
        previous.classList.remove('active')
        progress.style.width='0%'
    }

    if(count==1){
      progress.style.width='20%'
     }else if(count==2){
      progress.style.width='38%'
     }else if(count==3){
      progress.style.width='57%'
     }else if(count==4){
      progress.style.width='68%'
     }


})