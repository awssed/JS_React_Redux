    let result=0;
    function checkSize()
    {
        let width=document.getElementById("width").value;
        let height=document.getElementById("height").value;
        let diam=document.getElementById("diam").value;
        if(width<=0||height<=0|| diam<=0)
        {
            alert("Необходимы положительные размеры")
            event.preventDefault();
        }
        if(width<= diam ||height<= diam)
        {
            alert("Размеры напёрстка должны быть больше, чем шарик")
            event.preventDefault();
        }

        let cones=document.querySelectorAll(".cone")
        for(let i=0;i<cones.length;i++)
        {
            cones[i].width=width;
            cones[i].height=height;
        }
        let ball=document.getElementById("ball");
        ball.height=diam;
        ball.width=diam;
        event.preventDefault();
    }
    function refresh()
    {
        result=0;
        document.getElementById('result').innerHTML =   result;
    }
    function mix() {
            async function correctClick()
        {
            this.style.top=-8 + 'vw';
            await wait(2000);
            this.style.top=0+'vw';
            result=result+1;
            document.getElementById('result').innerHTML =   result;
            clearCones(listOfCones)
            mix();
        }
        async function uncorrectClick()
        {
            this.style.top=-8 + 'vw';
            await wait(2000);
            this.style.top=0+'vw';
            result=result-1;
            document.getElementById('result').innerHTML =   result;
            clearCones(listOfCones)
            mix();
        }

        function  clearCones(listOfConesArg)
        {
            listOfConesArg.forEach((cone)=>{
                if(cone.flagCorrect===true)
                {
                    cone.coneLink.removeEventListener('click',correctClick)
                }
                else
                {
                    cone.coneLink.removeEventListener('click',uncorrectClick)
                }

            })
            listOfCones=[]
        }

        function wait(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        let cones = document.querySelectorAll(".cone")
        let listOfCones=[];
        let ball=document.getElementById("ball");
        let randomNumber = Math.floor(Math.random() * 3);
        let selectedCone = cones[randomNumber];
        let coneRect = selectedCone.getBoundingClientRect();

        cones.forEach((cone)=>{
            listOfCones.push({
                flagCorrect:false,
                coneLink:cone
            })
            cone.addEventListener('click', uncorrectClick)
        })

        if(randomNumber===0)
        {
            ball.style.left=selectedCone.width*0.4+"px";
            cones[randomNumber].removeEventListener('click',uncorrectClick)
            listOfCones[randomNumber].flagCorrect=true;
            cones[randomNumber].addEventListener('click',correctClick)
        }
        if(randomNumber===1)
        {
            ball.style.left=selectedCone.width*1.4+"px";
            cones[randomNumber].removeEventListener('click',uncorrectClick)
            listOfCones[randomNumber].flagCorrect=true;
            cones[randomNumber].addEventListener('click',correctClick)
        }
        if(randomNumber===2)
        {
            ball.style.left=selectedCone.width*2.4+"px";
            cones[randomNumber].removeEventListener('click',uncorrectClick)
            listOfCones[randomNumber].flagCorrect=true;
            cones[randomNumber].addEventListener('click',correctClick)
        }
        ball.style.top = 0.8*coneRect.height + "px";
    }
    mix();
