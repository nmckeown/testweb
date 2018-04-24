/*
  @title:   gbg_scripts.js
  @desc:    The javascript file for the galway bay guesthouse website	 
  @author:  Noel McKeown 
  @email:   10361631@mydbs.ie
  @date:    Nov-2017		
*/

	/*
	 * object variables
	 */
	var messageData 	= {name: "", email:"", country:"", subject:"", message:""}; 
	var testimonialData = {name: "", email:"", city:"", message:""}; 
	var tourData 		= {name: "", tour:"", tourdate:"", arrdate:""}; 
	var roomData 		= {name: "", email:"", room:"", checkin:"", checkout:""}; 
	
	/*
	 * This initialises the google map on the location page
	 */
	function initMap() {
		// GPS co-ords of Galway Bay Guesthouse
	    var gbguests = {lat: 53.258692, lng: -9.078932};
	    var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: gbguests
	    });
	    
	    var marker = new google.maps.Marker({
		position: gbguests,
		map: map
	    });
	}
	
	/*
	 * Current date and time for the reservation form
	 */
	function startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var d = today.getDate();
		var m = today.getMonth();
		var y = today.getFullYear();
		// array of months
		var mons = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
		
		m = checkTime(m);
		s = checkTime(s);
		
		document.getElementById('time').innerHTML = d + "-" + mons[m] + "-" + y + " " + h + ":" + m + ":" + s;
		var t = setTimeout(startTime, 500)
	}
	
	// used to represent seconds and minutes as two digits
	function checkTime(i) {
		if (i < 10) {i = "0" + i}; 
		return i;
	}
	
	/*
	 * Form Functions
	 */
	function enableContactUsFormSubmit(){
		hideElementById("thankYouMessage");
		
		// read the contact-us form
		var form = document.getElementsByTagName("form")[1];
			
		form.onsubmit = function(event){
			event.preventDefault();
			handleContactUsFormSubmit();
			return false;
		};
	}
	
	function enableTourBookingFormSubmit(){
		hideElementById("thankYouMessage");
		
		// read the tour booking form
		var form = document.getElementsByTagName("form")[1];
			
		form.onsubmit = function(event){
			event.preventDefault();
			handleTourBookingFormSubmit();
			return false;
		};
	}
	
	function enableRoomFormSubmit(){
		hideElementById("thankYouMessage");
		
		// read the room reservation form
		var form = document.getElementsByTagName("form")[1];
			
		form.onsubmit = function(event){
			event.preventDefault();
			handleRoomFormSubmit();
			return false;
		};
	}
	
	function enableTestimonialFormSubmit(){
		hideElementById("thankYouMessage");
		
		// read the room reservation form
		var form = document.getElementsByTagName("form")[1];
			
		form.onsubmit = function(event){
			event.preventDefault();
			handleTestimonialFormSubmit();
			return false;
		};
	}

	function hideElementById(elementId){
		var element = document.getElementById(elementId);
		if (isVisible(element)){
			element.style.display = "none";
		}
	}

	function showElementById(elementId){
		var element = document.getElementById(elementId);
		if (!isVisible(element)){
			element.style.display = "block";
		}
	}

	function isVisible(element){
		return (element.style.display != "none");
	}

	function handleTourBookingFormSubmit(){
		hideElementById("booking-form");
		hideElementById("formDesc");
		displayTourThankYouMessage();
	}
	
	function handleContactUsFormSubmit(){
		hideElementById("contact-form");
		displayThankYouMessage();
	}
	
	function handleRoomFormSubmit(){
		hideElementById("room-reservation-form");
		hideElementById("formDesc");
		displayRoomThankYouMessage();
	}
	
	function handleTestimonialFormSubmit(){
		hideElementById("testimonial-form");
		displayTestimonialThankYouMessage();
	}

	function displayThankYouMessage(){
		writeThankYouMessage();
		showElementById("thankYouMessage")
	}
	
	function displayTourThankYouMessage(){
		writeTourThankYouMessage();
		showElementById("thankYouMessage")
	}
	
	function displayRoomThankYouMessage(){
		writeRoomThankYouMessage();
		showElementById("thankYouMessage")
	}
	
	function displayTestimonialThankYouMessage(){
		writeTestimonialThankYouMessage();
		showElementById("thankYouMessage")
	}

	function writeThankYouMessage(){
		getFormData();
		var name = document.getElementById("senderName");
		var subject = document.getElementById("senderSubject");
		name.innerHTML = messageData.name;
		subject.innerHTML = messageData.subject;
	}
	
	function writeTourThankYouMessage(){
		getTourFormData();
		var name = document.getElementById("senderName");
		var tour = document.getElementById("senderTour");
		name.innerHTML = tourData.name;
		tour.innerHTML = tourData.tour;
	}
	
	function writeRoomThankYouMessage(){
		getRoomFormData();
		var name = document.getElementById("senderName");
		var room = document.getElementById("senderRoom");
		name.innerHTML = tourData.name;
		room.innerHTML = tourData.room;
	}
	
	function writeTestimonialThankYouMessage(){
		getTestimonialFormData();
		var name = document.getElementById("senderName");
		name.innerHTML = tourData.name;
	}

	function getFormData(){
		messageData.name 	= getFormElementDataById("name");
		messageData.email 	= getFormElementDataById("email");
		messageData.subject = getFormElementDataById("subject");
		messageData.message = getFormElementDataById("message");
	}
	
	function getTourFormData(){
		tourData.name 		= getFormElementDataById("name");
		tourData.tour 		= getFormElementDataById("tour");
		tourData.tourdate 	= getFormElementDataById("tourdate");
		tourData.arrdate 	= getFormElementDataById("arrdate");
	}
	
	function getRoomFormData(){
		tourData.name 		= getFormElementDataById("name");
		tourData.room 		= getFormElementDataById("room");
		tourData.checkin 	= getFormElementDataById("checkin");
		tourData.checkout 	= getFormElementDataById("checkout");
	}
	
	function getTestimonialFormData(){
		testimonialData.name 	= getFormElementDataById("name");
		testimonialData.email 	= getFormElementDataById("email");
		testimonialData.city 	= getFormElementDataById("city");
		testimonialData.message = getFormElementDataById("message");
	}

	function getFormElementDataById(elementId){
		console.log('elementId: ',elementId);
		var value;
		var element = document.getElementById(elementId);
		console.log('element: ',element);
		switch(element.nodeName.toLowerCase()){
			case "input":
			case "textarea":
			case "date":
				value= element.value;
			case "email":
				value= element.value;
				break;
			case "select":
				value = element.options[element.selectedIndex].text;
				break;
		}
		return value;
	}