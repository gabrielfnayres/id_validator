class nationalID
{
    constructor(IDsent)
    {
        Object.defineProperty(this,'IDclean',
        {
            writable : false,
            enumerable : true,
            configurable : false,
            value : IDsent.replace(/\D+/g, '')
        });
    }

    isSequency()
    {
        return this.IDclean.charAt(0).repeat(11) === this.IDclean
    }

    createNewID()
    {
        const IdNonumbers = this.IDclean.slice(0, -2)
        const digit1 = this.createDigit(IdNonumbers)
        const digit2 = this.createDigit(IdNonumbers + digit1)
        this.newID2 = IdNonumbers + digit1 + digit2
    }   
  
    createDigit(IdNonumbers)
    {
        let total = 0
        let reverse = IdNonumbers.length + 1
    
        for(let i of IdNonumbers)
        {
            total += reverse * Number(i)
            reverse--;
        }
        
        const digit = 11 - (total % 11)
        return digit <= 9 ? String(digit) : '0'
    
    }

    authentication()
    {
        if(!this.IDclean) 
        {
            return false
        }
        if(typeof this.IDclean !== 'string')
        {
            return false
        }
        if(this.IDclean.length !== 11)
        {
            return false
        }   
        if(this.isSequency())
        {
            return false    
        }
        this.createNewID()
    
        return this.newID2 === this.IDclean
    }
}


let id1 = new nationalID('070.987.720-03');
// let id1 = new nationalID('999.999.999-99');
if(console.log(id1.authentication()))
{
    console.log('Valid ID')
}
else 
{
    console.log('Invalid ID')
}

 
