var date = new Date;

var PresentYear = date.getFullYear();

document.getElementById("PresentYears").value=PresentYear;

var PresentMonth = date.getMonth()+1;

document.getElementById("PresentMonths").value=PresentMonth;

var PresentDay = date.getDate();

document.getElementById("PresentDays").value=PresentDay;


function calculetor()
{
	var byear =parseInt(document.getElementById("brYear").value);

	var bmonth =parseInt(document.getElementById("brMonth").value);

    var bday =parseInt(document.getElementById("brDay").value);

    if(PresentDay<bday)
    {
    	PresentDay1= (PresentDay+30);

    	PresentDay =(PresentDay1 -bday);

    	PresentMonth1 =(PresentMonth-1);

    	if(PresentMonth1 < bmonth)
    	{
    		PresentMonth2 =(PresentMonth1+12);

    		PresentMonth =(PresentMonth2-bmonth);

    		PresentYear1 = (PresentYear - 1);

            PresentYear = (PresentYear1 -byear );
    	}
    	else
    	{
    		PresentMonth =(PresentMonth1-bmonth);

    	    PresentYear =(PresentYear-byear);

    	}

    }
    else
    {
       PresentDay = (PresentDay -bday);

       PresentMonth =(PresentMonth - bmonth);

       PresentYear = (PresentYear -byear );





    }

    document.getElementById("rYear").value=PresentYear;
    document.getElementById("rMonth").value=PresentMonth;
    document.getElementById("rDay").value=PresentDay;

}