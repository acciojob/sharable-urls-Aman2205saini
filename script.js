// your code here
     document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            var name = document.querySelector('[name="name"]').value;
            var year = document.querySelector('[name="year"]').value;
            if(name !="" && year !="")
            document.getElementById('change').innerHTML = "http://localhost:8080/?name=" + name + "&year=" + year;
            else if(name =="" && year !="")
            document.getElementById('change').innerHTML = "http://localhost:8080/?year=" + year ;
            else if(name !="" && year =="")
            document.getElementById('change').innerHTML = "http://localhost:8080/?name=" + name ;
            else
            document.getElementById('change').innerHTML = "http://localhost:8080/" ;