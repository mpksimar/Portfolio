var index = 1;

  function plusIndex(n){
    index = index + n;
    showImage(index);
  }

  showImage(1);

  function showImage(n)
  {
    var i;

    var a = document.getElementsByClassName("slides");
    if
    (n>a.length){
      index = 1
    };
    if
    (n<1)
      {
        index = a.length
};
      for(i=0; i<a.length; i++)
      {
        a[i].style.display = "none";
      }
        a[index-1].style.display = "block";
  }


    autoSlide();

    function autoSlide()
    {
      var i;
      
      var a = document.getElementsByClassName("slide");
      for(i=0; i<a.length; i++)
      {
        a[i].style.display = "none";
      }
      if(index > a.length){
        index = 1
      };
        a[index-1].style.display = "block";
        index++;
      setTimeout( autoSlide , 4000);
    }
