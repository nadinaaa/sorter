class Sorter {
  constructor() {
    this.m = [];
    var tf=null;
  }

  add(element) {
    this.m.push(element);
  }

  at(index) {
    return this.m[index];
  }

  get length() {
    return this.m.length;
  }

  toArray() {
    return this.m;
    
  }

  sort(indices) {
    var mas=indices;
    mas.sort(function(a,b){return a-b;});
    var masi,el;
    masi=[];
    var l1=mas.length;
    for(var i=0; i<l1; i++)
    {
    var t=mas[i];
    var y=this.m[t];
     
      masi[i]=y;

    }
    if(this.tf==null)
    masi.sort(function(a,b){return a-b;});
    else
    {
      var f=this.tf;
      masi.sort(f);
    }
    var l2=this.m.length;
    var j=0;
    var mmm=this.toArray();
    for(i=0; i<l2; i++)
    {
    
    for(var k=0;k<l1;k++)
    {
      if(mas[k]==i)
      {
        mmm[i]=masi[j];
        
        j++;
      }
     }
      
    }
    this.m=mmm;
  }
 
  setComparator(compareFunction) {
    this.tf=compareFunction;

    
  }

  
}

module.exports = Sorter;