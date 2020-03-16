
function total_value_all_resource(){

    var cal_hin = document.getElementById('value_hin');
    var cal_lek = document.getElementById('value_lek');
    var cal_tongdang = document.getElementById('value_tongdang');
    var cal_deebook = document.getElementById('value_deebook');
    var cal_maisung = document.getElementById('value_maisung');
    var cal_maiboa = document.getElementById('value_maiboa');
    var cal_maiyun = document.getElementById('value_maiyun');
    var cal_mainoop = document.getElementById('value_mainoop');
    var cal_pan = document.getElementById('value_pan');
    var cal_sumlee = document.getElementById('value_sumlee');
    var cal_yapa = document.getElementById('value_yapa');
    var cal_rangmai = document.getElementById('value_rangmai');
    
    var value_tan = document.getElementById('tan_select').value;
    var value_prae = document.getElementById('prae_select').value;
    var value_skud = document.getElementById('skud_select').value;
    var value_grun = document.getElementById('grun_select').value;
    var value_toh = document.getElementById('toh_select').value;
    var value_sbaing = document.getElementById('sbaing_select').value;
    // var value_kanka = document.getElementById('kanka_select').value;
    var value_oub = document.getElementById('oub_select').value;
    var value_kong = document.getElementById('kong_select').value;
    var value_pasusus = document.getElementById('pasusus_select').value;
    var value_kogma = document.getElementById('kogma_select').value;
    var value_teepuk = document.getElementById('teepuk_select').value;


    
    tan(value_tan);
    prae(value_prae);
    skud(value_skud);
    grun(value_grun);
    toh(value_toh);
    sbaing(value_sbaing);
    // kanka(value_kanka);
    oub(value_oub);
    kong(value_kong);
    pasusus(value_pasusus);
    kogma(value_kogma);
    teepuk(value_teepuk);

    function tan(value_tan){ //ฐานบัญชาการ


        console.log("ฐานบัญชาการ LV." + value_tan);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_tan == 1){
    
        }else if(value_tan == 2){
    
        }else if(value_tan == 3){
            
            var hin = parseInt(756);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(756);
            var maiboa = parseInt(756);
            var maiyun = parseInt(504);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('tan_maisung').innerHTML = total_maisung ;
            document.getElementById('tan_hin').innerHTML = total_hin;
            document.getElementById('tan_maiboa').innerHTML = total_maiboa;
            document.getElementById('tan_maiyun').innerHTML = total_maiyun;

            document.getElementById('tan_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("tan_data_total_maisung", total_maisung);
            localStorage.setItem("tan_data_total_hin", total_hin);
            localStorage.setItem("tan_data_total_maiboa", total_maiboa);
            localStorage.setItem("tan_data_total_maiyun", total_maiyun);

            localStorage.setItem("tan_data_total_mainoop", total_mainoop);
    
    
    
        }else if(value_tan == 4){
    
            var hin = parseInt(2394);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(2394);
            var maiboa = parseInt(2394);
            var maiyun = parseInt(2394);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop = "";
            

            document.getElementById('tan_maisung').innerHTML = total_maisung ;
            document.getElementById('tan_hin').innerHTML = total_hin;
            document.getElementById('tan_maiboa').innerHTML = total_maiboa;
            document.getElementById('tan_maiyun').innerHTML = total_maiyun;

            document.getElementById('tan_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("tan_data_total_maisung", total_maisung);
            localStorage.setItem("tan_data_total_hin", total_hin);
            localStorage.setItem("tan_data_total_maiboa",total_maiboa);
            localStorage.setItem("tan_data_total_maiyun", total_maiyun);

            localStorage.setItem("tan_data_total_mainoop", total_mainoop);

    
        }else if(value_tan == 5){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(4800);
            var maiboa = parseInt(4800);
            var maiyun = parseInt(4800);
            var mainoop = parseInt(4800);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop = "";
    
            document.getElementById('tan_maisung').innerHTML = total_maisung ;
            document.getElementById('tan_mainoop').innerHTML = total_mainoop;
            document.getElementById('tan_maiboa').innerHTML = total_maiboa;
            document.getElementById('tan_maiyun').innerHTML = total_maiyun;

            document.getElementById('tan_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("tan_data_total_maisung", total_maisung);
            localStorage.setItem("tan_data_total_mainoop", total_mainoop);
            localStorage.setItem("tan_data_total_maiboa",total_maiboa);
            localStorage.setItem("tan_data_total_maiyun", total_maiyun);

            localStorage.setItem("tan_data_total_mainoop", total_mainoop);
    
        }else if(value_tan == 6){
            
    
        }else if(value_tan == 7){
    
        }else if(value_tan == 8){
    
        }else if(value_tan == 9){
    
        }else if(value_tan == 10){
    
        }
        
    }
    
    function prae(value_prae) { // โรงงานแปรธาตุ
    
        
        console.log("โรงแปรธาตุ LV." + value_prae);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_prae == 1){
    
        }else if(value_prae == 2){
    
        }else if(value_prae == 3){
            
    
    
    
        }else if(value_prae == 4){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(300);
            var maiboa = parseInt(0);
            var maiyun = parseInt(300);
            var mainoop = parseInt(300);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
            var total_maiboa ="";
    
            document.getElementById('prae_maisung').innerHTML = total_maisung ;
            document.getElementById('prae_mainoop').innerHTML = total_mainoop;
            document.getElementById('prae_maiyun').innerHTML = total_maiyun;

            document.getElementById('prae_hin').innerHTML = total_hin;
            document.getElementById('prae_maiboa').innerHTML = total_maiboa;

            localStorage.setItem("prae_data_total_maisung", total_maisung);
            localStorage.setItem("prae_data_total_mainoop", total_mainoop);
            localStorage.setItem("prae_data_total_maiyun", total_maiyun);

            localStorage.setItem("prae_data_total_hin", total_hin);
            localStorage.setItem("prae_data_total_maiboa", total_maiboa);
    
        }else if(value_prae == 5){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(495);
            var maiboa = parseInt(495);
            var maiyun = parseInt(0);
            var mainoop = parseInt(495);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiboa = parseInt(edit_maiboa - maiboa);

            var total_hin = "";
            var total_maiyun ="";
    
            document.getElementById('prae_maisung').innerHTML = total_maisung ;
            document.getElementById('prae_mainoop').innerHTML = total_mainoop;
            document.getElementById('prae_maiboa').innerHTML = total_maiboa;

            document.getElementById('prae_hin').innerHTML = total_hin;
            document.getElementById('prae_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("prae_data_total_maisung", total_maisung);
            localStorage.setItem("prae_data_total_mainoop", total_mainoop);
            localStorage.setItem("prae_data_total_maiboa",total_maiboa);

            localStorage.setItem("prae_data_total_hin", total_hin);
            localStorage.setItem("prae_data_total_maiyun", total_maiyun);
            

            
    
        }else if(value_prae == 6){
            
            var hin = parseInt(585);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(585);
            var maiboa = parseInt(585);
            var maiyun = parseInt(390);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
            
            var total_hin = parseInt(edit_hin - hin);
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiyun = parseInt(edit_maiyun - maiyun);
            var total_maiboa = parseInt(edit_maiboa - maiboa);

            var total_mainoop ="";

            document.getElementById('prae_hin').innerHTML = total_hin ;
            document.getElementById('prae_maisung').innerHTML = total_maisung ;
            document.getElementById('prae_maiyun').innerHTML = total_maiyun;
            document.getElementById('prae_maiboa').innerHTML = total_maiboa;

            document.getElementById('prae_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("prae_data_total_hin", total_hin);
            localStorage.setItem("prae_data_total_maisung",total_maisung);
            localStorage.setItem("prae_data_total_maiyun", total_maiyun);
            localStorage.setItem("prae_data_total_maiboa", total_maiboa);

            localStorage.setItem("prae_data_total_mainoop", total_mainoop);
    
        }else if(value_prae == 7){
    
            var hin = parseInt(998);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(998);
            var maiboa = parseInt(666);
            var maiyun = parseInt(0);
            var mainoop = parseInt(998);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
            
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiboa = parseInt(edit_maiboa - maiboa);

            var total_maiyun = "";


            document.getElementById('prae_mainoop').innerHTML = total_mainoop ;
            document.getElementById('prae_maisung').innerHTML = total_maisung ;
            document.getElementById('prae_hin').innerHTML = total_hin;
            document.getElementById('prae_maiboa').innerHTML = total_maiboa;

            document.getElementById('prae_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("prae_data_total_maisung", total_maisung);
            localStorage.setItem("prae_data_total_mainoop", total_mainoop);
            localStorage.setItem("prae_data_total_maiboa",total_maiboa);
            localStorage.setItem("prae_data_total_hin", total_hin);

            localStorage.setItem("prae_data_total_maiyun", total_maiyun);

        }else if(value_prae == 8){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(1283);
            var maiboa = parseInt(1283);
            var maiyun = parseInt(856);
            var mainoop = parseInt(1283);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
            
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiyun = parseInt(edit_maiyun - maiyun);
            var total_maiboa = parseInt(edit_maiboa - maiboa);

            var total_hin = "";


            document.getElementById('prae_mainoop').innerHTML = total_mainoop ;
            document.getElementById('prae_maisung').innerHTML = total_maisung ;
            document.getElementById('prae_maiyun').innerHTML = total_maiyun;
            document.getElementById('prae_maiboa').innerHTML = total_maiboa;

            document.getElementById('prae_hin').innerHTML = total_hin;

            localStorage.setItem("prae_data_total_maisung", total_maisung);
            localStorage.setItem("prae_data_total_mainoop", total_mainoop);
            localStorage.setItem("prae_data_total_maiboa",total_maiboa);
            localStorage.setItem("prae_data_total_maiyun", total_maiyun);

            localStorage.setItem("prae_data_total_hin", total_hin);

        }else if(value_prae == 9){
            
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(1568);
            var maiboa = parseInt(1568);
            var maiyun = parseInt(1046);
            var mainoop = parseInt(1568);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
            
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiyun = parseInt(edit_maiyun - maiyun);
            var total_maiboa = parseInt(edit_maiboa - maiboa);

            var total_hin = "";

            document.getElementById('prae_mainoop').innerHTML = total_mainoop ;
            document.getElementById('prae_maisung').innerHTML = total_maisung ;
            document.getElementById('prae_maiyun').innerHTML = total_maiyun;
            document.getElementById('prae_maiboa').innerHTML = total_maiboa;

            document.getElementById('skud_hin').innerHTML = total_hin;

            localStorage.setItem("prae_data_total_maisung", total_maisung);
            localStorage.setItem("prae_data_total_mainoop", total_mainoop);
            localStorage.setItem("prae_data_total_maiboa",total_maiboa);
            localStorage.setItem("prae_data_total_maiyun", total_maiyun);

            localStorage.setItem("skud_data_total_hin", total_hin);

        }else if(value_prae == 10){
    
        }
    
    }

    function skud(value_skud) { //โรงงานสกัด

        console.log("โรงสกัด LV." + value_skud);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_skud == 1){

            var hin = parseInt(270);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(270);
            var maiboa = parseInt(270);
            var maiyun = parseInt(0);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);

            var total_mainoop ="";
            var total_maiyun ="";
    
            document.getElementById('skud_maisung').innerHTML = total_maisung ;
            document.getElementById('skud_maiboa').innerHTML = total_maiboa;
            document.getElementById('skud_hin').innerHTML = total_hin;

            document.getElementById('skud_mainoop').innerHTML = total_mainoop;
            document.getElementById('skud_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("skud_data_total_maisung", total_maisung);
            localStorage.setItem("skud_data_total_hin", total_hin);
            localStorage.setItem("skud_data_total_maiboa",total_maiboa);

            localStorage.setItem("skud_data_total_mainoop", total_mainoop);
            localStorage.setItem("skud_data_total_maiyun", total_maiyun);

    
        }else if(value_skud == 2){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(540);
            var maiboa = parseInt(540);
            var maiyun = parseInt(0);
            var mainoop = parseInt(540);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);

            var total_hin = ""
            var total_maiyun ="";

    
            document.getElementById('skud_maisung').innerHTML = total_maisung ;
            document.getElementById('skud_maiboa').innerHTML = total_maiboa;
            document.getElementById('skud_mainoop').innerHTML = total_mainoop;

            document.getElementById('skud_hin').innerHTML = total_hin;
            document.getElementById('skud_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("skud_data_total_maisung", total_maisung);
            localStorage.setItem("skud_data_total_maiboa",total_maiboa);
            localStorage.setItem("skud_data_total_mainoop", total_mainoop);

            localStorage.setItem("skud_data_total_hin", total_hin);
            localStorage.setItem("skud_data_total_maiyun", total_maiyun);




    
        }else if(value_skud == 3){
            
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(1568);
            var maiboa = parseInt(1568);
            var maiyun = parseInt(1046);
            var mainoop = parseInt(1568);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";


    
            document.getElementById('skud_maisung').innerHTML = total_maisung ;
            document.getElementById('skud_maiboa').innerHTML = total_maiboa;
            document.getElementById('skud_mainoop').innerHTML = total_mainoop;
            document.getElementById('skud_maiyun').innerHTML = total_maiyun;

            document.getElementById('skud_hin').innerHTML = total_hin;

            localStorage.setItem("skud_data_total_maisung", total_maisung);
            localStorage.setItem("skud_data_total_maiboa",total_maiboa);
            localStorage.setItem("skud_data_total_mainoop", total_mainoop);
            localStorage.setItem("skud_data_total_maiyun", total_maiyun);

            localStorage.setItem("skud_data_total_hin", total_hin);
    
    
        }else if(value_skud == 4){
    
            
    
        }else if(value_skud == 5){
    
           
    
        }else if(value_skud == 6){
            
            
    
        }else if(value_skud == 7){
    
        }else if(value_skud == 8){
    
            

        }else if(value_skud == 9){
    
        }else if(value_skud == 10){
    
        }
        
    }

    function grun(value_grun) { //โรงกลั่น

        console.log("โรงกลั่น LV." + value_grun);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_grun == 1){

            
    
        }else if(value_grun == 2){

           
    
        }else if(value_grun == 3){
            
    
    
    
        }else if(value_grun == 4){
    
            
    
        }else if(value_grun == 5){
    
           
    
        }else if(value_grun == 6){
            
            var hin = parseInt(270);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(270);
            var maiboa = parseInt(270);
            var maiyun = parseInt(270);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('grun_maisung').innerHTML = total_maisung ;
            document.getElementById('grun_maiboa').innerHTML = total_maiboa;
            document.getElementById('grun_hin').innerHTML = total_hin;
            document.getElementById('grun_maiyun').innerHTML = total_maiyun;

            document.getElementById('grun_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("grun_data_total_maisung", total_maisung);
            localStorage.setItem("grun_data_total_hin", total_hin);
            localStorage.setItem("grun_data_total_maiboa",total_maiboa);
            localStorage.setItem("grun_data_total_maiyun", total_maiyun);

            localStorage.setItem("grun_data_total_mainoop", total_mainoop);
            
    
        }else if(value_grun == 7){

            var hin = parseInt(540);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(540);
            var maiboa = parseInt(540);
            var maiyun = parseInt(360);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('grun_maisung').innerHTML = total_maisung ;
            document.getElementById('grun_maiboa').innerHTML = total_maiboa;
            document.getElementById('grun_hin').innerHTML = total_hin;
            document.getElementById('grun_maiyun').innerHTML = total_maiyun;

            document.getElementById('grun_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("grun_data_total_maisung", total_maisung);
            localStorage.setItem("grun_data_total_hin", total_hin);
            localStorage.setItem("grun_data_total_maiboa",total_maiboa);
            localStorage.setItem("grun_data_total_maiyun", total_maiyun);

            localStorage.setItem("grun_data_total_mainoop", total_mainoop);
    
        }else if(value_grun == 8){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(1710);
            var maiboa = parseInt(1710);
            var maiyun = parseInt(1140);
            var mainoop = parseInt(1710);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('grun_maisung').innerHTML = total_maisung ;
            document.getElementById('grun_maiboa').innerHTML = total_maiboa;
            document.getElementById('grun_mainoop').innerHTML = total_mainoop;
            document.getElementById('grun_maiyun').innerHTML = total_maiyun;

            document.getElementById('grun_hin').innerHTML = total_hin;
            
            localStorage.setItem("grun_data_total_maisung", total_maisung);
            localStorage.setItem("grun_data_total_mainoop", total_mainoop);
            localStorage.setItem("grun_data_total_maiboa",total_maiboa);
            localStorage.setItem("grun_data_total_maiyun", total_maiyun);

            localStorage.setItem("grun_data_total_hin", total_hin);
    
            

        }else if(value_grun == 9){
    
        }else if(value_grun == 10){
    
        }
        
    }

    function toh(value_toh) { // โรงงานตกแต่ง

        console.log("โรงงานตกแต่ง LV." + value_toh);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_toh == 1){

            
    
        }else if(value_toh == 2){

            var hin = parseInt(270);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(270);
            var maiboa = parseInt(270);
            var maiyun = parseInt(270);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('toh_maisung').innerHTML = total_maisung ;
            document.getElementById('toh_maiboa').innerHTML = total_maiboa;
            document.getElementById('toh_hin').innerHTML = total_hin;
            document.getElementById('toh_maiyun').innerHTML = total_maiyun;

            document.getElementById('toh_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("toh_data_total_maisung", total_maisung);
            localStorage.setItem("toh_data_total_hin", total_hin);
            localStorage.setItem("toh_data_total_maiboa",total_maiboa);
            localStorage.setItem("toh_data_total_maiyun", total_maiyun);

            localStorage.setItem("toh_data_total_mainoop", total_mainoop);
           
    
        }else if(value_toh == 3){
            

        }else if(value_toh == 4){
    
              
        }else if(value_toh == 5){
    
             
        }else if(value_toh == 6){
            

        }else if(value_toh == 7){


        }else if(value_toh == 8){


        }else if(value_toh == 9){
    
        }else if(value_toh == 10){
    
        }
        
    }

    function sbaing(value_sbaing) { // คลังเก็บเสบียง
        
        console.log("คลังเก็บเสบียง LV." + value_sbaing);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_sbaing == 1){

            
    
        }else if(value_sbaing == 2){

        
           
    
        }else if(value_sbaing == 3){
            

        }else if(value_sbaing == 4){
    
              
        }else if(value_sbaing == 5){
    
             
        }else if(value_sbaing == 6){
            
            var hin = parseInt(270);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(270);
            var maiboa = parseInt(270);
            var maiyun = parseInt(270);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('sbaing_maisung').innerHTML = total_maisung ;
            document.getElementById('sbaing_maiboa').innerHTML = total_maiboa;
            document.getElementById('sbaing_hin').innerHTML = total_hin;
            document.getElementById('sbaing_maiyun').innerHTML = total_maiyun;

            document.getElementById('sbaing_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("sbaing_data_total_maisung", total_maisung);
            localStorage.setItem("sbaing_data_total_hin", total_hin);
            localStorage.setItem("sbaing_data_total_maiboa",total_maiboa);
            localStorage.setItem("sbaing_data_total_maiyun", total_maiyun);

            localStorage.setItem("sbaing_data_total_mainoop", total_mainoop);


        }else if(value_sbaing == 7){

            var hin = parseInt(540);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(540);
            var maiboa = parseInt(540);
            var maiyun = parseInt(360);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);
            
            var total_mainoop ="";
    
            document.getElementById('sbaing_maisung').innerHTML = total_maisung ;
            document.getElementById('sbaing_maiboa').innerHTML = total_maiboa;
            document.getElementById('sbaing_hin').innerHTML = total_hin;
            document.getElementById('sbaing_maiyun').innerHTML = total_maiyun;

            document.getElementById('sbaing_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("sbaing_data_total_maisung", total_maisung);
            localStorage.setItem("sbaing_data_total_hin", total_hin);
            localStorage.setItem("sbaing_data_total_maiboa",total_maiboa);
            localStorage.setItem("sbaing_data_total_maiyun", total_maiyun);

            localStorage.setItem("sbaing_data_total_mainoop", total_mainoop);

        }else if(value_sbaing == 8){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(1710);
            var maiboa = parseInt(1710);
            var maiyun = parseInt(1140);
            var mainoop = parseInt(1710);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('sbaing_maisung').innerHTML = total_maisung ;
            document.getElementById('sbaing_maiboa').innerHTML = total_maiboa;
            document.getElementById('sbaing_mainoop').innerHTML = total_mainoop;
            document.getElementById('sbaing_maiyun').innerHTML = total_maiyun;

            document.getElementById('skud_hin').innerHTML = total_hin;

            localStorage.setItem("sbaing_data_total_maisung", total_maisung);
            localStorage.setItem("sbaing_data_total_mainoop", total_mainoop);
            localStorage.setItem("sbaing_data_total_maiboa",total_maiboa);
            localStorage.setItem("sbaing_data_total_maiyun", total_maiyun);

            localStorage.setItem("skud_data_total_hin", total_hin);

        }else if(value_sbaing == 9){
    
        }else if(value_sbaing == 10){
    
        }
    }



    function oub(value_oub) { // โรงอุปรณ์

        console.log("โรงอุปกรณ์ LV." + value_oub);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_oub == 1){

            
    
        }else if(value_oub == 2){

        
           
    
        }else if(value_oub == 3){
            

        }else if(value_oub == 4){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(270);
            var maiboa = parseInt(270);
            var maiyun = parseInt(270);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
            var total_hin = "";
    
            document.getElementById('oub_maisung').innerHTML = total_maisung ;
            document.getElementById('oub_maiboa').innerHTML = total_maiboa;
            document.getElementById('oub_maiyun').innerHTML = total_maiyun;

            document.getElementById('oub_mainoop').innerHTML = total_mainoop;
            document.getElementById('oub_hin').innerHTML = total_hin;

            localStorage.setItem("oub_data_total_maisung", total_maisung);
            localStorage.setItem("oub_data_total_maiboa",total_maiboa);
            localStorage.setItem("oub_data_total_maiyun", total_maiyun);

            localStorage.setItem("oub_data_total_mainoop", total_mainoop);
            localStorage.setItem("oub_data_total_hin", total_hin);
              
        }else if(value_oub == 5){
    
             
        }else if(value_oub == 6){
            
            var hin = parseInt(720);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(720);
            var maiboa = parseInt(720);
            var maiyun = parseInt(480);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('oub_maisung').innerHTML = total_maisung ;
            document.getElementById('oub_maiboa').innerHTML = total_maiboa;
            document.getElementById('oub_hin').innerHTML = total_hin;
            document.getElementById('oub_maiyun').innerHTML = total_maiyun;

            document.getElementById('oub_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("oub_data_total_maisung", total_maisung);
            localStorage.setItem("oub_data_total_hin", total_hin);
            localStorage.setItem("oub_data_total_maiboa",total_maiboa);
            localStorage.setItem("oub_data_total_maiyun", total_maiyun);

            localStorage.setItem("oub_data_total_mainoop", total_mainoop);


        }else if(value_oub == 7){

            var hin = parseInt(855);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(855);
            var maiboa = parseInt(855);
            var maiyun = parseInt(570);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('oub_maisung').innerHTML = total_maisung ;
            document.getElementById('oub_maiboa').innerHTML = total_maiboa;
            document.getElementById('oub_hin').innerHTML = total_hin;
            document.getElementById('oub_maiyun').innerHTML = total_maiyun;

            document.getElementById('oub_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("oub_data_total_maisung", total_maisung);
            localStorage.setItem("oub_data_total_hin", total_hin);
            localStorage.setItem("oub_data_total_maiboa",total_maiboa);
            localStorage.setItem("oub_data_total_maiyun", total_maiyun);

            localStorage.setItem("oub_data_total_mainoop", total_mainoop);
            


        }else if(value_oub == 8){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(1710);
            var maiboa = parseInt(1710);
            var maiyun = parseInt(1140);
            var mainoop = parseInt(1710);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('oub_maisung').innerHTML = total_maisung ;
            document.getElementById('oub_maiboa').innerHTML = total_maiboa;
            document.getElementById('oub_mainoop').innerHTML = total_mainoop;
            document.getElementById('oub_maiyun').innerHTML = total_maiyun;

            document.getElementById('oub_hin').innerHTML = total_hin;

            localStorage.setItem("oub_data_total_maisung", total_maisung);
            localStorage.setItem("oub_data_total_mainoop", total_mainoop);
            localStorage.setItem("oub_data_total_maiboa",total_maiboa);
            localStorage.setItem("oub_data_total_maiyun", total_maiyun);

            localStorage.setItem("oub_data_total_hin", total_hin);

        }else if(value_oub == 9){
    
        }else if(value_oub == 10){
    
        }

        
    }

    function kong(value_kong) {
        
        console.log("คลังเก็บของ LV." + value_kong);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_kong == 1){

            
    
        }else if(value_kong == 2){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(102);
            var maiboa = parseInt(102);
            var maiyun = parseInt(102);
            var mainoop = parseInt(102);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";

    
            document.getElementById('kong_maisung').innerHTML = total_maisung ;
            document.getElementById('kong_maiboa').innerHTML = total_maiboa;
            document.getElementById('kong_mainoop').innerHTML = total_mainoop;
            document.getElementById('kong_maiyun').innerHTML = total_maiyun;

            document.getElementById('kong_hin').innerHTML = total_hin;

            localStorage.setItem("kong_data_total_mainoop", total_mainoop);
            localStorage.setItem("kong_data_total_maisung",total_maisung);
            localStorage.setItem("kong_data_total_maiyun", total_maiyun);
            localStorage.setItem("kong_data_total_maiboa", total_maiboa);

            localStorage.setItem("kong_data_total_hin", total_hin);


 
    
        }else if(value_kong == 3){
            

        }else if(value_kong == 4){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(270);
            var maiboa = parseInt(270);
            var maiyun = parseInt(270);
            var mainoop = parseInt(270);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_maiyun = parseInt(edit_maiyun - maiyun);
            var total_mainoop = parseInt(edit_mainoop - mainoop);

            var total_hin = "";


            document.getElementById('kong_maisung').innerHTML = total_maisung ;
            document.getElementById('kong_maiboa').innerHTML = total_maiboa;
            document.getElementById('kong_maiyun').innerHTML = total_maiyun;
            document.getElementById('kong_mainoop').innerHTML = total_mainoop;

            document.getElementById('kong_hin').innerHTML = total_hin;

            localStorage.setItem("kong_data_total_mainoop", total_mainoop);
            localStorage.setItem("kong_data_total_maisung",total_maisung);
            localStorage.setItem("kong_data_total_maiyun", total_maiyun);
            localStorage.setItem("kong_data_total_maiboa", total_maiboa);

            localStorage.setItem("kong_data_total_hin", total_hin);

              
        }else if(value_kong == 5){
    
             
        }else if(value_kong == 6){
            



        }else if(value_kong == 7){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(1620);
            var maiboa = parseInt(1620);
            var maiyun = parseInt(1620);
            var mainoop = parseInt(1620);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('kong_maisung').innerHTML = total_maisung ;
            document.getElementById('kong_maiboa').innerHTML = total_maiboa;
            document.getElementById('kong_mainoop').innerHTML = total_mainoop;
            document.getElementById('kong_maiyun').innerHTML = total_maiyun;

            document.getElementById('kong_hin').innerHTML = total_hin;

            localStorage.setItem("kong_data_total_mainoop", total_mainoop);
            localStorage.setItem("kong_data_total_maisung",total_maisung);
            localStorage.setItem("kong_data_total_maiyun", total_maiyun);
            localStorage.setItem("kong_data_total_maiboa", total_maiboa);

            localStorage.setItem("kong_data_total_hin", total_hin);


        }else if(value_kong == 8){


        }else if(value_kong == 9){
    
        }else if(value_kong == 10){
    
        }
    }

    function pasusus(value_pasusus) {   // คอกปสุสัตว์

        console.log("คอกปสุสัตว์ LV." + value_pasusus);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_pasusus == 1){

            var hin = parseInt(360);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(360);
            var maiboa = parseInt(0);
            var maiyun = parseInt(0);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_hin = parseInt(edit_hin - hin);

            var total_mainoop ="";
            var total_maiyun ="";
            var total_maiboa ="";

    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_hin').innerHTML = total_hin;

            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;

            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_hin", total_hin);

            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);
            localStorage.setItem("pasusus_data_total_maiboa", total_maiboa);


            
    
        }else if(value_pasusus == 2){

            var hin = parseInt(270);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(102);
            var maiboa = parseInt(102);
            var maiyun = parseInt(0);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);

            var total_mainoop ="";
            var total_maiyun ="";

    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_hin').innerHTML = total_hin;

            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_hin", total_hin);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);

            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);

        
           
    
        }else if(value_pasusus == 3){

            var hin = parseInt(300);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(300);
            var maiboa = parseInt(0);
            var maiyun = parseInt(300);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiyun = parseInt(edit_maiyun - maiyun);
            var total_hin = parseInt(edit_hin - hin);

            var total_mainoop ="";
            var total_maiboa ="";
    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;
            document.getElementById('pasusus_hin').innerHTML = total_hin;

            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;



            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_hin", total_hin);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);

            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiboa", total_maiboa);
            

        }else if(value_pasusus == 4){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(540);
            var maiboa = parseInt(540);
            var maiyun = parseInt(0);
            var mainoop = parseInt(540);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);

            var total_hin = "";
            var total_maiyun ="";
    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;

            document.getElementById('pasusus_hin').innerHTML = total_hin;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);

            
            localStorage.setItem("pasusus_data_total_hin", total_hin);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);


              
        }else if(value_pasusus == 5){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(585);
            var maiboa = parseInt(585);
            var maiyun = parseInt(0);
            var mainoop = parseInt(585);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);

            var total_hin = "";
            var total_maiyun ="";
          
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;


            document.getElementById('pasusus_hin').innerHTML = total_hin;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;



            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);

            

            localStorage.setItem("pasusus_data_total_hin", total_hin);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);

    
             
        }else if(value_pasusus == 6){
            
            var hin = parseInt(675);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(675);
            var maiboa = parseInt(675);
            var maiyun = parseInt(450);
            var mainoop = parseInt(0);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";


    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_hin').innerHTML = total_hin;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;

            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;



            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_hin", total_hin);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);

            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);

        }else if(value_pasusus == 7){

            var hin = parseInt(675);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(675);
            var maiboa = parseInt(675);
            var maiyun = parseInt(450);
            var mainoop = parseInt(0);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_hin = parseInt(edit_maiyun - hin);

            var total_maiyun ="";
    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_hin').innerHTML = total_hin;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;

            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;

            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_hin", total_hin);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);
            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);

            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);
           
        }else if(value_pasusus == 8){


        }else if(value_pasusus == 9){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(1995);
            var maiboa = parseInt(1995);
            var maiyun = parseInt(1330);
            var mainoop = parseInt(1995);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;

            document.getElementById('pasusus_hin').innerHTML = total_hin;

            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);

            localStorage.setItem("pasusus_data_total_hin", total_hin);

    
        }else if(value_pasusus == 10){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(3000);
            var maiboa = parseInt(3000);
            var maiyun = parseInt(3000);
            var mainoop = parseInt(3000);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('pasusus_maisung').innerHTML = total_maisung ;
            document.getElementById('pasusus_maiboa').innerHTML = total_maiboa;
            document.getElementById('pasusus_mainoop').innerHTML = total_mainoop;
            document.getElementById('pasusus_maiyun').innerHTML = total_maiyun;

            document.getElementById('pasusus_hin').innerHTML = total_hin;

            localStorage.setItem("pasusus_data_total_maisung", total_maisung);
            localStorage.setItem("pasusus_data_total_mainoop", total_mainoop);
            localStorage.setItem("pasusus_data_total_maiboa",total_maiboa);
            localStorage.setItem("pasusus_data_total_maiyun", total_maiyun);
    
            localStorage.setItem("pasusus_data_total_hin", total_hin);

        }
        
    }

    function kogma(value_kogma) { //คอกม้า

        console.log("คอกม้า LV." + value_kogma);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_kogma == 1){


    
        }else if(value_kogma == 2){

    
        }else if(value_kogma == 3){

            var hin = parseInt(360);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);
            var maisung = parseInt(360);
            var maiboa = parseInt(360);
            var maiyun = parseInt(240);
            var mainoop = parseInt(0);
            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_hin = parseInt(edit_hin - hin);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_mainoop ="";
    
            document.getElementById('kogma_maisung').innerHTML = total_maisung ;
            document.getElementById('kogma_maiboa').innerHTML = total_maiboa;
            document.getElementById('kogma_hin').innerHTML = total_hin;
            document.getElementById('kogma_maiyun').innerHTML = total_maiyun;

            document.getElementById('kogma_mainoop').innerHTML = total_mainoop;

            localStorage.setItem("kogma_data_total_maisung", total_maisung);
            localStorage.setItem("kogma_data_total_hin", total_hin);
            localStorage.setItem("kogma_data_total_maiboa",total_maiboa);
            localStorage.setItem("kogma_data_total_maiyun", total_maiyun);

            localStorage.setItem("kogma_data_total_mainoop", total_mainoop);

            

        }else if(value_kogma == 4){
    
            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(1283);
            var maiboa = parseInt(1283);
            var maiyun = parseInt(856);
            var mainoop = parseInt(1283);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('kogma_maisung').innerHTML = total_maisung ;
            document.getElementById('kogma_maiboa').innerHTML = total_maiboa;
            document.getElementById('kogma_mainoop').innerHTML = total_mainoop;
            document.getElementById('kogma_maiyun').innerHTML = total_maiyun;

            document.getElementById('kogma_hin').innerHTML = total_hin;

            localStorage.setItem("kogma_data_total_maisung", total_maisung);
            localStorage.setItem("kogma_data_total_mainoop", total_mainoop);
            localStorage.setItem("kogma_data_total_maiboa",total_maiboa);
            localStorage.setItem("kogma_data_total_maiyun", total_maiyun);

            localStorage.setItem("kogma_data_total_hin", total_hin);
              
        }else if(value_kogma == 5){
    
             
        }else if(value_kogma == 6){
            

        }else if(value_kogma == 7){

           
        }else if(value_kogma == 8){


        }else if(value_kogma == 9){
    
        }else if(value_kogma == 10){
    
        }
        
    }

    function teepuk(value_teepuk) {

        console.log("ที่พัก LV." + value_teepuk);
    
    
    
        var edit_hin = cal_hin.value;
        var edit_lek = cal_lek.value;
        var edit_tongdang = cal_tongdang.value;
        var edit_deebook = cal_deebook.value;
        var edit_maisung = cal_maisung.value;
        var edit_maiboa = cal_maiboa.value;
        var edit_maiyun = cal_maiyun.value;
        var edit_mainoop = cal_mainoop.value;
        var edit_pan = cal_pan.value;
        var edit_sumlee =cal_sumlee.value;
        var edit_yapa = cal_yapa.value;
        var edit_rangmai = cal_rangmai.value;
    
    
        
        
        if(value_teepuk == 1){


    
        }else if(value_teepuk == 2){

            var hin = parseInt(0);
            var lek = parseInt(0);
            var tongdang = parseInt(0);
            var deebook = parseInt(0);

            var maisung = parseInt(1140);
            var maiboa = parseInt(1140);
            var maiyun = parseInt(760);
            var mainoop = parseInt(1140);

            var pan = parseInt(0);
            var sumlee = parseInt(0);
            var yapa = parseInt(0);
            var rangmai = parseInt(0);
    
            var total_maisung = parseInt(edit_maisung - maisung);
            var total_maiboa = parseInt(edit_maiboa - maiboa);
            var total_mainoop = parseInt(edit_mainoop - mainoop);
            var total_maiyun = parseInt(edit_maiyun - maiyun);

            var total_hin = "";
    
            document.getElementById('teepuk_maisung').innerHTML = total_maisung ;
            document.getElementById('teepuk_maiboa').innerHTML = total_maiboa;
            document.getElementById('teepuk_mainoop').innerHTML = total_mainoop;
            document.getElementById('teepuk_maiyun').innerHTML = total_maiyun;

            document.getElementById('teepuk_hin').innerHTML = total_hin;

            localStorage.setItem("teepuk_data_total_maisung", total_maisung);
            localStorage.setItem("teepuk_data_total_mainoop", total_mainoop);
            localStorage.setItem("teepuk_data_total_maiboa",total_maiboa);
            localStorage.setItem("teepuk_data_total_maiyun", total_maiyun);

            localStorage.setItem("teepuk_data_total_hin", total_hin);

    
        }else if(value_teepuk == 3){

    

        }else if(value_teepuk == 4){
    

              
        }else if(value_teepuk == 5){
    
             
        }else if(value_teepuk == 6){
            

        }else if(value_teepuk == 7){

           
        }else if(value_teepuk == 8){


        }else if(value_teepuk == 9){
    
        }else if(value_teepuk == 10){
    
        }
        
    }

}

