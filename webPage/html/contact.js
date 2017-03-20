function checkNullvalues()
{
		var nameInput= document.getElementById('name');
		var emailInput= document.getElementById('email');
		var message=document.getElementById('msg');
		
		
		if((nameInput.value != "") && (emailInput.value != "") && (message.value != ""))
		{
			document.getElementById("error").innerHTML="";
			/*
			alert("You entered: "+nameInput.value);
			alert("You entered:"+emailInput.value);
			alert("You entered: " +message.value);
			*/
			window.alert("Thank you, "+nameInput.value+" ,for reaching out to us. We will get back to you as soon as we can.");
			
		}
		else
		{
			document.getElementById('error').style.color='red'
			document.getElementById("error").innerHTML="*please fill all required fields";
		}
		
		

}
