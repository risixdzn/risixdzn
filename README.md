
<div class='columns'>
    <div class='column1'>
        <h2 class='title'>Stack <span class="desktop"><img src='./stack/codepen.svg'></span></h2>
        <div class='divisoria'></div>
        <img class='tech' src='./stack/html.png'>
        <img class='tech' src='./stack/css.png'>
        <img class='tech' src='./stack/js.png'>
        <img class='tech' src='./stack/react.png'>
        <img class='tech' src='./stack/tailwind.png'>
        <img class='tech' src='./stack/sass.png'>
        <img class='tech' src='./stack/framer.png'>
        <img class='tech' src='./stack/firebase.png'>
        <img class='tech' src='./stack/vercel.png'>
        <img class='tech' src='./stack/figma.png'>
        <img class='tech' src='./stack/vscode.png'>
    </div>      
    <div class='column2'>
        <h2 class='title'>Learning <span class="desktop"><img src='./stack/building-columns-solid.svg'></span></h2>
        <div class='divisoria right'></div>              
        <img class='tech' src='./stack/ts.png'>
        <img class='tech' src='./stack/next.png'>
        <img class='tech' src='./stack/mongodb.png'>
        <img class='tech' src='./stack/next.png'>
        <img class='tech' src='./stack/json.png'>  
    </div>    
</div>





<style>
    .tech{
        height: 26px   
    }   

    .title{
        font-weight: 600;
        font-size: 30px
    }

    .divisoria{
        width: 100px;
        height: 5px;
        border-radius: 5px;
        background-color: #bdbdbd;
        margin-bottom: 12px;
    }

   
    .desktop img{
        height: 25px;
        transform: translateY(3px);
        color #bdbdbd;
    }

    .columns{
        display: flex;
        flex-wrap:wrap;
    }

    .linhav{
        width: 5px;
        height: 100%;
        background-color: #bdbdbd;
        margin-right: 50px;
    }

    .column1,
    .column2{
        width: 50%;
        height:auto;     
        min-width: 250px;          
    }

    .column2{
        text-align: right;
    }
    
    .right{
        margin-left: 100%;
        transform: translateX(-100%);
    }

    .column2 .tech{
        height: 25px;
    }

    @media only screen and (max-width: 500px) {
    .right{
        margin-left: 0%;
        transform: translateX(0%);
    }
}
</style>