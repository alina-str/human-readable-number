module.exports = function toReadable (number) {
  str="";
  if(number==0)
  {
  str+="zero";
  number-=0;
  }
  if(number<1000 && number>=900)
  {
  str+="nine hundred ";
  number-=900;
  }
  if(number<900 && number>=800)
  {
  str+="eight hundred ";
  number-=800;
  }
  if(number<800 && number>=700)
  {
  str+="seven hundred ";
  number-=700;
  }
  if(number<700 && number>=600)
  {
  str+="six hundred ";
  number-=600;
  }
  if(number<600 && number>=500)
  {
  str+="five hundred ";
  number-=500;
  }
  if(number<500 && number>=400)
  {
  str+="four hundred ";
  number-=400;
  }
  if(number<400 && number>=300)
  {
  str+="three hundred ";
  number-=300;
  }
  if(number<300 && number>=200)
  {
  str+="two hundred ";
  number-=200;
  }
  if(number<200 && number>=100)
  {
  str+="one hundred ";
  number-=100;
  }
  if(number<100 && number>=90)
  {
  str+="ninety ";
  number-=90;
  }
  if(number<90 && number>=80)
  {
  str+="eighty ";
  number-=80;
  }
  if(number<80 && number>=70)
  {
  str+="seventy ";
  number-=70;
  }
  if(number<70 && number>=60)
  {
  str+="sixty ";
  number-=60;
  }
  if(number<60 && number>=50)
  {
  str+="fifty ";
  number-=50;
  }
  if(number<50 && number>=40)
  {
  str+="fourty ";
  number-=40;
  }
  if(number<40 && number>=30)
  {
  str+="thirty ";
  number-=30;
  }
  if(number<30 && number>=20)
  {
  str+="twenty ";
  number-=20;
  }
  if(number==19)
  {
  str+="nineteen";
  number-=19;
  }
  if(number==18)
  {
  str+="eighteen";
  number-=18;
  }
  if(number==17)
  {
  str+="seventeen";
  number-=17;
  }
  if(number==16)
  {
  str+="sixteen";
  number-=16;
  }
  if(number==15)
  {
  str+="fifteen";
  number-=15;
  }
  if(number==14)
  {
  str+="fourteen";
  number-=14;
  }
  if(number==13)
  {
  str+="thirteen";
  number-=13;
  }
  if(number==12)
  {
  str+="twelve";
  number-=12;
  }
  if(number==11)
  {
  str+="eleven";
  number-=11;
  }
  if(number==10)
  {
  str+="ten";
  number-=10;
  }
  if(number==9)
  {
  str+="nine";
  number-=9;
  }
  if(number==8)
  {
  str+="eight";
  number-=8;
  }
  if(number==7)
  {
  str+="seven";
  number-=7;
  }
  if(number==6)
  {
  str+="six";
  number-=6;
  }
  if(number==5)
  {
  str+="five";
  number-=5;
  }
  if(number==4)
  {
  str+="four";
  number-=4;
  }
  if(number==3)
  {
  str+="three";
  number-=3;
  }
  if(number==2)
  {
  str+="two";
  number-=2;
  }
  if(number==1)
  {
  str+="one";
  number-=1;
  }
  return str;
}
