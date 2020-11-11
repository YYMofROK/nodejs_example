console.log("nodejs * 로 삼각형 그리기 - 01");

let starTemp    = "";
let star         = "*";

let loopCnt1    = 0;
let LimitCnt1     = 5;

for(loopCnt1=0; loopCnt1 < LimitCnt1; loopCnt1++)
{
    starTemp    =    starTemp + star;
    console.log( starTemp );

}//    end forconsole.log("nodejs * 로 삼각형 그리기 - 01");


/*

[root@localhost nodeuser]# node ./node_example_01
nodejs * 로 삼각형 그리기 - 01
*
**
***
****
*****
[root@localhost nodeuser]#


*/
