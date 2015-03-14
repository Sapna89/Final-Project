//7. Make use of the HTML5 local storage API to store your First and Last name, and course title
// $(document).ready(function() {
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}


localStorage.setItem("firstName", "Sapna");

localStorage.setItem("lastName", "Naveen");

localStorage.setItem("courseName", "ICT4510-Adv Web Design");

localStorage.setItem("professor", "Seth Howard");

$('.button').click(function () {
	$('#firstName').empty();
	$('#courseName').empty();
	$('#professor').empty();
	var first = localStorage.getItem("firstName");
	var last = localStorage.getItem("lastName");
	var course = localStorage.getItem("courseName");
	var professor = localStorage.getItem("professor");
	console.log(first + last + course);
		
	$("#firstName").append("Name : " + first +" "+ last);
	$("#courseName").append("Course : " + course);
	$("#professor").append("Professor : " + professor);
//});
});

