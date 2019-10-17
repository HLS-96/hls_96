window.onload=function (ev) {
    var keys=document.querySelectorAll(".key");
    var hash={
        49:{
            div:0,sound:400+400*(1/8)
        },
        50:{
            div:1,sound:400+400*(2/8)
        },
        51:{
            div:2,sound:400+400*(3/8)
        },
        52:{
            div:3,sound:400+400*(4/8)
        },
        53:{
            div:4,sound:400+400*(5/8)
        },
        54:{
            div:5,sound:400+400*(6/8)
        },
        55:{
            div:6,sound:400+400*(7/8)
        },
        56:{
            div:7,sound:400+400*(1)
        }


    }

    //创建一个控制音频的对象

    var audio=new AudioContext();
    var os;
    var flag=true;

    document.onkeydown=function (ev2) {
        if(!flag){
            return;
        }
        flag=false

        var code=(ev2.keyCode)
        keys[hash[code].div].style.boxShadow="0 0 10px #000";
        // 创建一个固定音频
        os=audio.createOscillator();
        // 创建一个声音分析器
        var as=audio.createAnalyser()
        // 创建一个声音的放大器
        var gain=audio.createGain();
        os.connect(as)
        os.connect(gain);
        gain.connect(audio.destination)

        os.frequency.setValueAtTime(hash[code].sound,audio.currentTime);
        os.start(0);

    }
    document.onkeyup=function (ev2) {
        flag=true;
        var code=(ev2.keyCode)
        os.stop(audio.currentTime);
        keys[hash[code].div].style.boxShadow="none";

    }
}