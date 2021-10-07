const PIN_CODE_PATTERN=RegExp("[0-9]{3}[ ]?[0-9]{3}$");

class PINCode
{

    vaildatePinCode(pincodeValue) 
    {
        if (PIN_CODE_PATTERN.test(pincodeValue))
        {
            console.log(("Pin Code "+pincodeValue+" is  valid"));
        }
        else
        {
            console.log(("Pin Code "+pincodeValue+" is  not valid"));

            
        }

    }

    
}

let pincode=new PINCode();
pincode.vaildatePinCode("400088");
pincode.vaildatePinCode("A40088");
pincode.vaildatePinCode("400088B");
pincode.vaildatePinCode("400 088");
