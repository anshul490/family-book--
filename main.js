var images = ["https://graphicriver.img.customer.envatousercontent.com/files/301807601/preview_image.jpg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=590&s=18fc17bb213c0ed7d66d4271ee4245b9", "https://thumbs.dreamstime.com/b/happy-man-points-out-something-presentation-showing-element-advertising-goods-vector-illustration-cartoon-style-119680930.jpg", "https://lh3.googleusercontent.com/proxy/LxqSUcSunS0i4B9pS_71stLChAhDSG_KaVNUMYunGv8b5W1qWF43o0hAMorkI-zg3tPS0ap0ulTN0Z0SlkbVFOPu", "https://www.clipartmax.com/png/middle/27-278392_image-of-anime-clipart-3-people-clip-art-images-free-grandma-cartoon.png"];
var names = ["Achweta Nanda Panigrahi", "Niranjan Das", "Madhusmita Das", "Prasana Panigrahi"] ;
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
