let Productivity = Number(prompt("الإنتاجية: "));
let Commitment = Number( prompt("الإلتزام: "));
let teamSpirit = Number( prompt("روح التعاون مع الفريق : "));

//  //======================== لو القيم اكبر من 100 نلغي ===================
if (Productivity > 100) {
    document.write
        (`
            <div class="div2">
            <h2>Error</h2>
            </div>
        `)
  throw new Error("Error!");
}
if (Commitment > 100) {
     (`
            <div class="div2">
            <h2>Error</h2>
            </div>
        `)
  throw new Error("Error!");
}
if (teamSpirit > 100) {
     (`
            <div class="div2">
            <h2>Error</h2>
            </div>
        `)
  throw new Error("Error!");
}

////===================== ممكن نستغنى عنهم لكن مكسل =====================
let c1 = Productivity<50;
let c2 = Commitment <50;
let c3 = teamSpirit <50;

// //================================ المتوسط ================================
let av = (Productivity + Commitment + teamSpirit)/3;

// //==============================الحالات ==================================
if(av >= 90 && av <= 100)
    {
        
        document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div class="a">
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="a">
                    <h4>نتيجة التقييم</h4>
                    <h2> ممتاز جدًا 💎</h2>
                </div>
            </div>
            </section>
        `);
    }
else if(av >= 75 && av < 90)
    {

        if(Productivity<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإنتاجية </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(Commitment<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(teamSpirit<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب التعاون </h2>
                </div>
            </div>
            </section>
        `);
        }
        else{
        document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div>
                    <h4>نتيجة التقييم</h4>
                    <h2> جيد جدًا 👍</h2>
                </div>
            </div>
            </section>
        `);  
        } 

    }
else if(av >= 60 && av < 75)
    {

        if(c1== true && c2 == true)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment}</h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام والإنتاجية </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(c1 == true && c3 == true)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment}</h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإنتاجية والتعاون </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(c2 == true && c3 == true)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment}</h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام والتعاون </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(Productivity<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإنتاجية </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(Commitment<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(teamSpirit<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب التعاون </h2>
                </div>
            </div>
            </section>
        `);
        }
        else{
        document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div>
                    <h4>نتيجة التقييم</h4>
                    <h2> مقبول 🙂</h2>
                </div>
            </div>
            </section>
        `); 
        }     
    }
else if(av >= 50 && av < 60)
    {

        if(c1== true && c2 == true)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment}</h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام والإنتاجية </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(c1 == true && c3 == true)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment}</h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإنتاجية والتعاون </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(c2 == true && c3 == true)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment}</h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام والتعاون </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(Productivity<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div class="prf">
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإنتاجية </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(Commitment<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div class="cof">
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب الإلتزام </h2>
                </div>
            </div>
            </section>
        `);
        }

        else if(teamSpirit<50)
        {
            document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div class="tef">
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب بسبب التعاون </h2>
                </div>
            </div>
            </section>
        `);
        }

        else{
       document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div>
                    <h4>نتيجة التقييم</h4>
                    <h2> ضعيف ⚠️</h2>
                </div>
            </div>
            </section>
        `);      
        }

    }
else if(av < 50)
    {
        document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>${Productivity}</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>${Commitment} </h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>${teamSpirit}</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>${av}</h2>
                </div>

            </div>
            
            <div class="div2">
                <div class="f">
                    <h4>المتوسط</h4>
                    <h2>${av}</h2> 
                </div>

                <div class="f">
                    <h4>نتيجة التقييم</h4>
                    <h2> راسب ❌</h2>
                </div>
            </div>
            </section>
        `);      
    }
else
    {
        document.write
        (`
            <section>
            <div class="div1">

                <div>
                    <h4>الإنتاجية</h4>
                   <h2>❌</h2> 
                </div>

                <div>
                    <h4> الإلتزام</h4>
                    <h2>❌</h2>
                </div>
                <div>
                    <h4>روح التعاون مع الفريق</h4>
                    <h2>❌</h2>
                </div>
                <div>
                    <h4>المتوسط</h4>
                    <h2>❌</h2>
                </div>

            </div>
            
            <div class="div2">
                <div>
                    <h4>المتوسط</h4>
                    <h2>❌</h2> 
                </div>

                <div>
                    <h4>نتيجة التقييم</h4>
                    <h2>❌</h2>
                </div>
            </div>
            </section>
        `);   
    }


    