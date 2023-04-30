$(document).ready(function(){
    correct = ["2009", "Adai Shomanov", "code", "js", "css"];
    questions = ["Which year Nazarbayev University was founded?","What is the name of the instructor of the course?", "What Adai Shomanov teaches us?", "What is the short version of javascript?", "What language do we use to style the webpage?"]
    choice_options = [["2009","2010","2011","2012"],["Adai Shomanov","Anna Andreeva","Mariya Deykute","Olena Filchakova"],["boxing", "code", "life", "football"], ["jm", "jc", "js", "jv"], ["csgo", "english", "css", "russian"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question1'>"); 
    
    $('.question1').append ("<p class='d'> Q1. Which year Nazarbayev University was founded? </p>");
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>2010</label>");
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>2009</label>");
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>2011</label>");
    $('.question1').append ("<label><input type='radio' name='q1' value='a'>2012</label>");
    
    quizBox.append ("<div class='question2'>"); 
    
    $('.question2').append ("<p class='d'> Q2. What is the name of the instructor of the course? </p>");
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Adai Shomanov</label>");
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Anna Andreeva</label>");
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Mariya Deykute</label>");
    $('.question2').append ("<label><input type='radio' name='q2' value='a'>Olena Filchakova</label>");

    quizBox.append ("<div class='question3'>"); 
    
    $('.question3').append ("<p class='d'> Q3. What Adai Shomanov teaches us? </p>");
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>boxing</label>");
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>code</label>");
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>life</label>");
    $('.question3').append ("<label><input type='radio' name='q3' value='a'>football</label>");

    quizBox.append ("<div class='question4'>"); 
    
    $('.question4').append ("<p class='d'> Q4. What is the short version of javascript? </p>");
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>jm</label>");
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>jc</label>");
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>js</label>");
    $('.question4').append ("<label><input type='radio' name='q4' value='a'>jv</label>");

    quizBox.append ("<div class='question5'>"); 
    
    $('.question5').append ("<p class='d'> Q5. What language do we use to style the webpage? </p>");
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>csgo</label>");
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>english</label>");
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>css</label>");
    $('.question5').append ("<label><input type='radio' name='q5' value='a'>russian</label>");

    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
          $("#result").remove();
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
         $("input[name=q2]").each (function (index){
          choice = $(this).parent().text(); 
          if ($( this ).prop("checked") == true && correct [1] == choice){
               countCorrect += 1;
          }
   });
   $("input[name=q3]").each (function (index){
     choice = $(this).parent().text(); 
     if ($( this ).prop("checked") == true && correct [2] == choice){
          countCorrect += 1;
     }
});
$("input[name=q4]").each (function (index){
     choice = $(this).parent().text(); 
     if ($( this ).prop("checked") == true && correct [3] == choice){
          countCorrect += 1;
     }
});
$("input[name=q5]").each (function (index){
     choice = $(this).parent().text(); 
     if ($( this ).prop("checked") == true && correct [4] == choice){
          countCorrect += 1;
     }
});
    $("#quiz-box").append ("<h2 id = 'result'>Result of the quiz is: " + countCorrect + "</h2>");
    countCorrect=0;
    }); 

});