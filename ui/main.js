//Counter code
var button = document.getElementById('counter');
//var counter = 0;
button.onclick = function() {
   //Create a request object
    var request = new XMLHttpRequest();
   //Capture the response and store it in a variable
  request.onreadystatechange = function () {
     if (request.readyState ===XMLHttpRequest.DONE) {
          //Take some action
          if (request.status === 200) {
                var counter = request.responseText;
             // counter = counter + 1;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                  
          }
      }
  
  //Not done yet
 };
  //Make a request
  request.open('GET', 'http://hanikavats.imad.hasura-app.io/counter',true);
  request.send(null);
};
// submit name
var nameinput = document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submit_btn') ;
submit.onclick = function () {
var names = ['name1' , 'name2' , 'name3']; 
var list ='';
for (var i =0;i< names.length; i++) {
  list += '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};