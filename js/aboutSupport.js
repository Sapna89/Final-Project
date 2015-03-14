//5. In your footer, you will display the user’s IP address.
var ip;
$.ajax({
  type: "GET",  
  url: "https://httpbin.org/get",
  dataType: "json",
  context: document.body,
  async: true,
  success: function(res, stato) {
    ip = res.origin;
    myCallback();
  },
  error: function(res, stato) {
    alert("Where is your IP??");
  }
});

function myCallback(){
    console.log(ip);
    $(".footerip").append(ip);
}
