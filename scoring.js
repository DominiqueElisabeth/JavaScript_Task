// After loading DOM, execute the process in the function ().

$(document).ready(function () {
  // Logic to get the score (input value) of "Japanese, English, math, science, society" and get the total score and average score.
  function score_indicate() {
    // Substitute an array of scores for "Japanese, English, math, science, society" into the variable "subject_points".
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Add the score of "Japanese, English, math, science, society" to the variable "sum".
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
    $("#sum_indicate").text(sum);
    // Describe the process to output the average score of each subject in "Average score:".
    // Hint: Let's assign the average value to the variable "average" (total number of numbers you want to average (sum) / total number)
    // Hint: Use the length method to find the total number. (length method: Method to get the length of the character string, the number of elements in the array, etc.)
    let avg = sum / subject_points.length;
    $("#average_indicate").text(avg);
  };
  // Write the logic to get the average score and rank it into "A, B, C, D" from the obtained average score.
  function get_achievement() {
    // In the variable "averageIndicate"
    // Get the average score from id = "average_indicate" on HTML and substitute it.
    let averageIndicate = $("#average_indicate").text();
    console.log(averageIndicate)
    // If "averageIndicate" is 80 or more, "A" is returned.
    if (averageIndicate >= 80) {
      return "A";
    }
    // If "averageIndicate" is 60 or more, "B" is returned.
    else if (averageIndicate >= 60) {
      return "B";
    }
    // If "averageIndicate" is 40 or more, "C" is returned.
    else if (averageIndicate >= 40) {
      return "C";
    }
    // If "averageIndicate" is less than 40, "D" is returned.
    else {
      return "D";
    };
  };
  // Get the score of each subject and make the logic to judge "pass,or fail" from the obtained score.
  function get_pass_or_failure() {
    let subject_points = [Number($('#national_language').val()),
    Number($('#english').val()),
    Number($('#mathematics').val()),
    Number($('#science').val()),
    Number($('#society').val())
    ];
    // Substitute the number of subjects entered in the variable "number".
    let number = subject_points.length;
    // Assign "pass" to the variable "judge".
    let judge = "Pass";
    // Describe the process of reassigning "fail" to the variable "judge" if even one of the entered subjects has a score lower than 60 points.
    // Hint: Let's find out about iterating arrays.
    for (let i = 0; i < number; i++) {
      if (subject_points[i] < 60) {
        judge = "Fail";
        break;
      }
    }
    return judge;
  };
  // Create the final judge logic.
  function judgement() {
    // Assign "return value of get_achievement ()" to the variable "achievement".
    let achievement = get_achievement();
    // Assign "return value of get_pass_or_failure ()" to the variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // When you press the "Final Judge" (id = "alert-indicate)" button, "Your grade is $ {achievement}. $ {Pass_or_failure}." Is output.
    $("#alert-indicate").remove();
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement}. You ${pass_or_failure}. </label>`);
  };
  // This is the process to fire "function score_indicate ()" when any of [Japanese score, English score, math score, science score, social score] is changed.
  $('#national_language, #english, #mathematics, #science, #society').change(function () {
    score_indicate();
  });
  // This is the process that "get_achievement ()" is output when the "Rank" (id = "evaluation") button is pressed.
  $('#btn-evaluation').click(function () {
    $("#evaluation").text(get_achievement());
  });
   // This is the process that "function et_pass_or_failure ()" is output when the "judgment" (id = "btn-judge") button is pressed.
  $('#btn-judge').click(function () {
    $("#judge").text(get_pass_or_failure());
  });
  // When the "final judge" (id = "btn-declaration") button is pressed, the process of "function judgment ()" is executed.
  // When the "Final Judge" button is pressed after the second time, the HTML element of the judge displayed up to that point is deleted and a new HTML element of the judge is added.
  // Tip: Let's find out about the remove method.
  $('#btn-declaration').click(function () {
    $("#declaration").text(judgement());
  });
    $("#alert-indicate").remove();
    });
// This code is written in JavaScript.
