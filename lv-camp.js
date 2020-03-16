function total_value_all_camp() {

    var value_tan = document.getElementById('tan_select').value;
    console.log("ฐาน lv " + value_tan);
    var value_prae = document.getElementById('prae_select').value;
    console.log("โรงแปรธาตุ lv " + value_prae);
    var value_skud = document.getElementById('skud_select').value;
    var value_grun = document.getElementById('grun_select').value;
    var value_toh = document.getElementById('toh_select').value;
    var value_sbaing = document.getElementById('sbaing_select').value;
    var value_kanka = document.getElementById('kanka_select').value;
    var value_oub = document.getElementById('oub_select').value;
    var value_kong = document.getElementById('kong_select').value;
    var value_pasusus = document.getElementById('pasusus_select').value;
    var value_kogma = document.getElementById('kogma_select').value;
    var value_teepuk = document.getElementById('teepuk_select').value;


    if(value_tan == 1){

        var u_prae = parseInt(value_prae);
        var u_sbaing = parseInt(value_sbaing);
        var u_grun = parseInt(value_grun);
        var u_kogma = parseInt(value_kogma);
        var u_teepuk = parseInt(value_teepuk);
        var u_oub = parseInt(value_oub);
        var u_pasusus = parseInt(value_pasusus);
        var u_toh = parseInt(value_toh);
        var u_kanka = parseInt(value_kanka);
        var u_kong = parseInt(value_kong);
        var u_skud = parseInt(value_skud);

        var prae = "";

        console.log("แปรธาตุ" + prae);
        
        var sbaing = 2;
        var grun = 2;
        var kogma = 1;
        var teepuk = 1;
        var oub = "";
        var pasusus = "";
        var toh = "";
        var kanka = "";
        var kong = "";
        var skud = "";

        

        var user_input_lv = [u_sbaing, u_grun, u_kogma, u_teepuk, u_oub, u_pasusus, u_toh, u_kanka, u_kong, u_skud];
        var sys_lv = [sbaing, grun, kogma, teepuk, oub, pasusus, toh, kanka, kong, skud];
        var a =["#value_sbaing", "#value_grun", "#value_kogma", "#value_teepuk", "#value_oub", "#value_pasusus", "#value_toh", "#value_kanka", "#value_kong","#value_skud"];
        
        
        var i = 1;
        var tan = parseInt(value_tan) + parseInt(i);
        document.getElementById('demo').innerHTML = "อัพเกรด 1 ไป " + tan;

        var count_index = parseInt(0) ;

        for(var i = 1 ; i <= 4 ; i++){




            if(user_input_lv[count_index] < sys_lv[count_index]){

                console.log(a[count_index] + " = " + user_input_lv[count_index] + " < " + sys_lv[count_index]);

                    $(a[count_index]).addClass('text-danger');


                    count_index++;
                      
                

                
            }else if (user_input_lv[count_index] >=  sys_lv[count_index]){

                console.log(a[count_index] + " = " + user_input_lv[count_index] + " >= " + sys_lv[count_index]);

                    $(a[count_index]).addClass('text-success');


                    count_index++;
                      
               

            }else if(sys_lv[count_index] == ""){


                console.log(a[count_index] + " ว่าง ");

                


                count_index++;

            }


        }


        


        

        document.getElementById('value_prae').innerHTML ="LV.";
        document.getElementById('value_sbaing').innerHTML = "Lv." + sbaing;
        document.getElementById('value_grun').innerHTML = "Lv." + grun;
        document.getElementById('value_kogma').innerHTML = "Lv." + kogma;
        document.getElementById('value_teepuk').innerHTML = "Lv." + teepuk;
        document.getElementById('value_oub').innerHTML = "Lv.";
        document.getElementById('value_pasusus').innerHTML = "Lv.";
        document.getElementById('value_toh').innerHTML = "Lv.";
        document.getElementById('value_kanka').innerHTML = "Lv.";
        document.getElementById('value_kong').innerHTML = "Lv.";
        document.getElementById('value_skud').innerHTML = "Lv.";


    }else if (value_tan == 4) {

        var u_prae = parseInt(value_prae);
        var u_sbaing = parseInt(value_sbaing);
        var u_grun = parseInt(value_grun);
        var u_kogma = parseInt(value_kogma);
        var u_teepuk = parseInt(value_teepuk);
        var u_oub = parseInt(value_oub);
        var u_pasusus = parseInt(value_pasusus);
        var u_toh = parseInt(value_toh);
        var u_kanka = parseInt(value_kanka);
        var u_kong = parseInt(value_kong);
        var u_skud = parseInt(value_skud);

        var prae = 7;
        var sbaing = 8;
        var grun = 8;
        var kogma = 4;
        var teepuk = 2;
        var oub = 8;
        var pasusus = 7;
        var toh = 1;
        var kanka = 1;
        var kong = 1;
        var skud = 1;


        var user_input_lv = [u_prae, u_sbaing, u_grun, u_kogma, u_teepuk, u_oub, u_pasusus, u_toh, u_kanka, u_kong, u_skud];
        var sys_lv = [prae, sbaing, grun, kogma, teepuk, oub, pasusus, toh, kanka, kong, skud];
        var a =["#value_prae", "#value_sbaing", "#value_grun", "#value_kogma", "#value_teepuk", "#value_oub", "#value_pasusus", "#value_toh", "#value_kanka", "#value_kong","#value_skud"];
        
        
        var i = 1;
        var tan = parseInt(value_tan) + parseInt(i);
        document.getElementById('demo').innerHTML = "อัพเกรด 4 ไป " + tan;

        var count_index = parseInt(0) ;

        for(var i = 1 ; i <= 7 ; i++){




            if(user_input_lv[count_index] < sys_lv[count_index]){

                

                    $(a[count_index]).addClass('text-danger');


                    count_index++;
                      
                

                
            }else if (user_input_lv[count_index] >=  sys_lv[count_index]){

               

                    $(a[count_index]).addClass('text-success');


                    count_index++;
                      
               

            }


        }


        


        

        document.getElementById('value_prae').innerHTML ="LV." + prae;
        document.getElementById('value_sbaing').innerHTML = "Lv." + sbaing;
        document.getElementById('value_grun').innerHTML = "Lv." + grun;
        document.getElementById('value_kogma').innerHTML = "Lv." + kogma;
        document.getElementById('value_teepuk').innerHTML = "Lv." + teepuk;
        document.getElementById('value_oub').innerHTML = "Lv." + oub;
        document.getElementById('value_pasusus').innerHTML = "Lv." + pasusus;
        document.getElementById('value_toh').innerHTML = "Lv.";
        document.getElementById('value_kanka').innerHTML = "Lv.";
        document.getElementById('value_kong').innerHTML = "Lv.";
        document.getElementById('value_skud').innerHTML = "Lv.";



    } else if (value_tan == 3) {

        var prae = 5;
        var sbaing = 6;
        var grun = 6;
        var kogma = 3;
        var teepuk = 2;
        var oub = 6;
        var pasusus = 4;
        var toh = "-";
        var kanka = "-";
        var kong = "-";
        var skud = "-";

        var u_prae = parseInt(value_prae);
        var u_sbaing = parseInt(value_sbaing);
        var u_grun = parseInt(value_grun);
        var u_kogma = parseInt(value_kogma);
        var u_teepuk = parseInt(value_teepuk);
        var u_oub = parseInt(value_oub);
        var u_pasusus = parseInt(value_pasusus);
        var u_toh = parseInt(value_toh);
        var u_kanka = parseInt(value_kanka);
        var u_kong = parseInt(value_kong);
        var u_skud = parseInt(value_skud);

        var user_input_lv = [u_prae, u_sbaing, u_grun, u_kogma, u_teepuk, u_oub, u_pasusus, u_toh, u_kanka, u_kong, u_skud];
        var sys_lv = [prae, sbaing, grun, kogma, teepuk, oub, pasusus, toh, kanka, kong, skud];
        var a =["#value_prae", "#value_sbaing", "#value_grun", "#value_kogma", "#value_teepuk", "#value_oub", "#value_pasusus", "#value_toh", "#value_kanka", "#value_kong","#value_skud"];
        
        var i = 1;
        var tan = parseInt(value_tan) + parseInt(i);
        document.getElementById('demo').innerHTML = "อัพเกรด 3 ไป " + tan;
        

        var count_index = parseInt(0) ;

        for(var i = 1 ; i <= 7 ; i++){




            if(user_input_lv[count_index] < sys_lv[count_index]){

                

                    $(a[count_index]).addClass('text-danger');


                    count_index++;
                      
                

                
            }else if (user_input_lv[count_index] >=  sys_lv[count_index]){

               

                    $(a[count_index]).addClass('text-success');


                    count_index++;
                      
               

            }


        }


    

        document.getElementById('value_prae').innerHTML = "Lv." + prae;
        document.getElementById('value_sbaing').innerHTML = "Lv." + sbaing;
        document.getElementById('value_grun').innerHTML = "Lv." + grun;
        document.getElementById('value_kogma').innerHTML = "Lv." + kogma;
        document.getElementById('value_teepuk').innerHTML = "Lv." + teepuk;
        document.getElementById('value_oub').innerHTML = "Lv." + oub;
        document.getElementById('value_pasusus').innerHTML = "Lv." + pasusus;
        document.getElementById('value_toh').innerHTML = "Lv.";
        document.getElementById('value_kanka').innerHTML = "Lv.";
        document.getElementById('value_kong').innerHTML = "Lv.";
        document.getElementById('value_skud').innerHTML = "Lv.";




    } else if (value_tan == 5) {

        var prae = 10;
        var sbaing = 10;
        var grun = 10;
        var kogma = 5;
        var teepuk = 3;
        var oub = 10;
        var pasusus = 10;
        var toh = "-";
        var kanka = "-";
        var kong = "-";
        var skud = 5;

        var u_prae = parseInt(value_prae);
        var u_sbaing = parseInt(value_sbaing);
        var u_grun = parseInt(value_grun);
        var u_kogma = parseInt(value_kogma);
        var u_teepuk = parseInt(value_teepuk);
        var u_oub = parseInt(value_oub);
        var u_pasusus = parseInt(value_pasusus);
        var u_toh = parseInt(value_toh);
        var u_kanka = parseInt(value_kanka);
        var u_kong = parseInt(value_kong);
        var u_skud = parseInt(value_skud);

        var user_input_lv = [u_prae, u_sbaing, u_grun, u_kogma, u_teepuk, u_oub, u_pasusus, u_toh, u_kanka, u_kong, u_skud];
        var sys_lv = [prae, sbaing, grun, kogma, teepuk, oub, pasusus, toh, kanka, kong, skud];
        var a =["#value_prae", "#value_sbaing", "#value_grun", "#value_kogma", "#value_teepuk", "#value_oub", "#value_pasusus", "#value_toh", "#value_kanka", "#value_kong","#value_skud"];
        
        var i = 1;
        var tan = parseInt(value_tan) + parseInt(i);
        document.getElementById('demo').innerHTML = "อัพเกรด 5 ไป " + tan;
        

        var count_index = parseInt(0) ;

        for(var i = 1 ; i <= 11 ; i++){




            if(user_input_lv[count_index] < sys_lv[count_index]){

                console.log(a[count_index] + " u < sys ");

                    $(a[count_index]).addClass('text-danger');


                    count_index++;
                      
                

                
            }else if (user_input_lv[count_index] >=  sys_lv[count_index]){

                console.log(a[count_index] + " u >= sys ");

                    $(a[count_index]).addClass('text-success');


                    count_index++;
                      
               

            }


        }


    

        document.getElementById('value_prae').innerHTML = "Lv." + prae;
        document.getElementById('value_sbaing').innerHTML = "Lv." + sbaing;
        document.getElementById('value_grun').innerHTML = "Lv." + grun;
        document.getElementById('value_kogma').innerHTML = "Lv." + kogma;
        document.getElementById('value_teepuk').innerHTML = "Lv." + teepuk;
        document.getElementById('value_oub').innerHTML = "Lv." + oub;
        document.getElementById('value_pasusus').innerHTML = "Lv." + pasusus;
        document.getElementById('value_toh').innerHTML = "Lv.";
        document.getElementById('value_kanka').innerHTML = "Lv.";
        document.getElementById('value_kong').innerHTML = "Lv.";
        document.getElementById('value_skud').innerHTML = "Lv." + skud;

    }
}



