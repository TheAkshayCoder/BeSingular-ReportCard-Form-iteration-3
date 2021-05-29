let attendence_number = 3;

var formDataGlobal = {};

var status;

const attendence_block = document.getElementById(
  "accordionPanelsStayOpenExample"
);
let add_attendence = document.getElementById("add_attendence");
add_attendence.addEventListener("click", function () {
  attendence_number++;
  console.log("add");
  let attendence = document.createElement("div");
  attendence.classList.add("accordion-item");
  attendence.setAttribute("id", attendence_number);
  attendence.innerHTML = `
  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <label for="">Attendence-${attendence_number}</label>
    </button>
  </h2>
  <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
    <div class="accordion-body">
    <form id='innerFormAttendece_${attendence_number}'>
        <input type="date" placeholder="date" name='attendence[${attendence_number}][date]' id='attendence_date_${attendence_number}' name="Date" class="form-control">
        <select name="attendence[${attendence_number}][status]" id="attendence-${attendence_number}" class="form-control">
            <option value="Status">--Status--</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
        </select>
        </form>
        <div class="error" id="attendence_${attendence_number}_error"></div>
        <button type="button" class="btn btn-danger" onclick='remove(this)' id="remove_attendence_${attendence_number}">Remove</button>
    </div>
  </div>`;
  attendence_block.appendChild(attendence);
  return attendence_number;
});

const next = document.getElementById("next");
next.addEventListener("click", function () {
  for (i = attendence_number; i > 3; i--) {
    console.log("in for loop");
    const attendence_dates = document.getElementById("attendence_date_" + i);
    const attendence_dates_error = document.getElementById(
      "attendence_" + i + "_error"
    );
    const attendence_status = document.getElementById("attendence-" + i);
    console.log("check", attendence_dates);
    if (attendence_dates.value.length == 0) {
      attendence_dates_error.classList.add("active_attendence");
      attendence_dates_error.innerHTML = `**Please Enter the date`;
    } else if (
      attendence_status.options[attendence_status.selectedIndex].text ==
      "--Status--"
    ) {
      attendence_dates_error.innerHTML = "";
      attendence_dates_error.innerHTML =
        "**Please Enter the status(Present/Absent)";
    }
  }
});

let remove_btn = document.getElementsByClassName("btn-danger");
// console.log(remove_btn)

function remove(el) {
  attendence_number--;
  console.log(el.parentElement.parentElement.parentElement);
  el.parentElement.parentElement.parentElement.remove();
}

// let remove_attendence = document.getElementById("remove_attendence_",attendence_number);
// remove_attendence.addEventListener("click", function () {
//   // console.log('remove')
//   let divs = document.getElementsByClassName("attendence_1");
//   if (divs.length > 2) {
//     attendence_block.removeChild(divs[divs.length - 1]);
//   }
// });

const add_assesment_review = document.getElementById("add_assesment_review");
let assesment_number = 3;
const remove_assesment_review = document.getElementById(
  "remove_assesment_review"
);

const all_assesment = document.getElementsByClassName("all-assesment");
const assesment_review_div =
  document.getElementsByClassName("assesment-review");

add_assesment_review.addEventListener("click", function () {
  assesment_number++;
  let accordin_div = document.createElement("div");
  accordin_div.classList.add("accordion-item");
  accordin_div.innerHTML =
    `
                                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                                <label for="">Assesment Review-` +
    assesment_number +
    `</label>
                                            </button>
                                          </h2>
                                          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                            <div class="accordion-body">
                                                <div class="card card-body">
                                                    <div class="form-group">
                                                        <label for="">Type</label>
                                                        <input type="text" name="assesmentReview[${assesment_number}][type]" id="type-${assesment_number}" class="form-control" required>
                                                        <div class="error" id="type_error"></div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Submitted</label>
                                                        <input type="text" name="assesmentReview[${assesment_number}][submitted]" id="submit-${assesment_number}" class="form-control" required>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="">Submission-date</label>
                                                        <input type="date" name="assesmentReview[${assesment_number}][submissionDate]" id="submission-${assesment_number}" class="form-control" required>
                                                    </div>
                                                    <div class="card card-body">
                                                        <div class="form-group">
                                                            <label for="">Peers avg. grade</label>
                                                            <input type="number" name="assesmentReview[${assesment_number}]peersAvgGrade" id="peersAvg-${assesment_number}" class="form-control" required>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="">Grade</label>
                                                            <input type="number" name="assesmentReview[${assesment_number}]grade" id="grade-${assesment_number}" class="form-control" required>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                          </div>`;
  all_assesment[0].appendChild(accordin_div);
});

remove_assesment_review.addEventListener("click", function () {
  let all_assesment = document.getElementsByClassName("all-assesment");
  let assesment_review = document.getElementsByClassName("accordion-item");
  // console.log(assesment_review.length)

  // console.log(all_assesment.childElementCount)
  if (all_assesment[0].childElementCount > 2) {
    assesment_number--;
    all_assesment[0].removeChild(assesment_review[assesment_review.length - 1]);
  } else if (all_assesment[0].childElementCount == 2) {
    alert("Assesment review should be atleast two!");
  }
});

const form_box = document.getElementsByClassName("form-box");
console.log(form_box);

let count = 0;
const previous = document.getElementById("previous");

const list = document.getElementsByTagName("li");
let progress = document.getElementById("progress");
// console.log(progress.style)

if ((count = 0)) {
  previous.classList.remove("active");
}

// Next button
next.addEventListener("click", (e) => {
  let myForm = document.getElementById("my-form");
  // console.log(myForm);
  let formData = new FormData(myForm);

  // formData.append('assesment',[1,2,3,4])
  // console.log(formData)
  formData.forEach((element, value) => {
    // console.log(value,element);
    formDataGlobal[value] = element;
  });

  

  // Validation
  const full_name = document.getElementById("full-name");
  const full_name_error = document.getElementById("full-name-error");
  const Registered_email_id = document.getElementById("Registered-email-id");
  const email_error = document.getElementById("email-error");
  const gender = document.getElementById("gender");
  const gender_error = document.getElementById("gender-error");
  const age = document.getElementById("age");
  const age_error = document.getElementById("age-error");
  const course_name = document.getElementById("course-name");
  const course_name_error = document.getElementById("course-name-error");
  const course_information = document.getElementById("course-information");
  const course_information_error = document.getElementById(
    "course-information-error"
  );
  const age_grade = document.getElementById("age-grade");
  const age_grade_error = document.getElementById("age-grade-error");
  const no_of_sessions = document.getElementById("no.-of-sessions");
  const no_of_error = document.getElementById("no-of-error");
  const session_frequency_error = document.getElementById(
    "session-frequency-error"
  );
  const session_frequency = document.getElementById("session-frequency");
  const duration_per_session = document.getElementById("duration-per-session");
  const duration_per_session_error = document.getElementById(
    "duration_per_session_error"
  );
  const country_error = document.getElementById("country-error");
  const country = document.getElementById("country");
  const timezone_error = document.getElementById("timezone-error");
  const timezone = document.getElementById("timezone");
  const date_of_report_error = document.getElementById("date_of_report_error");
  const date_of_report = document.getElementById("date_of_report");
  const No_of_sessions_completed_error = document.getElementById(
    "No_of_sessions_completed_error"
  );
  const No_of_sessions_completed = document.getElementById(
    "No._of_sessions_completed"
  );
  const missed_sessions_error = document.getElementById(
    "missed_sessions_error"
  );
  const missed_sessions = document.getElementById("missed_sessions");
  const sessions_rescheduled_error = document.getElementById(
    "sessions_rescheduled_error"
  );
  const sessions_rescheduled = document.getElementById("sessions_rescheduled");
  const attendence_1 = document.getElementById("attendence-1");
  const attendence_1_error = document.getElementById("attendence_1_error");
  const attendence_2 = document.getElementById("attendence-2");
  const attendence_2_error = document.getElementById("attendence_2_error");
  const attendence_3 = document.getElementById("attendence-3");
  const attendence_3_error = document.getElementById("attendence_3_error");
  const attendence_date_1 = document.getElementById("attendence_date_1");
  const attendence_date_2 = document.getElementById("attendence_date_2");
  const attendence_date_3 = document.getElementById("attendence_date_3");
  const topics_covered_error = document.getElementById("topics_covered_error");
  const topics_covered = document.getElementById("topics_covered");
  const learning_outcomes_error = document.getElementById(
    "learning_outcomes_error"
  );
  const learning_outcomes = document.getElementById("learning_outcomes");
  const UNSDGs_knowledge_rating_error = document.getElementById(
    "UNSDGs_knowledge_rating_error"
  );
  const UNSDGs_knowledge_rating = document.getElementById(
    "UNSDGs_knowledge_rating"
  );
  const overall_performance_rating_error = document.getElementById(
    "overall_performance_rating_error"
  );
  const overall_performance_rating = document.getElementById(
    "overall_performance_rating"
  );
  const radical_thinker_error = document.getElementById(
    "radical_thinker_error"
  );
  const radical_thinker = document.getElementById("radical_thinker");
  const innovative_thinker_error = document.getElementById(
    "innovative_thinker_error"
  );
  const innovative_thinker = document.getElementById("innovative_thinker");
  const quality_obesession_error = document.getElementById(
    "quality_obesession_error"
  );
  const quality_obesession = document.getElementById("quality_obesession");
  const hands_on_skills_error = document.getElementById(
    "hands_on_skills_error"
  );
  const hands_on_skills = document.getElementById("hands_on_skills");
  const big_dreamer_error = document.getElementById("big_dreamer_error");
  const big_dreamer = document.getElementById("big_dreamer");
  const impactful_approach_error = document.getElementById(
    "impactful_approach_error"
  );
  const impactful_approach = document.getElementById("impactful_approach");
  const strong_points_error = document.getElementById("strong_points_error");
  const strong_points = document.getElementById("strong_points");
  const weak_points_error = document.getElementById("weak_points_error");
  const weak_points = document.getElementById("weak_points");
  const other_suggestions_error = document.getElementById(
    "other_suggestions_error"
  );
  const other_suggestions = document.getElementById("other_suggestions");

  // Page-1 validation
  if (count == 0) {
    if (full_name.value.length == 0) {
      full_name_error.classList.add("active");
      full_name_error.innerHTML = `**Please enter name of student`;
    } else if (full_name.value.length < 3 && full_name.value.length > 0) {
      full_name_error.classList.add("active");
      full_name_error.innerHTML = `**Please enter valid name`;
    } else if (Registered_email_id.value.length < 5) {
      email_error.classList.add("active");
      email_error.innerHTML = `**Please enter a valid mail id`;
    } else if (
      gender.options[gender.selectedIndex].text == "--Select Gender--"
    ) {
      gender_error.innerHTML = `**Please select the gender`;
      gender_error.classList.add("active");
    } else if (age.value <= 5) {
      age_error.classList.add("active");
      age_error.innerHTML = `**Please enter age greater then 5 years`;
    } else if (
      full_name.value.length >= 3 &&
      Registered_email_id.value.length > 5 &&
      Registered_email_id.value.includes("@") &&
      Registered_email_id.value.includes(".") &&
      (gender.options[gender.selectedIndex].text == "Male" ||
        gender.options[gender.selectedIndex].text == "Female") &&
      age.value > 5
    ) {
      full_name_error.classList.remove("active");
      gender_error.classList.remove("active");
      email_error.classList.remove("active");
      age_error.classList.remove("active");

      count++;
      list[count].classList.add("active");
      if (count >= form_box.length) {
        count = form_box.length - 1;
      }
      console.log(count);
      form_box[count - 1].classList.remove("active");
      form_box[count].classList.add("active");
      console.log(progress);
      if (count == 1) {
        progress.style.width = "20%";
      } else if (count == 2) {
        progress.style.width = "38%";
      } else if (count == 3) {
        progress.style.width = "57%";
      } else if (count == 4) {
        progress.style.width = "68%";
      }

      if (count > 0) {
        previous.classList.add("active");
      }

      console.log(form_box.length);

      if (count === form_box.length - 1) {
        submit.classList.add("active");
        next.classList.remove("active");
      }
    }
  }

  // Page-2 validation
  else if (count == 1) {
    if (course_name.value.length < 1) {
      course_name_error.classList.add("active");
      course_name_error.innerHTML = `**Please enter the course name`;
    } else if (course_information.value.length < 1) {
      course_information_error.classList.add("active");
      course_information_error.innerHTML = `**Please enter the course name`;
    } else if (
      age_grade.options[age_grade.selectedIndex].text == "--Select Age Grade--"
    ) {
      age_grade_error.classList.add("active");
      age_grade_error.innerHTML = `**Please Select the age grade`;
    } else if (no_of_sessions.value < 2) {
      no_of_error.classList.add("active");
      no_of_error.innerHTML = `**Please Enter right no. of sessions`;
    } else if (
      session_frequency.options[session_frequency.selectedIndex].text ==
      "--Select Session Frequency--"
    ) {
      session_frequency_error.classList.add("active");
      session_frequency_error.innerHTML = `**Please select the session frequency per week`;
    } else if (duration_per_session.value < 10) {
      duration_per_session_error.classList.add("active");
      duration_per_session_error.innerHTML = `**Please enter the right amount of time in minutes`;
    } else if (country.value.length < 1) {
      country_error.classList.add("active");
      country_error.innerHTML = `**Please enter the country`;
    } else if (timezone.value.length < 7) {
      timezone_error.classList.add("active");
      timezone_error.innerHTML = `**Please enter the right timezone`;
    } else {
      course_name_error.classList.remove("active");
      course_information_error.classList.remove("active");
      age_grade_error.classList.remove("active");
      no_of_error.classList.remove("active");
      session_frequency_error.classList.remove("active");
      duration_per_session_error.classList.remove("active");
      country_error.classList.remove("active");
      timezone_error.classList.remove("active");

      count++;
      list[count].classList.add("active");
      if (count >= form_box.length) {
        count = form_box.length - 1;
      }
      console.log(count);
      form_box[count - 1].classList.remove("active");
      form_box[count].classList.add("active");
      console.log(progress);
      if (count == 1) {
        progress.style.width = "20%";
      } else if (count == 2) {
        progress.style.width = "38%";
      } else if (count == 3) {
        progress.style.width = "57%";
      } else if (count == 4) {
        progress.style.width = "68%";
      }

      if (count > 0) {
        previous.classList.add("active");
      }

      console.log(form_box.length);

      if (count === form_box.length - 1) {
        submit.classList.add("active");
        next.classList.remove("active");
      }
      const my_form_2 = document.getElementById("my-form-2");
      let myForm2 = new FormData(my_form_2);

      myForm2.forEach((data, index) => {
        // console.log(index,data)
        formDataGlobal[index] = data;
      });

      // formDataGlobal.forEach((data,index)=>{
      //     console.log(index,data)
      // })
      console.log(formDataGlobal);
    }
  }

  // Page-3 validation
  else if (count == 2) {
    console.log(formDataGlobal);

    if (date_of_report.value.length < 1) {
      date_of_report_error.classList.add("active");
      date_of_report_error.innerHTML = `**Please enter the date of report`;
    } else if (No_of_sessions_completed.value < 1) {
      No_of_sessions_completed_error.classList.add("active");
      No_of_sessions_completed_error.innerHTML = `**Please enter the no. of sessions`;
    } else if (missed_sessions.value.length < 1) {
      missed_sessions_error.classList.add("active");
      missed_sessions_error.innerHTML = `**Please enter total missed sessions`;
    } else if (sessions_rescheduled.value.length < 1) {
      sessions_rescheduled_error.classList.add("active");
      sessions_rescheduled_error.innerHTML = `**Please enter the no. of rescheduled sessions`;
    } else if (attendence_date_1.value.length == 0) {
      attendence_1_error.classList.add("active_attendence");
      attendence_1_error.innerHTML = `**Please Enter the date`;
    } else if (
      attendence_1.options[attendence_1.selectedIndex].text == "--Status--"
    ) {
      attendence_1_error.innerHTML = "";
      attendence_1_error.innerHTML = `**Please enter the status(Present or absent)`;
    } else if (attendence_date_2.value.length == 0) {
      attendence_2_error.classList.add("active_attendence");
      attendence_2_error.innerHTML = `**Please Enter the date`;
    } else if (
      attendence_2.options[attendence_2.selectedIndex].text == "--Status--"
    ) {
      attendence_2_error.innerHTML = "";
      attendence_2_error.innerHTML = `**Please enter the status(Present or absent)`;
    } else if (attendence_date_3.value.length == 0) {
      attendence_3_error.classList.add("active_attendence");
      attendence_3_error.innerHTML = `**Please Enter the date`;
    } else if (
      attendence_3.options[attendence_3.selectedIndex].text == "--Status--"
    ) {
      attendence_3_error.innerHTML = "";
      attendence_3_error.innerHTML = `**Please enter the status(Present or absent)`;
    } else if (topics_covered.value.length == 0) {
      console.log("hello");
      topics_covered_error.classList.add("active");
      topics_covered_error.innerHTML = `**Please enter the topics covered`;
    } else if (learning_outcomes.value.length < 1) {
      learning_outcomes_error.classList.add("active");
      learning_outcomes_error.innerHTML = `**Please enter the learning outcomes`;
    } else {
      date_of_report_error.classList.remove("active");
      No_of_sessions_completed_error.classList.remove("active");
      missed_sessions_error.classList.remove("active");
      sessions_rescheduled_error.classList.remove("active");
      topics_covered_error.classList.remove("active");
      learning_outcomes_error.classList.remove("active");

      count++;
      list[count].classList.add("active");
      if (count >= form_box.length) {
        count = form_box.length - 1;
      }
      console.log(count);
      form_box[count - 1].classList.remove("active");
      form_box[count].classList.add("active");
      console.log(progress);
      if (count == 1) {
        progress.style.width = "20%";
      } else if (count == 2) {
        progress.style.width = "38%";
      } else if (count == 3) {
        progress.style.width = "57%";
      } else if (count == 4) {
        progress.style.width = "68%";
      }

      if (count > 0) {
        previous.classList.add("active");
      }

      // console.log(form_box.length);

      if (count === form_box.length - 1) {
        submit.classList.add("active");
        next.classList.remove("active");
      }

      // const my_form_3=document.getElementById('form-3')
      // let myForm3= new FormData(my_form_3)
      // console.log(myForm3)

      let attendenceValue = [];
      for (i = 1; i <= attendence_block.childElementCount; i++) {
        let attendence_date = document.getElementById(
          "attendence_date_" + i
        ).value;
        // console.log('att. date',attendence_date)
        let attendence_status = document.getElementById("attendence-" + i);
        let attendence_status_value =
          attendence_status.options[attendence_status.selectedIndex].text;
        // console.log('att. status',attendence_status_value)
        var attendenceObj = {
          id: i,
          date: attendence_date,
          status: attendence_status_value,
        };

        attendenceValue.push(attendenceObj);
      }

      formDataGlobal["dor"] = date_of_report.value;
      formDataGlobal["numberOfSessionCompleted"] =
        No_of_sessions_completed.value;
      formDataGlobal["numberOfMissedSession"] = missed_sessions.value;
      formDataGlobal["numberOfSessionRescheduled"] = sessions_rescheduled.value;
      formDataGlobal["attendence"] = attendenceValue;
      formDataGlobal["topicsCovered"] = topics_covered.value;
      formDataGlobal["learningOutcomes"] = learning_outcomes.value;

      //   formDataGlobal.forEach((data,index)=>{

      //     console.log(index,data)

      // })
      // myForm3.forEach((index,data)=>{
      //   console.log(data,index)
      //   // formData.append(data,index)
      // })

      // console.log(index,data)
    }
  }

  // Page 4 validation
  else if (count == 3) {
    if (overall_performance_rating.value.length == 0) {
      overall_performance_rating_error.classList.add("active");
      overall_performance_rating_error.innerHTML = `**Please add overall performance rating`;
    } else if (UNSDGs_knowledge_rating.value.length == 0) {
      UNSDGs_knowledge_rating_error.classList.add("active");
      UNSDGs_knowledge_rating_error.innerHTML = `**Please add the UNSDGs rating`;
    } else {
      overall_performance_rating_error.classList.remove("active");
      UNSDGs_knowledge_rating_error.classList.remove("active");

      count++;
      list[count].classList.add("active");
      if (count >= form_box.length) {
        count = form_box.length - 1;
      }
      console.log(count);
      form_box[count - 1].classList.remove("active");
      form_box[count].classList.add("active");
      console.log(progress);
      if (count == 1) {
        progress.style.width = "20%";
      } else if (count == 2) {
        progress.style.width = "38%";
      } else if (count == 3) {
        progress.style.width = "57%";
      } else if (count == 4) {
        progress.style.width = "68%";
      }

      if (count > 0) {
        previous.classList.add("active");
      }

      console.log(form_box.length);

      if (count === form_box.length - 1) {
        submit.classList.add("active");
        next.classList.remove("active");
      }
    }

    let assesmentReviewValue = [];

    for (i = 1; i <= all_assesment[0].childElementCount; i++) {
      let typeData = document.getElementById("type-" + i).value;
      let submittedData = document.getElementById("submit-" + i).value;
      let submissionDate = document.getElementById("submission-" + i).value;
      let peersAvgGradeValue = document.getElementById("peersAvg-" + i).value;
      let grade = document.getElementById("grade-" + i).value;

      let assesmentData = {
        type: typeData,
        submitted: submittedData,
        submissionDate: submissionDate,
        peersAvgGrade: peersAvgGradeValue,
        grade: grade,
      };

      assesmentReviewValue.push(assesmentData);
    }

    

    if(overall_performance_rating.value%20==0){
      status=0;
    }else{
      status=1;
    }

    formDataGlobal["assementReview"] = assesmentReviewValue;
    formDataGlobal["overAllPerformanceRating"] =
      {
        status:status,
        quotient:Math.floor(overall_performance_rating.value/20)
      }

      if(UNSDGs_knowledge_rating.value%20==0){
        status=0;
      }else{
        status=1;
      }
    formDataGlobal["unsdgsRating"] = {
      status:status,
      quotient:Math.floor(UNSDGs_knowledge_rating.value/20)
    }

    console.log(formDataGlobal);
  }

  // Page 5 validation
  else if (count == 4) {
    count++;
    list[count].classList.add("active");
    if (count >= form_box.length) {
      count = form_box.length - 1;
    }
    console.log(count);
    form_box[count - 1].classList.remove("active");
    form_box[count].classList.add("active");
    console.log(progress);
    if (count == 1) {
      progress.style.width = "20%";
    } else if (count == 2) {
      progress.style.width = "38%";
    } else if (count == 3) {
      progress.style.width = "57%";
    } else if (count == 4) {
      progress.style.width = "68%";
    }

    if (count > 0) {
      previous.classList.add("active");
    }

    console.log(form_box.length);

    if (count === form_box.length - 1) {
      submit.classList.add("active");
      next.classList.remove("active");
    }
  }
});

// Previous button
previous.addEventListener("click", function () {
  if (count > 0) {
    list[count].classList.remove("active");
  }
  count--;
  if (count < form_box.length - 1) {
    submit.classList.remove("active");
  }
  next.classList.add("active");
  form_box[count].classList.add("active");
  form_box[count + 1].classList.remove("active");

  if (count == 0) {
    previous.classList.remove("active");
    progress.style.width = "0%";
  }

  if (count == 1) {
    progress.style.width = "20%";
  } else if (count == 2) {
    progress.style.width = "38%";
  } else if (count == 3) {
    progress.style.width = "57%";
  } else if (count == 4) {
    progress.style.width = "68%";
  }
});

let form_content_box = document.getElementsByClassName("form-content-box");
console.log(form_content_box);

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  if (radical_thinker.value < 10) {
    radical_thinker_error.classList.add("active");
    radical_thinker_error.innerHTML = `**Please enter the marks greater then or equal to 10 `;
  } else if (innovative_thinker.value < 10) {
    innovative_thinker_error.classList.add("active");
    innovative_thinker_error.innerHTML = `**Please Please enter the marks greater then or equal to 10`;
  } else if (quality_obesession.value < 10) {
    quality_obesession_error.classList.add("active");
    quality_obesession_error.innerHTML = `**Please enter the marks greater then or equal to 10`;
  } else if (hands_on_skills.value < 10) {
    hands_on_skills_error.classList.add("active");
    hands_on_skills_error.innerHTML = `**Please enter the marks greater then or equal to 10`;
  } else if (big_dreamer.value < 10) {
    big_dreamer_error.classList.add("active");
    big_dreamer_error.innerHTML = `**Please enter the marks greater then or equal to 10`;
  } else if (impactful_approach.value < 10) {
    impactful_approach_error.classList.add("active");
    impactful_approach_error.innerHTML = `**Please enter the marks greater then or equal to 10`;
  } else if (strong_points.value.length == 0) {
    strong_points_error.classList.add("active");
    strong_points_error.innerHTML = `**Please enter few strong points`;
  } else if (weak_points.value.length == 0) {
    weak_points_error.classList.add("active");
    weak_points_error.innerHTML = `**Please enter few weak points`;
  } else if (other_suggestions.value.length == 0) {
    other_suggestions_error.classList.add("active");
    other_suggestions_error.innerHTML = `**Please enter some suggestions`;
  } else {
    radical_thinker_error.classList.remove("active");
    innovative_thinker_error.classList.remove("active");
    quality_obesession_error.classList.remove("active");
    hands_on_skills_error.classList.remove("active");
    big_dreamer_error.classList.remove("active");
    impactful_approach_error.classList.remove("active");
    strong_points_error.classList.remove("active");
    weak_points_error.classList.remove("active");
    other_suggestions_error.classList.remove("active");

    const radicalThinkerValue = radical_thinker.value;
    const innovativeThinkerValue = innovative_thinker.value;
    const qualityObsessionValue = quality_obesession.value;
    const handsOnSkillsValue = hands_on_skills.value;
    const bigDreamerValue = big_dreamer.value;
    const impactfulApproachValue = impactful_approach.value;
    const strongPointsValue = strong_points.value;
    const weakPointsValue = weak_points.value;
    const otherSuggestionsValue = other_suggestions.value;

    if (radicalThinkerValue%20==0){
      status==0
    }else {
      status==1
    }

    formDataGlobal["radicalThinker"] = {
      status:status,
      quotient:Math.floor(radicalThinkerValue/20)
    };

    if (innovativeThinkerValue%20==0){
      status==0
    }else {
      status==1
    }
    formDataGlobal["innovativeThinker"] =  {
      status:status,
      quotient:Math.floor(innovativeThinkerValue/20)
    };

    if (innovativeThinkerValue%20==0){
      status==0
    }else {
      status==1
    }

    formDataGlobal["qualityObession"] =  {
      status:status,
      quotient:Math.floor(qualityObsessionValue/20)
    };
    
    
    if (handsOnSkillsValue%20==0){
      status==0
    }else {
      status==1
    }

    
    formDataGlobal["handsOnSkills"] =  {
      status:status,
      quotient:Math.floor(handsOnSkillsValue/20)
    };


    if (bigDreamerValue%20==0){
      status==0
    }else {
      status==1
    }


    formDataGlobal["bigdreamer"] =  {
      status:status,
      quotient:Math.floor(handsOnSkillsValue/20)
    };

    if (impactfulApproachValue%20==0){
      status==0
    }else {
      status==1
    }

    formDataGlobal["impactFulApproach"] =  {
      status:status,
      quotient:Math.floor(handsOnSkillsValue/20)
    };
    formDataGlobal["strongPoints"] = strongPointsValue;
    formDataGlobal["weakPoints"] = weakPointsValue;
    formDataGlobal["otherSuggestions"] = otherSuggestionsValue;

    register(formDataGlobal)
    .then((data) => {
      console.log('promise completed',data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
});

async function register(formDataGlobal) {
  console.log("what we need", formDataGlobal);
  //     console.log(e);
  //     event.preventDefault()
  //    var form = document.getElementById("testform");
  //     var data = new FormData(form);
  // var newData = Object.fromEntries(data.entries());
  // console.log(newData);
  var response = await fetch(
    "https://besingularauto.herokuapp.com/createStudentRecord",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formDataGlobal),
    }
  );
  response.text().then((text) => {
    var data = JSON.parse(text);
    if (data.status == 200) {
      console.log("created successfully");
      window.location.href=data.reportcardUrl
    }
    console.log(data);
  });
}

// function myfunction(form,index){
//   form[index].addEventListener('submit',function(e){
//     e.preventDefault();
//     const formData=new FormData(this)

//     fetch('https://reqres.in/api/users',{
//       method:'post',
//       body:formData
//     }).then(function(response){
//       return response.text
//     }).then(function(text){
//       console.log(text)
//     }).catch(function(err){
//       console.error(error)
//     })
//   })
// }
