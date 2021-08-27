var images = ["Matilda-7.jpg", "matida.jpg", "mrsworm.jpg", "mrworm.jpg"];
var names = ["Michael Wormwood", "Matilda Wormwood", "Mrs Wormwood", "Mr Wormwood"];

var i = 0
function next_member() 
{
    i++;
    var total_family_members = 3
    if (i > total_family_members);
    {
        i = 0
    }
    var updateimage = images[i];
    var updatename = names[i];
    document.getElementById("womwood_img").src = updateimage;
    document.getElementById("names").innerHTML = updatename;
}