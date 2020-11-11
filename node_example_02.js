console.log("nodejs * 로 삼각형 그리기 - 02");

let starTemp    = "";
let star         = "*";

let loopCnt1    = 0;
let loopCnt2    = 0;
let LimitCnt1   = 5;
let LimitCnt2   = 5;

for(loopCnt1=0; loopCnt1 < LimitCnt1; loopCnt1++)
{
    starTemp = "";
    for(loopCnt2=loopCnt1; loopCnt2 < LimitCnt2; loopCnt2++)
    {
        starTemp    =    starTemp + star;

    }// end for
    console.log( starTemp );

}//    end forconsole.log("nodejs * 로 삼각형 그리기 - 02");

/*
[root@localhost nodeuser]#
[root@localhost nodeuser]# node ./node_example_02.js
nodejs * 로 삼각형 그리기 - 02
*****
****
***
**
*
[root@localhost nodeuser]#
*/
