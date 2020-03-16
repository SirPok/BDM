function change_update_resource() {

    var change_camp = document.getElementById('change_select').value;
    console.log(change_camp);

    if (change_camp == "ฐานบัญชาการ") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("tan_data_total_maisung");
        var change_hin = localStorage.getItem("tan_data_total_hin");
        var change_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var change_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var change_mainoop = localStorage.getItem("tan_data_total_mainoop");

        console.log("รับตามเงื่อนไข ฐาน");
        
        console.log("tan_data_total_maisung = " + change_maisung);
        console.log("tan_data_total_hin = " + change_hin);
        console.log("tan_data_total_maiboa = " + change_maiboa);
        console.log("tan_data_total_maiyun = " + change_maiyun);
        console.log("tan_data_total_mainoop = " + change_mainoop);

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //แปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก ฐานบัญชาการ " + tan_get_new_value_hin);




        document.getElementById('tan_maisung').innerHTML = all_cal[0];
        document.getElementById('tan_hin').innerHTML = all_cal[1];
        document.getElementById('tan_maiboa').innerHTML = all_cal[2];
        document.getElementById('tan_maiyun').innerHTML = all_cal[3];
        document.getElementById('tan_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;



    } else if (change_camp == "โรงแปรธาตุ") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("prae_data_total_maisung");
        var change_hin = localStorage.getItem("prae_data_total_hin");
        var change_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var change_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var change_mainoop = localStorage.getItem("prae_data_total_mainoop");

        console.log("รับตามเงื่อนไข แปรธาตุ");
        
        console.log("prae_data_total_maisung = " + change_maisung);
        console.log("prae_data_total_hin = " + change_hin);
        console.log("prae_data_total_maiboa = " + change_maiboa);
        console.log("prae_data_total_maiyun = " + change_maiyun);
        console.log("prae_data_total_mainoop = " + change_mainoop);

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก โรงแปรธาตุ " + tan_get_new_value_hin);




        document.getElementById('prae_maisung').innerHTML = all_cal[0];
        document.getElementById('prae_hin').innerHTML = all_cal[1];
        document.getElementById('prae_maiboa').innerHTML = all_cal[2];
        document.getElementById('prae_maiyun').innerHTML = all_cal[3];
        document.getElementById('prae_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;
        



    } else if (change_camp == "คลังเก็บของ") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("kong_data_total_maisung");
        var change_hin = localStorage.getItem("kong_data_total_hin");
        var change_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var change_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var change_mainoop = localStorage.getItem("kong_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก คลังเก็บของ " + tan_get_new_value_hin);




        document.getElementById('kong_maisung').innerHTML = all_cal[0];
        document.getElementById('kong_hin').innerHTML = all_cal[1];
        document.getElementById('kong_maiboa').innerHTML = all_cal[2];
        document.getElementById('kong_maiyun').innerHTML = all_cal[3];
        document.getElementById('kong_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;
        

    } else if (change_camp == "โรงสกัด") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("skud_data_total_maisung");
        var change_hin = localStorage.getItem("skud_data_total_hin");
        var change_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var change_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var change_mainoop = localStorage.getItem("skud_data_total_mainoop");

        console.log("รับตามเงื่อนไข");
        
        console.log("skud_data_total_maisung = " + change_maisung);
        console.log("skud_data_total_hin = " + change_hin);
        console.log("skud_data_total_maiboa = " + change_maiboa);
        console.log("skud_data_total_maiyun = " + change_maiyun);
        console.log("skud_data_total_mainoop = " + change_mainoop);

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก โรงสกัด " + tan_get_new_value_hin);




        document.getElementById('skud_maisung').innerHTML = all_cal[0];
        document.getElementById('skud_hin').innerHTML = all_cal[1];
        document.getElementById('skud_maiboa').innerHTML = all_cal[2];
        document.getElementById('skud_maiyun').innerHTML = all_cal[3];
        document.getElementById('skud_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;

    } else if (change_camp == "โรงกลั่น") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("grun_data_total_maisung");
        var change_hin = localStorage.getItem("grun_data_total_hin");
        var change_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var change_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var change_mainoop = localStorage.getItem("grun_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก โรงกลั่น " + tan_get_new_value_hin);




        document.getElementById('grun_maisung').innerHTML = all_cal[0];
        document.getElementById('grun_hin').innerHTML = all_cal[1];
        document.getElementById('grun_maiboa').innerHTML = all_cal[2];
        document.getElementById('grun_maiyun').innerHTML = all_cal[3];
        document.getElementById('grun_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;


    } else if (change_camp == "โรงงานตกแต่ง") {


        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("toh_data_total_maisung");
        var change_hin = localStorage.getItem("toh_data_total_hin");
        var change_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var change_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var change_mainoop = localStorage.getItem("toh_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก โรงงานตกแต่ง " + tan_get_new_value_hin);




        document.getElementById('toh_maisung').innerHTML = all_cal[0];
        document.getElementById('toh_hin').innerHTML = all_cal[1];
        document.getElementById('toh_maiboa').innerHTML = all_cal[2];
        document.getElementById('toh_maiyun').innerHTML = all_cal[3];
        document.getElementById('toh_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;


    } else if (change_camp == "คลังเก็บเสบียง") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var change_hin = localStorage.getItem("sbaing_data_total_hin");
        var change_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var change_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var change_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก คลังเก็บเสบียง " + tan_get_new_value_hin);




        document.getElementById('sbaing_maisung').innerHTML = all_cal[0];
        document.getElementById('sbaing_hin').innerHTML = all_cal[1];
        document.getElementById('sbaing_maiboa').innerHTML = all_cal[2];
        document.getElementById('sbaing_maiyun').innerHTML = all_cal[3];
        document.getElementById('sbaing_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;

    } else if (change_camp == "โรงอุปกรณ์") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("oub_data_total_maisung");
        var change_hin = localStorage.getItem("oub_data_total_hin");
        var change_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var change_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var change_mainoop = localStorage.getItem("oub_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก โรงอุปกรณ์ " + tan_get_new_value_hin);




        document.getElementById('oub_maisung').innerHTML = all_cal[0];
        document.getElementById('oub_hin').innerHTML = all_cal[1];
        document.getElementById('oub_maiboa').innerHTML = all_cal[2];
        document.getElementById('oub_maiyun').innerHTML = all_cal[3];
        document.getElementById('oub_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;


    } else if (change_camp == "ที่พัก") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var change_hin = localStorage.getItem("teepuk_data_total_hin");
        var change_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var change_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var change_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก ที่พัก " + tan_get_new_value_hin);




        document.getElementById('teepuk_maisung').innerHTML = all_cal[0];
        document.getElementById('teepuk_hin').innerHTML = all_cal[1];
        document.getElementById('teepuk_maiboa').innerHTML = all_cal[2];
        document.getElementById('teepuk_maiyun').innerHTML = all_cal[3];
        document.getElementById('teepuk_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;


        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;


    } else if (change_camp == "คอกม้า") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("kogma_data_total_maisung");
        var change_hin = localStorage.getItem("kogma_data_total_hin");
        var change_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var change_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var change_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกปสุสัตว์
        var pasusus_tchange_hin = localStorage.getItem("pasusus_data_total_hin");
        var pasusus_tchange_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var pasusus_tchange_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var pasusus_tchange_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var pasusus_tchange_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก คอกม้า " + tan_get_new_value_hin);




        document.getElementById('kogma_maisung').innerHTML = all_cal[0];
        document.getElementById('kogma_hin').innerHTML = all_cal[1];
        document.getElementById('kogma_maiboa').innerHTML = all_cal[2];
        document.getElementById('kogma_maiyun').innerHTML = all_cal[3];
        document.getElementById('kogma_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;


        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;


        // คอกปสุสัตว์
        document.getElementById('pasusus_hin').innerHTML = pasusus_tchange_hin ;
        document.getElementById('pasusus_maisung').innerHTML = pasusus_tchange_maisung ;
        document.getElementById('pasusus_maiboa').innerHTML = pasusus_tchange_maiboa ;
        document.getElementById('pasusus_maiyun').innerHTML = pasusus_tchange_maiyun ;
        document.getElementById('pasusus_mainoop').innerHTML = pasusus_tchange_mainoop ;

    } else if (change_camp == "คอกปสุสัตว์") {

        // ดึงค่ามาตามเงื่อนไข
        var change_maisung = localStorage.getItem("pasusus_data_total_maisung");
        var change_hin = localStorage.getItem("pasusus_data_total_hin");
        var change_maiboa = localStorage.getItem("pasusus_data_total_maiboa");
        var change_maiyun = localStorage.getItem("pasusus_data_total_maiyun");
        var change_mainoop = localStorage.getItem("pasusus_data_total_mainoop");

        // รับค่าจากหน้าจอแสดงผล
        
        var tan_get_new_value_maisung = document.getElementById('new_value_maisung').value;
        var tan_get_new_value_hin = document.getElementById('new_value_hin').value;
        var tan_get_new_value_maiboa = document.getElementById('new_value_maiboa').value;
        var tan_get_new_value_maiyun = document.getElementById('new_value_maiyun').value;
        var tan_get_new_value_mainoop = document.getElementById('new_value_mainoop').value;


            // คำนวณหาผลลัพท์จากการผลรวมของตัวเลขหน้าแสดงผล
            var calculate_to_change_hin;
            var calculate_to_change_maisung;
            var calculate_to_change_maiboa;
            var calculate_to_change_maiyun;
            var calculate_to_change_mainoop;
            // ------------------------


        var array_change_condition = [change_maisung, change_hin, change_maiboa, change_maiyun, change_mainoop];
        var all_cal = [calculate_to_change_maisung, calculate_to_change_hin, calculate_to_change_maiboa, calculate_to_change_maiyun, calculate_to_change_mainoop];
        var all_get = [tan_get_new_value_maisung, tan_get_new_value_hin, tan_get_new_value_maiboa, tan_get_new_value_maiyun, tan_get_new_value_mainoop];

        
        for(var m = 1 ; m <= 5 ; m++){

            if (tan_get_new_value_maisung == "") {

                tan_get_new_value_maisung = 0;
    
            } else if (tan_get_new_value_hin == "") {
    
                tan_get_new_value_hin = 0;
    
            } else if (tan_get_new_value_maiboa == "") {
    
                tan_get_new_value_maiboa = 0;
    
            } else if (tan_get_new_value_maiyun == "") {
    
                tan_get_new_value_maiyun = 0;
    
            } else if (tan_get_new_value_mainoop == "") {
    
                tan_get_new_value_mainoop = 0;
    
            }
            

        }


        
        



        console.log("ไม้ซุง แบบไม่ใส่ = " + tan_get_new_value_maisung);

        // ------------------------ 

    

        var count_index = 0;


        for (var i = 1; i <= 5; i++) {


            if (array_change_condition[count_index] == "" ) {

                var x = array_change_condition[count_index] = "" ;

                all_cal[count_index] =  x;

                console.log("เท่ากับ ว่าง " + count_index);

            }else if(array_change_condition[count_index] != ""){

                all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(all_get[count_index]);

                if(all_get[count_index] == "" || array_change_condition[count_index] == null ){

                    if(array_change_condition[count_index] == null){
                        all_cal[count_index] =  "";
                        array_change_condition[count_index] = "";

                    }else{

                        all_cal[count_index] =  parseInt(array_change_condition[count_index]) + parseInt(0);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + 0 + " = " + all_cal[count_index]);
                    }
                    

                }else if(all_get[count_index] != ""){

                    console.log("ไม่เท่ากับ ว่าง " + count_index);
                    console.log("ตำแหน่งที่ " + count_index + " ค่า " + array_change_condition[count_index] + " + " + all_get[count_index] + " = " + all_cal[count_index]);
                
                }
                
                

                
                
            }

            count_index++;


        }


        // ข้อมูลที่ไม่เกี่ยวข้องกับ ฐานบัญชาการ รับค่ามาจากการคำนวณเรียบร้อยแล้ว **** แสงเป็นค่าเดิม ที่ไม่ใช่ข้อมูลของ ฐานบัญชาการ

        //ฐานบัญชาการ
        var tan_tchange_hin = localStorage.getItem("tan_data_total_hin");
        var tan_tchange_maisung = localStorage.getItem("tan_data_total_maisung");
        var tan_tchange_maiboa = localStorage.getItem("tan_data_total_maiboa");
        var tan_tchange_maiyun = localStorage.getItem("tan_data_total_maiyun");
        var tan_tchange_mainoop = localStorage.getItem("tan_data_total_mainoop");


        //คลังเก็บของ
        var kong_tchange_hin = localStorage.getItem("kong_data_total_hin");
        var kong_tchange_maisung = localStorage.getItem("kong_data_total_maisung");
        var kong_tchange_maiboa = localStorage.getItem("kong_data_total_maiboa");
        var kong_tchange_maiyun = localStorage.getItem("kong_data_total_maiyun");
        var kong_tchange_mainoop = localStorage.getItem("kong_data_total_mainoop");

        //โรงแปรธาตุ
        var prae_tchange_hin = localStorage.getItem("prae_data_total_hin");
        var prae_tchange_maisung = localStorage.getItem("prae_data_total_maisung");
        var prae_tchange_maiboa = localStorage.getItem("prae_data_total_maiboa");
        var prae_tchange_maiyun = localStorage.getItem("prae_data_total_maiyun");
        var prae_tchange_mainoop = localStorage.getItem("prae_data_total_mainoop");

        //โรงสกัด
        var skud_tchange_hin = localStorage.getItem("skud_data_total_hin");
        var skud_tchange_maisung = localStorage.getItem("skud_data_total_maisung");
        var skud_tchange_maiboa = localStorage.getItem("skud_data_total_maiboa");
        var skud_tchange_maiyun = localStorage.getItem("skud_data_total_maiyun");
        var skud_tchange_mainoop = localStorage.getItem("skud_data_total_mainoop");

        //โรงกลั่น
        var grun_tchange_hin = localStorage.getItem("grun_data_total_hin");
        var grun_tchange_maisung = localStorage.getItem("grun_data_total_maisung");
        var grun_tchange_maiboa = localStorage.getItem("grun_data_total_maiboa");
        var grun_tchange_maiyun = localStorage.getItem("grun_data_total_maiyun");
        var grun_tchange_mainoop = localStorage.getItem("grun_data_total_mainoop");

        //โรงงานตกแต่ง
        var toh_tchange_hin = localStorage.getItem("toh_data_total_hin");
        var toh_tchange_maisung = localStorage.getItem("toh_data_total_maisung");
        var toh_tchange_maiboa = localStorage.getItem("toh_data_total_maiboa");
        var toh_tchange_maiyun = localStorage.getItem("toh_data_total_maiyun");
        var toh_tchange_mainoop = localStorage.getItem("toh_data_total_mainoop");

        //คลังเก็บเสบียง
        var sbaing_tchange_hin = localStorage.getItem("sbaing_data_total_hin");
        var sbaing_tchange_maisung = localStorage.getItem("sbaing_data_total_maisung");
        var sbaing_tchange_maiboa = localStorage.getItem("sbaing_data_total_maiboa");
        var sbaing_tchange_maiyun = localStorage.getItem("sbaing_data_total_maiyun");
        var sbaing_tchange_mainoop = localStorage.getItem("sbaing_data_total_mainoop");

        //โรงอุปกรณ์
        var oub_tchange_hin = localStorage.getItem("oub_data_total_hin");
        var oub_tchange_maisung = localStorage.getItem("oub_data_total_maisung");
        var oub_tchange_maiboa = localStorage.getItem("oub_data_total_maiboa");
        var oub_tchange_maiyun = localStorage.getItem("oub_data_total_maiyun");
        var oub_tchange_mainoop = localStorage.getItem("oub_data_total_mainoop");

        //ที่พัก
        var teepuk_tchange_hin = localStorage.getItem("teepuk_data_total_hin");
        var teepuk_tchange_maisung = localStorage.getItem("teepuk_data_total_maisung");
        var teepuk_tchange_maiboa = localStorage.getItem("teepuk_data_total_maiboa");
        var teepuk_tchange_maiyun = localStorage.getItem("teepuk_data_total_maiyun");
        var teepuk_tchange_mainoop = localStorage.getItem("teepuk_data_total_mainoop");

        //คอกม้า
        var kogma_tchange_hin = localStorage.getItem("kogma_data_total_hin");
        var kogma_tchange_maisung = localStorage.getItem("kogma_data_total_maisung");
        var kogma_tchange_maiboa = localStorage.getItem("kogma_data_total_maiboa");
        var kogma_tchange_maiyun = localStorage.getItem("kogma_data_total_maiyun");
        var kogma_tchange_mainoop = localStorage.getItem("kogma_data_total_mainoop");

        // ------------------------ 



        console.log("เลือก คอกปสุสัตว์ " + tan_get_new_value_hin);




        document.getElementById('pasusus_maisung').innerHTML = all_cal[0];
        document.getElementById('pasusus_hin').innerHTML = all_cal[1];
        document.getElementById('pasusus_maiboa').innerHTML = all_cal[2];
        document.getElementById('pasusus_maiyun').innerHTML = all_cal[3];
        document.getElementById('pasusus_mainoop').innerHTML = all_cal[4];


        //โชว์ค่าเดิม

        // ฐานบัญชาการ
        document.getElementById('tan_hin').innerHTML = tan_tchange_hin ;
        document.getElementById('tan_maisung').innerHTML = tan_tchange_maisung ;
        document.getElementById('tan_maiboa').innerHTML = tan_tchange_maiboa ;
        document.getElementById('tan_maiyun').innerHTML = tan_tchange_maiyun ;
        document.getElementById('tan_mainoop').innerHTML = tan_tchange_mainoop ;

        // คลังเก็บของ
        document.getElementById('kong_hin').innerHTML = kong_tchange_hin ;
        document.getElementById('kong_maisung').innerHTML = kong_tchange_maisung ;
        document.getElementById('kong_maiboa').innerHTML = kong_tchange_maiboa ;
        document.getElementById('kong_maiyun').innerHTML = kong_tchange_maiyun ;
        document.getElementById('kong_mainoop').innerHTML = kong_tchange_mainoop ;

        // โรงแปรธาตุ
        document.getElementById('prae_hin').innerHTML = prae_tchange_hin ;
        document.getElementById('prae_maisung').innerHTML = prae_tchange_maisung ;
        document.getElementById('prae_maiboa').innerHTML = prae_tchange_maiboa ;
        document.getElementById('prae_maiyun').innerHTML = prae_tchange_maiyun ;
        document.getElementById('prae_mainoop').innerHTML = prae_tchange_mainoop ;

        // โรงสกัด
        document.getElementById('skud_hin').innerHTML = skud_tchange_hin ;
        document.getElementById('skud_maisung').innerHTML = skud_tchange_maisung ;
        document.getElementById('skud_maiboa').innerHTML = skud_tchange_maiboa ;
        document.getElementById('skud_maiyun').innerHTML = skud_tchange_maiyun ;
        document.getElementById('skud_mainoop').innerHTML = skud_tchange_mainoop ;

        // โรงกลั่น
        document.getElementById('grun_hin').innerHTML = grun_tchange_hin ;
        document.getElementById('grun_maisung').innerHTML = grun_tchange_maisung ;
        document.getElementById('grun_maiboa').innerHTML = grun_tchange_maiboa ;
        document.getElementById('grun_maiyun').innerHTML = grun_tchange_maiyun ;
        document.getElementById('grun_mainoop').innerHTML = grun_tchange_mainoop ;

        // โรงงานตกแต่ง
        document.getElementById('toh_hin').innerHTML = toh_tchange_hin ;
        document.getElementById('toh_maisung').innerHTML = toh_tchange_maisung ;
        document.getElementById('toh_maiboa').innerHTML = toh_tchange_maiboa ;
        document.getElementById('toh_maiyun').innerHTML = toh_tchange_maiyun ;
        document.getElementById('toh_mainoop').innerHTML = toh_tchange_mainoop ;

        // คลังเก็บเสบียง
        document.getElementById('sbaing_hin').innerHTML = sbaing_tchange_hin ;
        document.getElementById('sbaing_maisung').innerHTML = sbaing_tchange_maisung ;
        document.getElementById('sbaing_maiboa').innerHTML = sbaing_tchange_maiboa ;
        document.getElementById('sbaing_maiyun').innerHTML = sbaing_tchange_maiyun ;
        document.getElementById('sbaing_mainoop').innerHTML = sbaing_tchange_mainoop ;

        // โรงอุปกรณ์
        document.getElementById('oub_hin').innerHTML = oub_tchange_hin ;
        document.getElementById('oub_maisung').innerHTML = oub_tchange_maisung ;
        document.getElementById('oub_maiboa').innerHTML = oub_tchange_maiboa ;
        document.getElementById('oub_maiyun').innerHTML = oub_tchange_maiyun ;
        document.getElementById('oub_mainoop').innerHTML = oub_tchange_mainoop ;


        // ที่พัก
        document.getElementById('teepuk_hin').innerHTML = teepuk_tchange_hin ;
        document.getElementById('teepuk_maisung').innerHTML = teepuk_tchange_maisung ;
        document.getElementById('teepuk_maiboa').innerHTML = teepuk_tchange_maiboa ;
        document.getElementById('teepuk_maiyun').innerHTML = teepuk_tchange_maiyun ;
        document.getElementById('teepuk_mainoop').innerHTML = teepuk_tchange_mainoop ;
        

        // คอกม้า
        document.getElementById('kogma_hin').innerHTML = kogma_tchange_hin ;
        document.getElementById('kogma_maisung').innerHTML = kogma_tchange_maisung ;
        document.getElementById('kogma_maiboa').innerHTML = kogma_tchange_maiboa ;
        document.getElementById('kogma_maiyun').innerHTML = kogma_tchange_maiyun ;
        document.getElementById('kogma_mainoop').innerHTML = kogma_tchange_mainoop ;

    }

}