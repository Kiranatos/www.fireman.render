$(document).ready(function(){
    
    var startKnotI = true;              //Индикатор нажатия кнопки УЗЛА НАЧАЛА ПУТИ
    var iKnotEntrance = 0;              //Счётчик количества входящих узлов
    
    var exitKnotI = true;               //Индикатор нажатия кнопки УЗЛА КОНЕЦ ПУТИ (Выход)
    var iKnotExit = 0;                  //Счётчик количества выходящих узлов

    var KnotI = true;                   //Индикатор нажатия кнопки УЗЛА ПРОСТОГО
    var iKnot = 0;                      //Счётчик количества простых узлов
    
    var fireI = true;                   //Индикатор нажатия кнопки ПОДЖЕЧЬ
    var ifire = 0;                      //Счётчик количества горящих узлов
    
    var lineI = true;                   //Индикатор нажатия кнопки ПУТЬ (Линия)
    
    var x_old=0.5, y_old=0.5;
        
    var mPlan = $('#mainPlan');
    
    
    
    

function lineF (x1,y1,x2,y2, color) {
    var b_canvas = document.getElementById("idCanvas");
    var b_context = b_canvas.getContext("2d");
    
    b_context.moveTo(x1, y1);
    b_context.lineTo(x2, y2);
    b_context.strokeStyle = color;
    b_context.stroke();
    
    //alert("Координаты: x1=" + x1 + " : y1=" + y1 + " x2=" + x2 + " : y2=" + y2);
    
}

    
    
    
    /*******************************************/
    /*** ЧАСТЬ 1. Движение мыши над областью с планом ***/
    /*******************************************/
    mPlan.hover(function(){
        $(this).css({
            'cursor':'crosshair'
        })
    },function(){
        $(this).css({
            'cursor':'default'
        })
    })  // КОНЕЦ mPlan.hover(function(){
    
    
    /*****************************************************/
    /***** ЧАСТЬ 2.  Клик мыши над областью с планом *****/
    /*****************************************************/
    mPlan.click(function( eventClickPlan ){
        
        var x = eventClickPlan.pageX - $(this).offset().left;   // Определение координаты х клика мыши отностительно Объекта Плана
        var y = eventClickPlan.pageY - $(this).offset().top;    // Определение координаты х клика мыши отностительно Объекта Плана
        //alert("Координаты: " + x + " : " + y);
        
        //Кнопка начала пути (КНОПКА № 2)
        if (!startKnotI) {
            var masiv = '<div><img class="startKnots" id="knotEnt_' + iKnotEntrance + '" src="img/run.jpg" alt="Начало пути"/></div>';
            mPlan.append(masiv);
            var idCreate = '#' + 'knotEnt_' + iKnotEntrance;
            $(idCreate).css({
                'left': x-15,
                'top': y-15
            });
            iKnotEntrance++;
        }
        
        //Кнопка ПРОСТОГО узла (КНОПКА № 3)
        if (!KnotI) {
            var masiv = '<div><img class="knots" id="knot_' + iKnot + '" src="img/knot.png" alt="узел"/></div>';
            mPlan.append(masiv);
            var idCreate = '#' + 'knot_' + iKnot;
            $(idCreate).css({
                'left': x-15,
                'top': y-15
            });
            iKnot++;
        }

        //Кнопка узла Выхода (КНОПКА № 4)
        if (!exitKnotI) {
            var masiv = '<div><img class="exitKnots" id="knotExit_' + iKnotExit + '" src="img/exit.jpg" alt="Выход"/></div>';
            mPlan.append(masiv);
            var idCreate = '#' + 'knotExit_' + iKnotExit;
            $(idCreate).css({
                'left': x-15,
                'top': y-15
            });
            iKnotExit++;
        }       
        
        //Кнопка пожара
        if (!fireI) {
            var masiv = '<div><img class="fireON" id="fire_' + ifire + '" src="img/fire.gif" alt="Пожар"/></div>';        
            mPlan.append(masiv);
            var idCreate = '#' + 'fire_' + ifire;
            $(idCreate).css({
                'left': x-38,
                'top': y-58
            });
            ifire++;
        }
        
        if (!lineI) {
            lineF(x_old,y_old,x,y,'#5DC146');
        }
        
        
        
        
        
        x_old=x;
        y_old=y;
    } ) ; // КОНЕЦ mPlan.click(function( eventClickPlan ){
    
    
    
    /******************************************************/
    /*****  ЧАСТЬ 3.  ПРОГРАММИРОВАНИЕ КНОПОК *************/
    /******************************************************/
    
    
    /*******************************************/
    /*****  ЧАСТЬ 3.2.  КНОПКА УЗЛА НАЧАЛА ПУТИ *************/
    /****************** startKnotI ********************/
    /*******************************************/    
    $('#knotEntranceID').click(function(eventClickButton1){
        if (startKnotI) {
            $(this).removeClass('unpressed');
            $(this).addClass('pressed');
            startKnotI = false;
        }
        else {
            $(this).removeClass('pressed');
            $(this).addClass('unpressed');
            startKnotI = true;
        }                
    });    
    
    /*******************************************/
    /*****  ЧАСТЬ 3.3.  КНОПКА УЗЛА ПРОСТОГО *************/
    /****************** KnotI ********************/
    /*******************************************/    
    $('#knotID').click(function(eventClickButton1){
        if (KnotI) {
            $(this).removeClass('unpressed');
            $(this).addClass('pressed');
            KnotI = false;
        }
        else {
            $(this).removeClass('pressed');
            $(this).addClass('unpressed');
            KnotI = true;
        }                
    });    

    /*******************************************/
    /*****  ЧАСТЬ 3.4.  КНОПКА ЗЕЛЁНОЙ ЛИНИИ *************/
    /****************** lineI ********************/
    /*******************************************/    
    $('#knotLineID').click(function(eventClickButton1){
        if (lineI) {
            $(this).removeClass('unpressed');
            $(this).addClass('pressed');
            lineI = false;
        }
        else {
            $(this).removeClass('pressed');
            $(this).addClass('unpressed');
            lineI = true;
        }                
    });    
    
    
    /*******************************************/
    /*****  ЧАСТЬ 3.5.  КНОПКА ВЫХОДА *************/
    /****************** exitKnotI ********************/
    /*******************************************/    
    $('#knotExitID').click(function(eventClickButton1){
        if (exitKnotI) {
            $(this).removeClass('unpressed');
            $(this).addClass('pressed');
            exitKnotI = false;
        }
        else {
            $(this).removeClass('pressed');
            $(this).addClass('unpressed');
            exitKnotI = true;
        }                
    });    
    
    
    
    /*******************************************/
    /*****  ЧАСТЬ .1.  КНОПКА ПОЖАРА *************/
    /****************** fireI ********************/
    /*******************************************/    
    $('#fireID').click(function(eventClickButton1){
        if (fireI) {
            $(this).removeClass('unpressed');
            $(this).addClass('pressed');
            fireI = false;
        }
        else {
            $(this).removeClass('pressed');
            $(this).addClass('unpressed');
            fireI = true;
        }                
    });















    
}); //$(document).ready(function(){


