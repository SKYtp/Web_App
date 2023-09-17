var time_count = 0;
var time_check = false;
self.addEventListener('message', function(e) {
    time_check = e.data;
    /*if(time_check){
        if(time_count >= 6){
            time_count = 0;
        }
        let time_data = new Date();
        self.postMessage(run_color(time_count,time_data.toString()));
        time_count += 1;
    }*/
});

setInterval(() => {
    if(time_check){
        if(time_count >= 6){
            time_count = 0;
        }
        let time_data = new Date();
        self.postMessage(run_color(time_count,time_data.toString()));
        time_count += 1;
    }
}, 1000);

function run_color(data,time){
    let color_data;
    switch(data){
        //time, color, backgroundColor, borderBlockColor
        case 0:
            color_data = [time,"#FFFFFF","#00B3B3","#1940FF"];
            return color_data;
        case 1:
            color_data = [time,"#999900","#FFFF4D","#808000"];
            return color_data;
        case 2:
            color_data = [time,"#B3001E","#FF6680","#99001A"];
            return color_data;
        case 3:
            color_data = [time,"#3333FF","#9999FF","#000099"];
            return color_data;
        case 4:
            color_data = [time,"#CC8800","#FFDD99","#CC8800"];
            return color_data;
        case 5:
            color_data = [time,"#FF00FF","#FF99FF","#990099"];
            return color_data;        
    }
}