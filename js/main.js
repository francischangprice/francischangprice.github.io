/*
    Banner ID -- 100918938
    Author Name -- Francis Chang Price
    Description -- Portfolio 

*/
// ANIMATION

// Polaroid animation 
gsap.set(["#about-polaroid-inverted", "#about-polaroid-gray", "#about-polaroid-final"], { opacity: 0 });

gsap.to("#about-polaroid-inverted", {
    opacity: 0.5,
    duration: 0.5,
    ease: "easeOutSine"
}, "+=1.5");

gsap.to("#about-polaroid-gray", {
    opacity: 1,
    duration: 0.5,
    ease: "easeOutSine"
}, "+=0.1");


gsap.to("#about-polaroid-final", {
    opacity: 1,
    duration: 0.5,
    ease: "easeOutSine"
}, "+=0.3");


jQuery(function () {
    let markers = $(".nav-a"); // marker selector
    let widthGain = 1; // 1 default
    let heightGain = 1; // 1 default
  
    // repeat for all markers
    markers.each(function () {
      // Define variables
      let marker = $(this),
        width = marker.width(),
        height = 2 * marker.height(),
        ns = "http://www.w3.org/2000/svg";
  
      // if the svg element doesn't exist, create it
      let svg = document.createElementNS(ns, "svg");
  
      // Also providing attrs for width and height of the svg element
      $(svg)
        .css({
          width: width,
          height: height,
          transform:
            "scale(" + (3 * widthGain * width) / height + "," + heightGain + ")"
        })
        .attr({
          width: width,
          height: height,
          viewBox: "-1 -1 2 2"
        });
  
      // attach it to the marker element
      marker[0].appendChild(svg);
  
      // create the path element
      let path = document.createElementNS(ns, "path");
      
      // Set path attributes and styles
        $(path)
          .attr({
            pathLength: 100,
            "vector-effect": "non-scaling-stroke"
          })
      svg.appendChild(path);
  
      // when creating the element the offset is initialized, however, because of the transition we have to hide it untill it disappears
      setCircle(false);
      setCircle(false);
  
      // generate a new circle and show path on mouse hover
      marker.mouseover(function () {
        setCircle(true);
      });
  
      // this function handles path drawing, it uses the circlePath() function that has tunable inputs - see the codePen https://codepen.io/spencerthayer/pen/nhjwu on how to tune them
      function setCircle(show_element) {
        if (show_element) {
          $(path).css("visibility", "visible");
        } else {
          $(path).css("visibility", "hidden");
        }
        
        let pathLength = 1000 * path.getTotalLength();
        
        // Set path attributes and styles
        $(path)
          .attr({
            d: circlePath(-0.15,0.05,150,190,0.05,0.3)
        })
          .attr({
            "stroke-dasharray": pathLength,
            "stroke-dashoffset": pathLength
          });
      }
  
      // generates a circle path - see https://codepen.io/spencerthayer/pen/nhjwu
      function circlePath(dr_min, dr_max, θ0_min, θ0_max, dθ_min, dθ_max) {
        let c = 0.551915024494,
          β = Math.atan(c),
          d = Math.sqrt(c * c + 1 * 1),
          r = 0.9,
          θ = ((θ0_min + Math.random() * (θ0_max - θ0_min)) * Math.PI) / 180,
          path = "M";
  
        path += [r * Math.sin(θ), r * Math.cos(θ)];
        path += " C" + [d * r * Math.sin(θ + β), d * r * Math.cos(θ + β)];
  
        for (let i = 0; i < 4; i++) {
          θ += (Math.PI / 2) * (1 + dθ_min + Math.random() * (dθ_max - dθ_min));
          r *= 1 + dr_min + Math.random() * (dr_max - dr_min);
          path +=
            " " +
            (i ? "S" : "") +
            [d * r * Math.sin(θ - β), d * r * Math.cos(θ - β)];
          path += " " + [r * Math.sin(θ), r * Math.cos(θ)];
        }
        return path;
      }
    });
  });
  



// var = old, do not use it.
// let = new, use it when value will change. (NOt PROPERTY, BUT VALUE ITSELF)
// const = best, use when value will not change. (PROPERTY CAN CHANGE)

function hamburgerMenu() {
    const menu = document.getElementById("navLinks");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

const navItems = document.querySelectorAll('.nav-links > div');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove the active class from all items
        navItems.forEach(el => el.classList.remove('active'));
        
        // Add the active class to the clicked item
        item.classList.add('active');
    });
});

// $() is shotcut for jquery
function contactMe() {
    let name = $("#name").val(); //variable name, targeting the value of name and getting its value
    let email = $("#email").val();
    let subject = $("#subject").val();
    let message = $("#message").val();

    let contactMe = $.ajax({
        url: './services/contact_me.php',
        type: 'POST',
        data: {
            // info on the left its what on php and on the right is the info from the js 
            name: name,
            email: email,
            subject: subject,
            message: message
        },
        dataType: 'json' //prefered method to send data
    });

    // cant find the file or cant return the json data
    contactMe.fail(function (jqXHR, textStatus) {
        alert('Something went wrong! (contactMe)' + textStatus);
    });

    // 
    contactMe.done(function (data) {
        if (data.error == "0") {
            $(".contact-form1").hide();
            $(".contact-me2").show();

        } else {
            alert("Sorry but the contact me form failed!")
        }
    });

}


// Home function - diplays the home, projects, contact me, and about
function getHome() {
    // targetting all element with the class hideAll
    $(".hideAll").hide();
    // show content-home and shows the nav
    $(".content-home, .showAll").show();
    window.scrollTo(0, 0);
};

// get restaurant app page - no nav except home
function getRestaurantApp() {
    $(".hideAll").hide();
    $(".content-restaurantapp").show();
    window.scrollTo(0, 0);
};

// get celebration card page - no nav except home
function getTravelVideo() {
    $(".hideAll").hide();
    $(".content-travelvideo").show();
    window.scrollTo(0, 0);
};

// get outdoor company page - no nav except home
function getOutdoorCompany() {
    $(".hideAll").hide();
    $(".content-outdoorcompany").show();
    window.scrollTo(0, 0);
};

// get retail installation page - no nav except home
function getRetailInstallation() {
    $(".hideAll").hide();
    $(".content-retailinstallation").show();
    window.scrollTo(0, 0);
};

// get marketing materialspage - no nav except home
function getMotionVideos() {
    $(".hideAll").hide();
    $(".content-motionvideos").show();
    window.scrollTo(0, 0);
};

// get infographic video page - no nav except home
function getPeruMuseum() {
    $(".hideAll").hide();
    $(".content-perumuseum").show();
    window.scrollTo(0, 0);
};

// get product demo page - no nav except home
function getProductDemo() {
    $(".hideAll").hide();
    $(".content-productdemo").show();
    window.scrollTo(0, 0);
};

// get digital signage page - no nav except home
function getDigitalSignage() {
    $(".hideAll").hide();
    $(".content-digitalsignage").show();
    window.scrollTo(0, 0);
};

// get collaborative project page - no nav except home
function getCollaborativeProject() {
    $(".hideAll").hide();
    $(".content-collaborativeproject").show();
    window.scrollTo(0, 0);
};

// click events to get the respective information
$(window).on("load", function () {

    // contact me - submit button
    $("#submit").click(
        function () {
            // alert("SEND");
            contactMe();
            location.href = "#/home/";
        }
    );

    // targetting home
    $(".click-home").click(
        // anonymous function
        function () {
            // binding to the element class projects
            location.href = `#/home/`;
        }
    );

    // restaurant app
    $(".restaurantapp").click(
        function () {
            location.href = `#/restaurant-app/`;
        }

    );
    // celebration card
    $(".perumuseum").click(
        function () {
            location.href = `#/peru-museum/`;
        }

    );

    // outdoor company
    $(".outdoorcompany").click(
        function () {
            location.href = `#/outdoor-company/`;
        }

    );

    // retail installation
    $(".retailinstallation").click(
        function () {
            location.href = `#/retail-installation/`;
        }

    );

 
    $(".motionvideos").click(
        function () {
            location.href = `#/motion-videos/`;
        }

    );

    // infographic video
    $(".perumuseum").click(
        function () {
            location.href = `#/perumuseum/`;
        }

    );

    // product demo
    $(".productdemo").click(
        function () {
            location.href = `#/productdemo/`;
        }

    );

    // digital signage
    $(".digitalsignage").click(
        function () {
            location.href = `#/digitalsignage/`;
        }

    );

    // collaborative project
    $(".collaborativeproject").click(
        function () {
            location.href = `#/collaborative-project/`;
        }

    );

     // collaborative project
     $(".travelvideo").click(
        function () {
            location.href = `#/travel-video/`;
        }

    );


    // SAMMY ROUTING
    // Controller in MVC
    var app = $.sammy(function () {

        // directed the function we want to use
        this.get('#/home/', function () {
            getHome();
        });

        // restaurant app
        this.get('#/restaurant-app/', function () {
            getRestaurantApp();
        });

        // celebration card
        this.get('#/travel-video/', function () {
            getTravelVideo();
        });

        // outdoor company
        this.get('#/outdoor-company/', function () {
            getOutdoorCompany();
        });

        // retail installation
        this.get('#/retail-installation/', function () {
            getRetailInstallation();
        });

        // marketing materials
        this.get('#/motion-videos/', function () {
            getMotionVideos();
        });

        // infographic video
        this.get('#/perumuseum/', function () {
            getPeruMuseum();
        });

        // product demo
        this.get('#/productdemo/', function () {
            getProductDemo();
        });

        // digital signage
        this.get('#/digitalsignage/', function () {
            getDigitalSignage();
        });

        // collaborative project
        this.get('#/collaborative-project/', function () {
            getCollaborativeProject();
        });

    });

    // default when page first loads
    $(function () {
        app.run('#/home/');
    });







});