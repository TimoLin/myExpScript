// calculate functions
//
'use strict';
function massFlowRate()
{
    var P = parseFloat($("#p").val());  //孔板前压力
    var Dp = parseFloat($("#Dp").val()); //孔板压差
    var Pamb = parseFloat($("#Pambient").val()); // 环境压力
    
    var type = $('#Type').val(); //低压孔板

    if (type == "lowP")
    {
        var mass = 0.0836*Math.sqrt(Dp/9.8*(P*1000000+Pamb));
    }else
    {
        var mass = 41.12805925*Math.sqrt(Dp*(1.2177*(P*1000000+Pamb)/101325))/3.6;
    }

    document.getElementById("m").value=mass;
    


}

$("#Calculate-mass").click(function(event){
	event.preventDefault();
	massFlowRate();
});

function fuelair()
{
    var fuel = parseFloat($("#fuel").val());
    var air = parseFloat($("#air").val());
    var fa = parseFloat($("#fa").val());
    var phi = parseFloat($("#fa").val());
    var alpha = parseFloat($("#alpha").val());
    
    if (fuel && air && fuel !=0)
    {
        var fa = fuel/air;
        var phi = fa/0.068;
        var alpha = 1/(fa*14.7);
        document.getElementById("fa").value=fa.toFixed(6);
        document.getElementById("phi").value=phi.toFixed(6);
        document.getElementById("alpha").value=alpha.toFixed(6);
    }else if(air && fa && fuel == 0)
    {
        var fuel = fa*air;
        document.getElementById("fuel").value=fuel.toFixed(6);
        var phi = fa/0.068;
        document.getElementById("phi").value=phi.toFixed(6);
        var alpha = 1/(fa*14.7);
        document.getElementById("alpha").value=alpha.toFixed(6);

    }

    


}

$("#Calculate-fuel").click(function(event){
	event.preventDefault();
	fuelair();
});
