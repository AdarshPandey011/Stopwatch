var stp;
var ns = 0, second = 0, minute = 0;
var id = document.getElementById("clock");
var btn2 = document.getElementById("btn2");
var btn1 = document.getElementById("btn1");
var count = 1;
var flag=true;

function start_clock() {
  
   

    if (btn2.innerText == "Start") {
        btn2.innerText = "Stop";
        btn1.innerText = "Lap"

        stp = setInterval(function () {

            if (ns == 100) {
                ns = 0;
                second += 1
                if (second == 60) {
                    second = 0;
                    minute++;
                }
            }

            var x, y, z;
            if (ns < 10) {
                x = "0" + ns
            }
            else {
                x = ns;
            }

            if (second < 10) {
                y = "0" + second;

            }
            else {
                y = second;
            }

            if (minute < 10) {
                z = "0" + minute;
            }
            else {
                z = minute;
            }


            id.innerHTML = z + ":" + y + ":" + x;

            ns++;


        }, 10)
    }
    else {
        btn2.innerText = "Start";
        btn1.innerText = "Reset";
        clearInterval(stp);
    }
}


function stop_clock(){
    if(btn1.innerText == "Lap" && ns != 0){
        var watch = document.getElementById("stopwatch");
        
        var new_row = document.createElement("div");
        var col1 = document.createElement("div");
        var col2 = document.createElement("div");

    
       

        if(flag){
            new_row.setAttribute("class","row border-top border-bottom ")
            flag=false;
        }
        else{
          new_row.setAttribute("class","row border-top")  
        }
        
        col1.setAttribute("class","col text-white d-flex justify-content-center p-4");
        col2.setAttribute("class","col text-white d-flex justify-content-center p-4");

        col1.classList.add("col-6");
        col2.classList.add("col-6");
        //col2.classList.add("");

        

       


        col1.innerText = "Lap"+count;
        col2.innerText = id.innerText;

        // new_row.appendChild(line1);
        new_row.appendChild(col1);
        new_row.appendChild(col2);
        // new_row.appendChild(line2);

        //new_row.setAttribute('class','bor');

        watch.prepend(new_row);
        count++;
    }
    else if(btn1.innerText == "Reset"){
        let p = document.getElementById("stopwatch");
        //console.log(p);

        while(p.hasChildNodes()){

            p.removeChild(p.firstChild)
        }
    
       ns = 0;
       flag = true;
       second = 0;
       minute = 0;
       count = 1;
       btn1.innerText = "Lap";
       id.innerHTML = "00" + ":" + "00" + ":" + "00";

    }

}