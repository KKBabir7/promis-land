//...map
function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }

//.....short dropdown
$(".fixedresult .dropdown-menu li ").click(function(){
  
    $(".fixedresult .dropdown-select").html($(this).text()+' <i class="bi bi-chevron-expand"></i>');
    
  });

//....sidebar


function openNav() {
		
    var mySidepanel=document.getElementById("mySidepanel");
  
  mySidepanel.classList.add("mainwidthdico");

  var sidenavbar= document.getElementById("sidenavbar");
  var elementbodyopen = document.getElementById("body");
 document.getElementById("sidenavbar").style.width="100%";
 document.getElementById("mySidepanel").style.opacity="1";
 window.onclick = function(event) {
  if (event.target == sidenavbar) {
    sidenavbar.style.width = "0%";
    document.getElementById("mySidepanel").style.opacity="0";
    mySidepanel.classList.remove("mainwidthdico");
    elementbodyopen.classList.remove("fixed-body");
    
    return false;
  }
}
var elementbody = document.getElementById("body");
elementbody.classList.add("fixed-body");
}

function closeNav() {
    
  mySidepanel.classList.remove("mainwidthdico");
  document.getElementById("mySidepanel").style.opacity="0";
  document.getElementById("sidenavbar").style.width="0%";
  var elementbody = document.getElementById("body");
  elementbody.classList.remove("fixed-body");
 
 
}

function leftwhenclick(){
  mySidepanel.classList.remove("mainwidthdico");
  document.getElementById("mySidepanel").style.opacity="0";
  document.getElementById("sidenavbar").style.width="0%";
  var elementbody = document.getElementById("body");
  elementbody.classList.remove("fixed-body");
}















function opensize() {
		
  var mySidepanelsize=document.getElementById("mySidepanelsize");
  mySidepanelsize.classList.add("mainwidthdico");
var sidenavbarsize= document.getElementById("sidenavbarsize");
var elementbodyopenn = document.getElementById("body");
document.getElementById("sidenavbarsize").style.width="100%";
document.getElementById("mySidepanelsize").style.opacity="1";
window.onclick = function(event) {
if (event.target == sidenavbarsize) {
  sidenavbarsize.style.width = "0%";
  document.getElementById("mySidepanelsize").style.opacity="0";
  mySidepanelsize.classList.remove("mainwidthdico");
  elementbodyopenn.classList.remove("fixed-body");
  
  return false;
}
}
var elementbodyy = document.getElementById("body");
elementbodyy.classList.add("fixed-body");
}

function closesize() {
  
  mySidepanelsize.classList.remove("mainwidthdico");
document.getElementById("mySidepanelsize").style.opacity="0";
document.getElementById("sidenavbarsize").style.width="0%";
var elementbodyy = document.getElementById("body");
elementbodyy.classList.remove("fixed-body");


}




function mobilemap() {
		
  var mySidemap=document.getElementById("mySidemap");
document.getElementById("mySidemap").style.width="100%";
document.getElementById("mySidemap").style.opacity="1";
var elementbodyymap = document.getElementById("body");
elementbodyymap.classList.add("fixed-body");
}

function closemap() {
  
  document.getElementById("mySidemap").style.width="0%";
  document.getElementById("mySidemap").style.opacity="0";
var elementbodyymap = document.getElementById("body");
elementbodyymap.classList.remove("fixed-body");


}





//.....main-slider 
jQuery(document).ready(function () {
    jQuery('#slider-container-login').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [0, 10000],
      
        slide: function (event, ui) {
            jQuery("#amount").val("$" + ui.values[0] + "$" + ui.values[1]);
            var mi = ui.values[0];
            var mx = ui.values[1];
            filterSystem(mi, mx);
            $('.min-value').text(mi).css({left: $('#slider-container-log .ui-slider-handle:nth-child(2)').css('left')});
            $('.max-value').text(mx).css({left: $('#slider-container-log .ui-slider-handle:last-child').css('left')});
        }
    })
});

function filterSystem(minPrice, maxPrice) {
    jQuery("li.column").hide().filter(function () {
        var price = parseInt(jQuery(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
}




//...aditainal slider



jQuery(document).ready(function () {
    jQuery('#slider-container-logout').slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [0, 1000000],
        
        slide: function (event, ui) {
            jQuery("#amount").val("$" + ui.values[0] + "$" + ui.values[1]);
            var mi = ui.values[0];
            var mx = ui.values[1];
            filterSystem(mi, mx);
            $('.min-valueout').text(mi).css({left: $('#slider-container-log .ui-slider-handle:nth-child(2)').css('left')});
            $('.max-valueout').text(mx).css({left: $('#slider-container-log .ui-slider-handle:last-child').css('left')});
        }
    })
});

function filterSystem(minPrice, maxPrice) {
    jQuery("li.column").hide().filter(function () {
        var price = parseInt(jQuery(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
}








// custom select


var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
 
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);

  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
     
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
   
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);




